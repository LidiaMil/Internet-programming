function alertCookie() {
    // alert(docCookies.keys());
    alert(document.cookie);
}

function validatePhone(phone){
    let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    return regex.test(phone);
}

document.getElementById('messageForm').addEventListener('submit', function (e) {
    e.preventDefault()
  
    var inps = document.querySelectorAll("input, textarea")
    const checkboxElems = document.querySelectorAll('.answer');
    if( checkboxElems[0].checked ){
        if( checkboxElems[2].checked ){
            console.log('не соответствует 0 и 2 галочка');
        }
    }
    for (var q=0; q<inps.length; ++q) {
        if( inps[q].name == "phone") {
            if (!validatePhone(inps[q].value)){
                // docCookies.setItem("phone", inps[q].value, 864e2, "/");
                document.cookie = `phone=${inps[q].value}`;
              console.log('phone Не соответствует');
            }else{
              console.log('phone Соответствует');
            }
        }
        if( inps[q].name == "message") {
            document.cookie = `message=${inps[q].value}`;
            // docCookies.setItem("message", inps[q].value, 864e2, "/");
            if (inps[q].value.length >=5 && inps[q].value.length <= 2000){
                console.log('message Соответствует');
            }else{
                  console.log('message Не соответствует');
            }
        }
    }
})



// jQuery(function ($) {
//     $('#messageForm').on('submit', function (event) {
//         if (validateForm()) { // если есть ошибки возвращает true
//             event.preventDefault();
//         }
//     });

//     function validateForm() {
//         $(".text-error").remove();

//         // Проверка телефона   
//         let phone = $('#phone').val(); 
//         console.log(phone)
//         let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
//         if (!regex.test(phone)){
//             v_phone = false;
//             console.log('Не соответствует');
//         } else {
//             v_phone = true;
//             console.log('Соответствует');
//         }
//         $("#phone").toggleClass('error', v_phone);

//         let message = $('#message').val(); 
//         if (message.length >=5 && message.length <=2000 ){
//             v_message = true;
//             console.log('Соответствует');
//         } else {
//             v_message = false;
//             console.log('Не соответствует');
//         }
//         $("#message").toggleClass('error', v_message);
       
//         return (v_phone || v_message);
//     }

// });

// $(document).ready(function () {
//     $("[name='messageForm']").validate({
//     rules: {
//         sender: {
//             required: true,
//             minlength: 3,
//           lettersonly: true
//         },
//         receiver: {
//             required: true,
//             minlength: 3,
//             lettersonly: true
//         },
//         message: {
//           required: true,
//           minlength: 5,
//           maxlength: 30,
//           lettersonly: true
//         },
//       },
//      messages: {
//                 sender: {required:"Please enter your name"},
//                 receiver:{required: "Please enter receiver name up to 3 characters"},
//                 message: {required: "Enter your message 3-20 characters"},
//           },
//  });