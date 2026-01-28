//hero-tab
function switchFeature(index) {
  const tabs = document.querySelectorAll(".feat-tab");
  const contents = document.querySelectorAll(".feat-content");

  tabs.forEach((tab) => tab.classList.remove("active-tab"));
  contents.forEach((box) => box.classList.remove("show"));

  tabs[index].classList.add("active-tab");
  contents[index].classList.add("show");
}

//FAQ

function toggleFaqNew(el) {
  const answer = el.nextElementSibling;
  const icon = el.querySelector(".faq-icon-new");

  if (answer.style.display === "block") {
    answer.style.display = "none";
    icon.textContent = "+";
  } else {
    document.querySelectorAll(".faq-a-new").forEach((a) => (a.style.display = "none"));
    document.querySelectorAll(".faq-icon-new").forEach((i) => (i.textContent = "+"));

    answer.style.display = "block";
    icon.textContent = "−";
  }
}

// mobile menu
function openMenu(){
  document.getElementById("mobileMenu").style.display="flex";
}

function closeMenu(){
  document.getElementById("mobileMenu").style.display="none";
}

// bookmark
function addBookmark() {
  const title = document.title;
  const url = window.location.href;

  let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  bookmarks.push({ title, url });

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  alert("Bookmark saved successfully!");
}

const form = document.getElementById('newsletterForm');
const emailInput = document.getElementById('emailInput');
const wrapper = document.getElementById('inputWrapper');

form.addEventListener('submit', (e) => {
  // Simple email pattern check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput.value)) {
    e.preventDefault(); // Stop the form from sending
    wrapper.classList.add('is-invalid'); // Show the red error UI
  } else {
    wrapper.classList.remove('is-invalid'); // Clear UI if valid
    alert('Subscription successful!');
  }
});

// Remove the red box as soon as the user starts correcting the email
emailInput.addEventListener('input', () => {
  wrapper.classList.remove('is-invalid');
});