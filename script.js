//For Smooth Scrolling

const navLinks = document.querySelectorAll('.custom-nav-item');
const nav = document.querySelector('nav');
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor link behavior
    const targetSection = document.getElementById(this.hash.substring(1));
    console.log(targetSection.id)
    // Enhanced smooth scrolling with optional offset for navbar height
    if (window.innerWidth <= 768) { // Adjust the width as needed for your mobile breakpoint
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo({
          top: targetSection.offsetTop ,
          behavior: 'smooth'
        });
      }
  });
});

function sendmail(){
    const name=document.getElementById("name");
    const email=document.getElementById("email");
    const subject=document.getElementById("subject");
    const message=document.getElementById("message");

    const body=`Name : ${name.value} <br>
    E-mail : ${email.value} <br>
    Message : ${message.value}
    `

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "gourigirish1234@gmail.com",
        Password : "35084DE28AF62A9252110F4CAAFFE93BE215",
        To : 'gourigirish1234@gmail.com',
        From : "gourigirish1234@gmail.com",
        Subject :subject.value,
        Body : body
    }).then(
      message => alert(message)
    );
}