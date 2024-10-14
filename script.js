document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const userEmail = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // This part will trigger an email to your address using 'mailto' link
    const mailtoLink = `mailto:rrajakum@usc.edu?subject=Message%20from%20${userEmail}&body=${message}`;

    window.location.href = mailtoLink;
  });

const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

//carousel section
const slide = document.querySelector(".carousel-slide");
const items = document.querySelectorAll(".carousel-item");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;

function showSlide(index) {
  const totalItems = items.length;
  if (index >= totalItems) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalItems - 1;
  } else {
    currentIndex = index;
  }
  slide.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener("click", () => showSlide(currentIndex - 1));
nextButton.addEventListener("click", () => showSlide(currentIndex + 1));

// Optional: Automatic slide every 5 seconds
setInterval(() => showSlide(currentIndex + 1), 5000);
