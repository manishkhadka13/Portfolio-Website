let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header");
let test = document.querySelectorAll(".test");
for (var i = 0; i < test.length; i++) {
  test[i].addEventListener("click", () => {
    menu.classList.toggle("fa-times");
    header.classList.toggle("active");
  });
}

for (var i = 0; i < test.length; i++) {}

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};
// script for theme toggler
let themeToggler = document.querySelector("#theme-toggler");
themeToggler.onclick = () => {
  themeToggler.classList.toggle("fa-sun");
  if (themeToggler.classList.contains("fa-sun")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};
// script for date
let dt = new Date();
let date_class = document.querySelector(".date");
let date_form = dt.toDateString().split(" ");
let dx = `${date_form[0]}, ${date_form[1]} ${date_form[2]}, ${date_form[3]}`;
date_class.innerHTML = dx;

// Script for databases

function runSubmit() {
  // get the value of the input field
  nameF = document.querySelector("#name").value;
  emailF = document.querySelector("#email").value;
  subjectF = document.querySelector("#subject").value;
  messageF = document.querySelector("#message").value;

  // send request to localhost:8000/hello
  option = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          name: nameF,
          email: emailF,
          subject: subjectF,
          message: messageF,
          receiver:"mandy.khadka10@gmail.com"
      })
  };


  url = 'https://api.ashminbhattarai.com.np/mail';

  fetch(url, option)
  .then((response) => alert("Message sent successfully!"))
  .catch((json) => alert("Could not send the message. Please mail me at:mandy.khadka10@gmail.com"));

  // // clear the input field
  document.querySelector("#name").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#subject").value = "";
  document.querySelector("#message").value = "";

  // // prevent the form from submitting
  return false;
}
