تتطلب ("../../ التكوين.شبيبة");
تتطلب ("../../ الأساسية.شبيبة");

الوحدة.الصادرات = {
  الاسم: "غروبلينك",
  الاسم المستعار: ["غكلينك"],
  تنازلي: "للحصول على رابط المجموعة المتزامنة.",
  الفئة:"مجموعة",
  الاستعمال: "غكلينك",
  رد:"🍁",
  البداية: غير متزامن (
    ميكو,
    m,
    {بادئة ، إيسبوتادمين ، إيسادمين ، الفوقية ، مايم }
  ) => {
    إذا (!إيسادمين)
      عودة ميكو.إرسال رسالة (م. من عند, { نص: فوضى.مستخدم} ، {مقتبس: م });

    فار رابط = تنتظر ميكو.كومبوينفيتكود (م. من);
    رمز الارتباط فار = `https://chat.whatsapp.com / {{رابط}`;

    محاولة {
      في انتظار ميكو . بروفيلبيكتوريورل (م. من ، "صورة");
    } قبض {
      بجك = بوتيماجي 1;
    }

    محاولة {
      انتظر ميكو.إرسال رسالة(
        م. من,
        {
          صورة: { رابط: بغك ، ميميتيب: "صورة/جبيغ"},
          اسم المجموعة: _ * {{البيانات الوصفية.الموضوع} * \ن \ ن _ Link رابط المجموعة: _ \ ن {{رمز الارتباط} \ ن`,
        },
        { مقتبس: م }
      );
    } الصيد (يخطئ) {
      (ميكو).إرسال رسالة (م. من ، { نص ` ' {{فوضى.بوتادمين}'} ، {مقتبس: م });
    }
  },
};
