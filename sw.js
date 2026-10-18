/* Service Worker — تشغيل كامل دون إنترنت */
const CACHE = 'mdim-v11';
const ASSETS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './packages/quran.js', './packages/hadith.js', './packages/riyad.js', './packages/tafsir/_meta.js', './packages/remote_manifest.js', './packages/library_manifest.js'];
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS).catch(()=>{})));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});
/* الملفات التي تتغير مع التحديثات: صفحة التطبيق وفهرس المكتبة */
function isFresh(req){
  try{
    const u = new URL(req.url);
    return req.mode === 'navigate'
        || u.pathname.endsWith('/index.html')
        || u.pathname.endsWith('/packages/library_manifest.js');
  }catch(_){ return false; }
}
self.addEventListener('fetch', e => {
  const req = e.request;
  if (isFresh(req)) {
    /* الأحدث أولاً: اجلب من الشبكة وحدّث المخزن، وإن تعذّر فمن المخزن (للعمل دون إنترنت) */
    e.respondWith(
      fetch(req).then(resp => {
        const copy = resp.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(()=>{});
        return resp;
      }).catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
    return;
  }
  /* الباقي: من المخزن أولاً للسرعة والعمل دون إنترنت */
  e.respondWith(
    caches.match(req).then(r => r || fetch(req).then(resp => {
      const copy = resp.clone();
      caches.open(CACHE).then(c => c.put(req, copy)).catch(()=>{});
      return resp;
    }).catch(() => caches.match('./index.html')))
  );
});
