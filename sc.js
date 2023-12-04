window.onload = function() {
    // عرض رسالة ترحيبية عند تحميل الصفحة
    alert("مرحبًا بك في موقع بيشة للمياه!");
    
    // تغيير لون النص عند النقر على العنوان
    var header = document.querySelector("header");
    header.addEventListener("click", function() {
      header.style.color = "red";
    });
  };
  
  window.onload = function() {
    // استهداف النموذج
    var form = document.querySelector("form");

    // التحقق من المدخلات عند النقر على زر الإرسال
    form.addEventListener("submit", function(event) {
      // إيقاف سلوك النموذج الافتراضي
      event.preventDefault();

      // التحقق من صحة الحقول
      var nameInput = document.getElementById("name");
      var emailInput = document.getElementById("email");
      var subjectInput = document.getElementById("subject");
      var messageInput = document.getElementById("message");

      var isValid = true;

      if (nameInput.value.trim() === "") {
        alert("يرجى إدخال اسمك");
        isValid = false;
      }

      if (emailInput.value.trim() === "") {
        alert("يرجى إدخال عنوان بريدك الإلكتروني");
        isValid = false;
      }

      if (subjectInput.value.trim() === "") {
        alert("يرجى إدخال عنوان الموضوع");
        isValid = false;
      }

      if (messageInput.value.trim() === "") {
        alert("يرجى إدخال نص الرسالة");
        isValid = false;
      }

      // إرسال النموذج إذا كانت جميع الحقول صحيحة
      if (isValid) {
        form.submit();
      }
    });
  };