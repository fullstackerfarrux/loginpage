let userR = document.querySelector(".registeruser");
let passwordR = document.querySelector(".registerpassword");
let btnR = document.querySelector(".registerBtn");

btnR.addEventListener("click", (e) => {
  let textuser = userR.value;
  let textpassword = passwordR.value;
  localStorage.setItem(`${textuser}`, textpassword);
});
