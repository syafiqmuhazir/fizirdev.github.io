const navLinks = document.querySelectorAll(".nav-link");

document.body.addEventListener("click", function (e) {
  if (e.target.className == "nav-link") {
    navLinks.forEach(function (navLink) {
      navLink.className = "nav-link";
    });
    e.target.classList.add("active");
  }
});

function sendMail() {
  const subject = document.getElementById("subject").value;
  const nama = document.getElementById("nama").value;
  const pesan = document.getElementById("pesan").value;

  window.open(
    "mailto:fixnesia@gmail.com?subject=" +
      subject +
      "&body=Dari: " +
      nama +
      " ------ " +
      pesan +
      "",
  );
}
