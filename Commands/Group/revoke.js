تتطلب ("../../ التكوين.شبيبة");
تتطلب ("../../ الأساسية.شبيبة");

الوحدة.الصادرات = {
  الاسم: "إبطال",
  الاسم المستعار: ["إعادة تعيين" ، "إعادة تعيين" ، "إعادة تعيين" ، "إعادة تعيين"],
  تنازلي: "إعادة تعيين رابط المجموعة",
  الفئة:"مجموعة",
  الاستعمال: "إبطال",
  رد:"🍁",
  البداية: غير متزامن (
    ميكو,
    m,
    {بادئة ، إيسبوتادمين ، إيسادمين}
  ) => {
    إذا (م. من = = '120363040838753957@g.us') العودة م. الرد ('آسف ، هذا الأمر غير مسموح به في * مجموعة دعم أطلس*!\ ن \ نلايسمح لك بتغيير رابط مجموعة الدعم !' );
    
    إذا (!إيسادمين)
      عودة ميكو.إرسال رسالة (م. من عند, { نص: فوضى.مستخدم} ، {مقتبس: م });

    محاولة {
      انتظر ميكو.مجموعةالسبقدعوة (م.من عند).ثم(
        (الدقة) =>
          (ميكو).إرسال رسالة(
            م. من,
            { النص ` ' تم تحديث رابط المجموعة * * بنجاح!` },
            { مقتبس: م }
          )
      );
    } الصيد (يخطئ) {
      (ميكو).إرسال رسالة (م. من ، { نص ` ' {{فوضى.بوتادمين}'} ، {مقتبس: م });
    }
  },
};
