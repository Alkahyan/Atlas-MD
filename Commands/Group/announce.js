تتطلب ("../../ التكوين.شبيبة");
تتطلب ("../../ الأساسية.شبيبة");

الوحدة.الصادرات = {
  الاسم:"أعلن",
  الاسم المستعار: ["أنون"، "أنون"],
  تنازلي: "علامة كل عضو في المجموعة دون @ ذكر",
  الفئة:"مجموعة",
  الاستخدام: "message < رسالتك>",
  رد:"🍁",
  البداية: غير متزامن (
    ميكو,
    m,
    { النص ، البادئة ، إيسادمين ، المشاركين، أرجس ، بوتونيد }
  ) => {

      رسالة فار = "*" الاهتمام هنا "*";

    إذا (م. نقلت) {
        الرسالة = "*" الانتباه هنا "*";
      }
    آخر إذا (!نص & & م. مقتبس) {
      رسالة = ' {{م.نقلت ? م.نقلت.جي اس :"} `;
    }
    إذا (م. بوتونيد) {
      رسالة = م. بوتونيد;
    }
    آخر إذا (أرجس[0]){
      رسالة = الحجج.انضم ('');
    }
    آخر إذا (نص===") {
      الرسالة = "*" الانتباه هنا "*";
    }
   
    آخر{
      الرسالة = "*" الانتباه هنا "*";
    }
    انتظر ميكو.إرسال رسالة(
      م. من,
      { نص: رسالة ، يذكر: المشاركون.الخريطة ((أ) => a.id)},
      { مقتبس: م }
    );
  },
};
