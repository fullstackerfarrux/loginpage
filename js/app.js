let userL = document.querySelector(".loginuser");
let passwordL = document.querySelector(".loginpassword");
let btnL = document.querySelector(".loginBtn");

btnL.addEventListener("click", (e) => {
  let textuser = userL.value;
  let textpassword = passwordL.value;
  let password = localStorage.getItem(textuser);
  if (password === textpassword) {
    btnL.setAttribute("href", "./posts.html");
  } else {
    alert("Registratsiyadan o'ting yoki malumotni to'ggri kiriting");
  }
});
