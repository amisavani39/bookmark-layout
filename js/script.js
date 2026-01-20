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
function openMenu() {
  document.getElementById("mobileMenu").style.display = "flex";
}

function closeMenu() {
  document.getElementById("mobileMenu").style.display = "none";
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

