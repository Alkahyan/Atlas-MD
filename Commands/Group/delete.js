الوحدة.الصادرات = {
  الاسم:"حذف",
  الاسم المستعار: ["ديل"],
  تنازلي: "لحذف رسالة",
  الفئة:"مجموعة",
  استعمال ` ' علامة رسالة ونوع * ديل * `,
  رد:"🍁",
  بداية: أسينك (ميكو ، م ، {إيسادمين ، إيسبوتادمين ، بوشنام}) = > {
    إذا (!م. نقلت)
      عودة ميكو.إرسال رسالة(
        م. من,
        { نص: 'يرجى ذكر رسالة لحذفها !` },
        { مقتبس: م }
      );
    إذا (!إيسادمين&&!إسبوتادمين)
      عودة ميكو.إرسال رسالة(
        م. من,
        {
          * يجب أن يكون كلاهما مشرفا من أجل استخدام هذا الأمر !`,
        },
        { مقتبس: م }
      );
    
    فار { من ، فروم ، معرف } = م.نقلت;

    مفتاح كونست = {
      ريموتيجيد: م. من,
      فروم: خطأ,
      المعرف: m.quoted.id,
      مشارك: م.نقلت.المرسل,
    };

    انتظر ميكو.إرسال رسالة (م. من ، { حذف: مفتاح });
  },
};
