كونست النمس = تتطلب ("النمس");
تتطلب ("../../ التكوين.شبيبة");
تتطلب ("../../ الأساسية.شبيبة");
كونست { عضو الكنيست } = تتطلب ("../../ قاعدة البيانات / مخطط البيانات.شبيبة");



الوحدة.الصادرات = {
    الاسم:"مرحبا",
    الاسم المستعار: ["مرحبا بكم" ، "مرحبا بكم"],
    تنازلي: "تمكين أو تعطيل رسائل الترحيب/الوداع في مجموعة",
    الفئة:"مجموعة",
    الاستعمال: "مرحبا [تشغيل / إيقاف]",
    رد:"🎀",
    البداية: غير متزامن (
      ميكو,
      m,
      { أرغس ، إيسبوتادمين ، إيسادمين ، إيسكريتور ، الرد ، البادئة ، بوشنام }
    ) => {
      
        إذا (!إيسادمين)
        عودة ميكو.إرسال رسالة(
          م. من,
          {
            يجب أن يكون *المشرف * لتشغيل / إيقاف * مرحبا / وداعا * ميساجيس !`,
          },
          { مقتبس: م }
        );
  
      دعونا تشيكداتا = تنتظر عضو الكنيست.فيندون ({ معرف: م. من });
      فار جروب = تنتظر ميكو.مجموعةميتاداتا (م. من عند);
      أعضاء فار = مجموعة ["المشاركون"];
      فار ممس = [];
      الأعضاء.خريطة (غير متزامن (أدم) = > {
        دفع (أدم. معرف. استبدال("c.us" ، "s.whatsapp.net"));
      });

      إذا (أرجس [0] = = = "على") {
        إذا (!التحقق من البيانات) {
          انتظر عضو الكنيست الجديد ({معرف: م.من ، التبديلمرحبا بكم: "صحيح" }).حفظ();
          (ميكو).إرسال رسالة(
            م. من,
            {
              النص ` ' * مرحبا / وداعا * رسائل تم * تنشيط * في هذه المجموعة!`,
              معلومات السياق: { مذكورة: ممس },
            },
            { مقتبس: م }
          );
          عودة ميكو.إرسال رسالة(
            م. من,
            { نص ` ' * مرحبا / وداعا *تم تنشيط الرسائل * في هذه المجموعة!` },
            { مقتبس: م }
          );
        } آخر {
          إذا (تحقق من البيانات.التبديل مرحبا = = "صحيح")
            عودة ميكو.إرسال رسالة(
                م. من,
                { النص ` ' * مرحبا / وداعا * الرسائل بالفعل * تنشيط * في هذه المجموعة!` },
                { مقتبس: م }
              );
          انتظر عضو الكنيست.تحديث واحد ({ معرف: م. من} ، { سويتشويلكم: "صحيح"});
          عودة ميكو.إرسال رسالة(
            م. من,
            { نص ` ' * مرحبا / وداعا *تم تنشيط الرسائل * في هذه المجموعة!` },
            { مقتبس: م }
          );
        }
      } آخر إذا (أرجس [0] = = = "إيقاف") {
        إذا (!التحقق من البيانات) {
          انتظر عضو الكنيست الجديد ({معرف: م.من ، التبديلمرحبا بكم: "خطأ" }).حفظ();
          عودة ميكو.إرسال رسالة(
            م. من,
            { نص ` ' * مرحبا / وداعا *تم إلغاء تنشيط الرسائل * في هذه المجموعة!` },
            { مقتبس: م }
          );
        } آخر {
          إذا (تحقق من البيانات.سويتشويلهوك = = "كاذبة") العودة ميكو.إرسال رسالة(
            م. من,
            { النص ` ' * مرحبا / وداعا * لم يتم * تنشيط * في هذه المجموعة!` },
            { مقتبس: م }
          );
          انتظر عضو الكنيست.تحديث واحد ({ معرف: م. من} ، { التبديل مرحبا بك: "خطأ"});
          عودة ميكو.إرسال رسالة(
            م. من,
            { نص ` ' * مرحبا / وداعا *تم إلغاء تنشيط الرسائل * في هذه المجموعة!` },
            { مقتبس: م }
          );
        }
      } آخر {
        دعونا أزرارنتيلينك = [
          {
            زر:`{{بادئة}مرحبا بكم في',
            زر النص: { عرض النص: "على"},
            النوع: 1,
          },
          {
            زر: 'prefix {بادئة}مرحبا بك,
            زر النص: { عرض النص: "إيقاف"},
            النوع: 1,
          },
        ];
        دعونا بمفغ = {
          صورة: {رابط: بوتيماجي2} ,
          شرح: '\ ن يرجى النقر على الزر أدناه \ ن * تشغيل / إيقاف * \ ن`,
          تذييل الصفحة ` ' *{{بوتنام}*`,
          أزرار: أزرارنتيلينك,
          نوع الرأس: 4,
        };
        انتظر ميكو.إرسال رسالة (م. من ، بمفغ ، { مقتبس: م });
    }
  },
};
