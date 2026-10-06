/* ============================================================
   المكتبة الإسلامية — فهرس الكتب القابلة للتنزيل عند الطلب
   المصدر: مستودع بيانات مفتوح (OpenITI / tafsir-api) عبر jsDelivr CDN.
   كل كتاب يُنزَّل مرّة واحدة ثم يُحفظ داخل الجهاز ويعمل دون إنترنت.
   كل نص يبقى منسوباً لمؤلفه ومصدره؛ لا تأليف ولا دمج.
   ============================================================ */
(function(){
  window.PKG = window.PKG || {};
  var BASE = 'https://cdn.jsdelivr.net/gh/mohammed-2-5/islamic-library-data@master/data/books/';
  function b(cat, id, title, author, bytes){
    return {key:id, bookId:id, cat:cat, title:title, author:author, bytes:bytes};
  }
  window.PKG.libraryManifest = {
    base: BASE,
    credit: 'بيانات نصية من مصادر مفتوحة (OpenITI / tafsir-api) — كل كتاب منسوب لمؤلفه.',
    sections: [
      {id:'aqeedah', label:'العقيدة', icon:'\uD83D\uDD4B', books:[
        b('aqeedah','usul_al_sunnah','أصول السنة','الإمام أحمد بن حنبل',15721),
        b('aqeedah','aqeedah_wasitiyyah','العقيدة الواسطية','شيخ الإسلام ابن تيمية',59830),
        b('aqeedah','fiqh_akbar','الفقه الأكبر','الإمام أبو حنيفة',15983)
      ]},
      {id:'fiqh', label:'الفقه وأصوله', icon:'\u2696\uFE0F', books:[
        b('fiqh','ilam_al_muwaqqiin','إعلام الموقعين عن رب العالمين','ابن قيم الجوزية',4368742),
        b('fiqh','adhkar_nawawi','الأذكار','الإمام النووي',1088916),
        b('fiqh','al_umm','الأم','الإمام الشافعي',10837281),
        b('fiqh','ihkam_usul_ahkam','الإحكام في أصول الأحكام','ابن حزم الأندلسي',3729280),
        b('fiqh','al_risala_shafii','الرسالة','الإمام الشافعي',624330),
        b('fiqh','siyasa_shariyya','السياسة الشرعية','شيخ الإسلام ابن تيمية',284630),
        b('fiqh','turuq_hukmiyya','الطرق الحكمية في السياسة الشرعية','ابن قيم الجوزية',828557),
        b('fiqh','qawaid_nuraniyyah','القواعد النورانية الفقهية','شيخ الإسلام ابن تيمية',731216),
        b('fiqh','kafi_ibn_abd_barr','الكافي في فقه أهل المدينة','ابن عبد البر',1789544),
        b('fiqh','al_kafi_fiqh','الكافي في فقه الإمام أحمد','ابن قدامة المقدسي',4123433),
        b('fiqh','al_majmu_nawawi','المجموع شرح المهذب','الإمام النووي',26978528),
        b('fiqh','al_mustasfa','المستصفى من علم الأصول','الإمام الغزالي',1789734),
        b('fiqh','al_mughni','المغني','ابن قدامة المقدسي',17306561),
        b('fiqh','al_muqni_fiqh','المقنع في فقه الإمام أحمد','ابن قدامة المقدسي',971656),
        b('fiqh','rawdat_al_talibin','روضة الطالبين وعمدة المفتين','الإمام النووي',10903075),
        b('fiqh','rawdat_al_nazir','روضة الناظر وجنة المناظر','ابن قدامة المقدسي',993266),
        b('fiqh','zad_al_maad','زاد المعاد في هدي خير العباد','ابن قيم الجوزية',5470140),
        b('fiqh','umdat_al_fiqh','عمدة الفقه','ابن قدامة المقدسي',269015),
        b('fiqh','minhaj_talibin','منهاج الطالبين','الإمام النووي',765181)
      ]},
      {id:'tazkiyah', label:'التزكية والرقائق', icon:'\uD83C\uDF3F', books:[
        b('tazkiyah','al_da_wal_dawa','الداء والدواء (الجواب الكافي)','ابن قيم الجوزية',715228),
        b('tazkiyah','al_tawwabin','كتاب التوابين','ابن قدامة المقدسي',458767),
        b('tazkiyah','al_wabil_al_sayyib','الوابل الصيب من الكلم الطيب','ابن قيم الجوزية',417466),
        b('tazkiyah','amrad_al_qulub','أمراض القلوب وشفاؤها','شيخ الإسلام ابن تيمية',257389),
        b('tazkiyah','bidayat_al_hidaya','بداية الهداية','الإمام الغزالي',143130),
        b('tazkiyah','bustan_al_arifin','بستان العارفين','الإمام النووي',166092),
        b('tazkiyah','ighathat_al_lahfan','إغاثة اللهفان من مصايد الشيطان','ابن قيم الجوزية',78588),
        b('tazkiyah','ihya_ulum_al_din','إحياء علوم الدين','الإمام الغزالي',7936328),
        b('tazkiyah','madarij_al_salikin','مدارج السالكين','ابن قيم الجوزية',3827858),
        b('tazkiyah','riqqa_wa_buka','الرقة والبكاء','ابن قدامة المقدسي',157694),
        b('tazkiyah','uddat_al_sabirin','عدة الصابرين وذخيرة الشاكرين','ابن قيم الجوزية',723870)
      ]},
      {id:'hadith', label:'الحديث والسنة', icon:'\uD83D\uDCDC', books:[
        b('hadith','bulugh_almaram','بلوغ المرام','الحافظ ابن حجر العسقلاني',2016318),
        b('hadith','nawawi40','الأربعون النووية','الإمام النووي',71956),
        b('hadith','qudsi40','الأربعون القدسية','جمع العلماء',83919),
        b('hadith','shahwaliullah40','الأربعون لولي الله الدهلوي','الشاه ولي الله الدهلوي',10633),
        b('hadith','aladab_almufrad','الأدب المفرد','الإمام البخاري',1731819),
        b('hadith','shamail_muhammadiyah','الشمائل المحمدية','الإمام الترمذي',533160),
        b('hadith','mishkat_almasabih','مشكاة المصابيح','الخطيب التبريزي',5312554)
      ]},
      {id:'seerah', label:'السيرة النبوية', icon:'\uD83C\uDF19', books:[
        b('seerah','sirat_ibn_hisham','السيرة النبوية','ابن هشام',1398523)
      ]},
      {id:'tafseer', label:'التفسير', icon:'\uD83D\uDCD6', books:[
        b('tafseer','tafsir_muyassar','التفسير الميسر','مجمع الملك فهد (نخبة من العلماء)',3134762),
        b('tafseer','tafsir_al_saadi','تيسير الكريم الرحمن (تفسير السعدي)','الشيخ عبد الرحمن السعدي',7008504),
        b('tafseer','tafsir_al_baghawi','معالم التنزيل (تفسير البغوي)','الإمام البغوي',7840857),
        b('tafseer','tafsir_al_wasit','التفسير الوسيط','محمد سيد طنطاوي',18419370)
      ]}
    ]
  };
})();
