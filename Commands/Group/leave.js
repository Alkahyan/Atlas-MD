كونست خ = تتطلب ("خ");
كونست { مكو } = تتطلب ("../../ قاعدة البيانات / مخطط البيانات.شبيبة");

الوحدة.الصادرات = {
    الاسم: "ترك",
    الاسم المستعار: ["ليفيجك"],
    تنازلي: "اسأل بوت لمغادرة مجموعة",
    الفئة:"مجموعة",
    الاستعمال: "ترك",
    رد:"👋",
    البداية: غير متزامن (
      ميكو,
      m,
      { أرغس ، النص ، البادئة ، إيسكريتور، بوشنام ، إيسادمين ، المشاركين }
    ) => {
      فار مودستاتوس = تنتظر مكو.فيندون ({معرف:م.المرسل}).ثم (غير متزامن (مستخدم) = > {
        إذا (المستخدم.أددمودس== "صحيح") {
          عودة"صحيح";
        }
        آخر{
          عودة"كاذبة";
        }
      }).الصيد (خطأ = > {
        وحدة التحكم.سجل (خطأ)
        // عودة ميكو.إرسال رسالة (م. من عند, {نص: حدث خطأ داخلي أثناء التحقق من حالة التعديل الخاصة بك.'} ، {مقتبس: م });
      });

      
      إذا (مودستاتوس== "كاذبة"&&!إسكريتور &&!إيسادمين) عودة ميكو.إرسال رسالة (م. من ، { نص: 'آسف ،فقط * يمكن لمسؤولي المجموعة * و * تعديل * استخدام هذا الأمر !'} ، {مقتبس: م });
      دع آي إم جي ="https://wallpapercave.com/wp/wp9667218.png";

      انتظر ميكو.إرسال رسالة (م. من, { صورة: {رابط:"https://wallpapercave.com/wp/wp9667218.png"} ، شرح: "سأغادر هذه المجموعة عند الطلب... \ ن \ ن رعاية الجميع:) ' ، يذكر: المشاركين.الخريطة ((أ) => a.id) ، مقتبس: م }).ثم (غير متزامن () = > {
         (ميكو).ترك المجموعة (م. من).قبض (ه = > {
          (ميكو).إرسال رسالة (م. من ، { نص: حدث خطأ !'} ، {مقتبس: م });
        });
      });

      
            }
          }
