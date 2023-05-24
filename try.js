//navigation effects//
window.addEventListener("scroll", function(){
  const header = document.querySelector("nav");
  header.classList.toggle("stickly", window.scrollY > 0);
});

// start of mpesa popup//
let popup = document.getElementById("popup");
function openPopup(){
  popup.classList.add("open-popup");
 }
 function closePopup(){
  popup.classList.remove("open-popup");
  }
//End of mpesa popup//
//Start of manual slider//
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});
//End of manual slider//

// Start of form submission//
//On getting form elements//
/** 
window.addEventListener("DOMContentLoaded",function(){
    // get form elements//
    var form=document.getElementById("my-form");
    var status=document.getElementById("status");

    //success and error functions after the form is submitted//

     function success(){
        form.reset();
        status.innerHTML="Message sent";
        status.classList.add("success");
     }

     function error(){
        status.innerHTML=("Oops! there was a problem");
        status.classList.add("error");
     }
     
     //handling the form submission events//
     form.addEventListener("submit",function(e){
        e.preventDefault();
        var data=new FormData(form);
        ajax(form.method,form.action,data,success,error);
     });
  });

  //helper function for sending the ajax request//
function ajax(method,url,data,success,error){
    var xhr=new XMLHttpRequest();
    xhr.open(method,url);
    xhr.setRequestHeader("Accept",application/json);
    xhr.onreadystatechange=function(){
        if(xhr.readyState!== XMLHttpRequest.Done) return;
        if(xhr.status===200){
            success(xhr.response,xhr.responseType);
        } else{
            error(xhr.status,xhr.response,xhr.responseType);
        }
    };
    xhr.send(data);
}
*/
//End of form submission//
