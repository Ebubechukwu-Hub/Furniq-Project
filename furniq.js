const menuBtn = document.querySelector("#menuBtn");
const menuBtnIcon = document.querySelector("#menuBtn i");
const menuBtndropDown = document.querySelector(".drop-down");
const dropDownLinks = document.querySelectorAll(".drop-down a");
menuBtn.addEventListener("click", function () {
  menuBtndropDown.classList.toggle("open");
  const isOpen = menuBtndropDown.classList.contains("open");
  menuBtnIcon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});
dropDownLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    menuBtndropDown.classList.remove("open");
    menuBtnIcon.className = "fa-solid fa-bars";
  });
});

// FAQ section functionality
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach(function (item) {
  const question = item.querySelector(".faq-question");
  const icon = item.querySelector("i");

  question.addEventListener("click", function () {
    item.classList.toggle("open");

    const isOpen = item.classList.contains("open");
    icon.className = isOpen ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down";
  });
});

// hero Shop Now button
const heroShopBtn = document.querySelector("#heroShopBtn");

heroShopBtn.addEventListener("click", function () {
  if (heroShopBtn.value === "Shop Now") {
    alert("Welcome to Furniq! Let's find the right furniture for your home.");
    return;
  }
  alert("Welcome to Furniq! Let's find the right furniture for your home");
});

// product buttons
const rileyBtn = document.querySelector("#rileyBtn");

rileyBtn.addEventListener("click", function () {
  if (rileyBtn.value === "Riley Armchair") {
    alert("Riley Armchair - $180.00");
    return;
  }
  alert("Riley Armchair - $180.00");
});

const haperBtn = document.querySelector("#haperBtn");

haperBtn.addEventListener("click", function () {
  if (haperBtn.value === "Haper Sofa") {
    alert("Haper Sofa - $190.00");
    return;
  }
  alert("Haper Sofa - $190.00");
});

const carterBtn = document.querySelector("#carterBtn");

carterBtn.addEventListener("click", function () {
  if (carterBtn.value === "Carter Coffee Table") {
    alert("Carter Coffee Table - $200.00");
    return;
  }
  alert("Carter Coffee Table - $200.00");
});


const cercaBtn = document.querySelector("#cercaBtn");

cercaBtn.addEventListener("click", function () {
  if (cercaBtn.value === "Cerca Striped") {
    alert("Cerca Striped - $220.00");
    return;
  }
  alert("Cerca Striped - $220.00");
});

// see more button
const seeMoreBtn = document.querySelector("#seeMoreBtn");

seeMoreBtn.addEventListener("click", function () {
  if (seeMoreBtn.value === "See More Collection") {
    alert("More furniture is coming soon!");
    return;
  }
  alert("More furniture is coming soon");
});

// room buttons
const livingBtn = document.querySelector("#livingBtn");

livingBtn.addEventListener("click", function () {
  if (livingBtn.value === "Living Room") {
    alert("Showing all Living Room Furnitures");
    return;
  }
  alert("Showing all Living Room Furnitures");
});

const bedroomBtn = document.querySelector("#bedroomBtn");

bedroomBtn.addEventListener("click", function () {
  if (bedroomBtn.value === "Bedroom") {
    alert("Showing all Bedroom furnitures");
    return;
  }
  alert("Showing all Bedroom furnitures");
});

const diningBtn = document.querySelector("#diningBtn");

diningBtn.addEventListener("click", function () {
  if (diningBtn.value === "Dining") {
    alert("Showing all Dinning Furnitures");
    return;
  }
  alert("Showing all Dinning Furnitures");
});

// contact button
const contactBtn = document.querySelector("#contactBtn");

contactBtn.addEventListener("click", function () {
  if (contactBtn.value === "Contact Us") {
    alert("Thanks for reaching out! Our team will get back to you soon.");
    return;
  }
  alert("Thanks for reaching out! Our team will get back to you soon.");
});

// bottom banner Shop Now button
const ctaShopBtn = document.querySelector("#ctaShopBtn");

ctaShopBtn.addEventListener("click", function () {
  if (ctaShopBtn.value === "Shop Now") {
    alert("Welcome to Furniq! Let's find the right furniture for your home!");
    return;
  }
  alert("Welcome to Furniq! Let's find the right furniture for your home!");
});

