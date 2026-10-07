/* Service Worker — تشغيل كامل دون إنترنت */
const CACHE = 'mdim-v10';
const ASSETS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './packages/quran.js', './packages/hadith.js', './packages/riyad.js', './packages/tafsir/_meta.js', './packages/remote_manifest.js', './packages/library_manifest.js'];
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS).catch(()=>{})));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
      const copy = resp.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy)).catch(()=>{});
      return resp;
    }).catch(() => caches.match('./index.html')))
  );
});
