function toggleMenu() {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
}

document.addEventListener("click", function (event) {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const isClickInside =
    hamburger.contains(event.target) || mobileMenu.contains(event.target);

  if (!isClickInside && mobileMenu.classList.contains("active")) {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
  }
});

// splide

const links = document.querySelectorAll(".category-link");
const products = document.querySelectorAll(".product");

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    links.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");

    const category = this.dataset.category;

    products.forEach((product) => {
      if (category === "all" || product.dataset.category === category) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});

//

function saveProfile() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const headline = document.getElementById("headline").value;
  const language = document.getElementById("language").value;

  console.log("Saving profile:", {
    firstName,
    lastName,
    headline,
    language,
  });

  const message = document.getElementById("successMessage");
  message.classList.add("show");

  setTimeout(() => {
    message.classList.remove("show");
  }, 3000);
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));
    this.classList.add("active");
  });
});

document.querySelectorAll("input, select").forEach((element) => {
  element.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      saveProfile();
    }
  });
});

const courses = [
  {
    id: 1,
    img: "./img/desigin.png",
    title: "Adobe Illustrator Scretch Course",
    rating: 5.8,
    price: "$24.92",
    language: "english",
  },
  {
    id: 2,
    img: "img/Buseniss.png ",
    title: "Bootcamp Vue.js Web Framework",
    rating: 4.1,
    price: "$21.92",
    language: "uzb",
  },
  {
    id: 3,
    img: "/img/mak.png",
    title: "Design Fundamentals",
    rating: 2.6,
    price: "$28.92",
    language: "rus",
  },
  {
    id: 4,
    img: "/img/uzunsoch.png",
    title: "Adobe Illustrator Scretch Course",
    rating: 2.6,
    price: "$31.92",
    language: "english",
  },
  {
    id: 5,
    img: "/img/wablyu.svg",
    title: "Bootcamp Vue.js Web Framework",
    rating: 4.1,
    price: "$44.92",
    language: "uzb",
  },
  {
    id: 6,
    img: "img/devoloper.png",
    title: "Design Fundamentals",
    rating: 5.8,
    price: "$28.92",
    language: "rus",
  },
  {
    id: 7,
    img: "/img/ofes.svg",
    title: "Bootcamp Vue.js Web Framework",
    rating: 2.6,
    price: "$33.92",
    language: "english",
  },
  {
    id: 8,
    img: "/img/osign.svg",
    title: "Bootcamp Vue.js Web Framework",
    rating: 4.1,
    price: "$41.92",
    language: "uzb",
  },
  {
    id: 9,
    img: "/img/women.png",
    title: "Design Fundamentals",
    rating: 5.8,
    price: "$17.92",
    language: "rus",
  },
  {
    id: 6,
    img: "img/devoloper.png",
    title: "Design Fundamentals",
    rating: 5.8,
    price: "$28.92",
    language: "rus",
  },
  {
    id: 7,
    img: "/img/ofes.svg",
    title: "Bootcamp Vue.js Web Framework",
    rating: 2.6,
    price: "$33.92",
    language: "english",
  },
  {
    id: 8,
    img: "/img/osign.svg",
    title: "Bootcamp Vue.js Web Framework",
    rating: 4.1,
    price: "$41.92",
    language: "uzb",
  },
];

const container = document.getElementById("coursesContainer");

function showCourses(list) {
  container.innerHTML = list
    .map(
      (c) => `
           
 <div class="cardd" data-language="${c.language}" data-rating="${c.rating}">
              <div class="cars-img">
                <div class="scids">
                  <p>Best Seller</p>
                  <p style="background-color: #a04ae3">20% OFF</p>
                </div>
                <img src="${c.img}" alt="" />
              </div>
              <div class="course-info">
                <h3>${c.title}</h3>
                <p>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 9.75C11.0025 9.75 15 10.755 15 12.75V14.25C15 14.6625 14.6625 15 14.25 15H3.75C3.3375 15 3 14.6625 3 14.25V12.75C3 10.755 6.9975 9.75 9 9.75ZM9 11.1748C6.7725 11.1748 4.4248 12.27 4.4248 12.75V13.5752H13.5752V12.75C13.5752 12.27 11.2275 11.1748 9 11.1748ZM9 3C10.6575 3 12 4.3425 12 6C12 7.6575 10.6575 9 9 9C7.3425 9 6 7.6575 6 6C6 4.3425 7.3425 3 9 3ZM9 4.4248C8.13 4.4248 7.4248 5.13 7.4248 6C7.4248 6.87 8.13 7.5752 9 7.5752C9.87 7.5752 10.5752 6.87 10.5752 6C10.5752 5.13 9.87 4.4248 9 4.4248Z"
                      fill="#1B1B1B"
                      fill-opacity="0.6"
                    />
                  </svg>
                  Kitani Studio
                </p>
                <p class="card-text">
                  More than 8yr Experience as Illustrator. Learn how to becoming
                  professional Illustrator Now...
                </p>
                <p class="start">
                  <svg
                    width="85"
                    height="16"
                    viewBox="0 0 88 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 11.6798L10.7667 13.3531C11.2733 13.6598 11.8933 13.2064 11.76 12.6331L11.0267 9.48643L13.4733 7.36643C13.92 6.97976 13.68 6.24643 13.0933 6.19976L9.87334 5.92643L8.61334 2.9531C8.38667 2.4131 7.61334 2.4131 7.38667 2.9531L6.12667 5.91976L2.90667 6.1931C2.32 6.23976 2.08 6.9731 2.52667 7.35976L4.97334 9.47976L4.24 12.6264C4.10667 13.1998 4.72667 13.6531 5.23334 13.3464L8 11.6798Z"
                      fill="#FFD130"
                    />
                    <path

                      d="M26 11.6798L28.7667 13.3531C29.2733 13.6598 29.8933 13.2064 29.76 12.6331L29.0267 9.48643L31.4733 7.36643C31.92 6.97976 31.68 6.24643 31.0933 6.19976L27.8733 5.92643L26.6133 2.9531C26.3867 2.4131 25.6133 2.4131 25.3867 2.9531L24.1267 5.91976L20.9067 6.1931C20.32 6.23976 20.08 6.9731 20.5267 7.35976L22.9733 9.47976L22.24 12.6264C22.1067 13.1998 22.7267 13.6531 23.2333 13.3464L26 11.6798Z"
                      fill="#FFD130"
                    />
                    <path
                      d="M44 11.6798L46.7667 13.3531C47.2733 13.6598 47.8933 13.2064 47.76 12.6331L47.0267 9.48643L49.4733 7.36643C49.92 6.97976 49.68 6.24643 49.0933 6.19976L45.8733 5.92643L44.6133 2.9531C44.3867 2.4131 43.6133 2.4131 43.3867 2.9531L42.1267 5.91976L38.9067 6.1931C38.32 6.23976 38.08 6.9731 38.5267 7.35976L40.9733 9.47976L40.24 12.6264C40.1067 13.1998 40.7267 13.6531 41.2333 13.3464L44 11.6798Z"
                      fill="#FFD130"
                    />
                    <path
                      d="M62 11.6798L64.7667 13.3531C65.2733 13.6598 65.8933 13.2064 65.76 12.6331L65.0267 9.48643L67.4733 7.36643C67.92 6.97976 67.68 6.24643 67.0933 6.19976L63.8733 5.92643L62.6133 2.9531C62.3867 2.4131 61.6133 2.4131 61.3867 2.9531L60.1267 5.91976L56.9067 6.1931C56.32 6.23976 56.08 6.9731 56.5267 7.35976L58.9733 9.47976L58.24 12.6264C58.1067 13.1998 58.7267 13.6531 59.2333 13.3464L62 11.6798Z"
                      fill="#FFD130"
                    />
                    <path
                      d="M79.3853 2.94971C79.612 2.40971 80.3852 2.40971 80.6119 2.94971L81.8726 5.9165L85.0992 6.1958C85.6857 6.24264 85.9188 6.97618 85.4722 7.36279L83.0259 9.48291L83.7593 12.6362C83.8925 13.2095 83.2718 13.6626 82.7652 13.356L79.9986 11.6831L77.232 13.3491C76.7253 13.6558 76.1055 13.2027 76.2388 12.6294L76.9722 9.48291L74.5259 7.36279C74.0793 6.97613 74.3192 6.24247 74.9058 6.1958L78.1255 5.92236L79.3853 2.94971ZM79.9986 10.436L82.5123 11.9565L81.8453 9.10303L84.0591 7.18311L81.1392 6.9292L79.9986 4.23584V10.436Z"
                      fill="#FFD130"
                    />
                  </svg>
                  (${c.rating}K)
                </p>
                <div class="price">
                  <h1>${c.price}</h1>
                  <del>$32.90</del>
                </div>
                <p>${c.language.toUpperCase()}</p>
              </div>
            </div>
  `
    )
    .join("");
}

showCourses(courses);

let activeRating = 0;
let activeLanguage = "all";

const allInputs = document.querySelectorAll(".accordion-body input");

allInputs.forEach((input) => {
  input.addEventListener("change", () => {
    const type = input.getAttribute("type");
    const langValue = input.value;

    if (input.name === "language") {
      activeLanguage = langValue;
    }

    if (type === "radio" || type === "checkbox") {
      const labelText = input.parentElement.innerText;
      if (labelText.includes("5.8")) activeRating = 5.8;
      else if (labelText.includes("4.5")) activeRating = 4.5;
      else if (labelText.includes("4.1")) activeRating = 4.1;
      else if (labelText.includes("3.8")) activeRating = 3.5;
      else if (labelText.includes("2.6")) activeRating = 2.6;
      else activeRating = 0;
    }

    applyFilters();
  });
});

function applyFilters() {
  let filtered = [...courses];

  if (activeRating > 0) {
    filtered = filtered.filter((c) => c.rating >= activeRating);
  }

  if (activeLanguage !== "all") {
    filtered = filtered.filter((c) => c.language === activeLanguage);
  }

  showCourses(filtered);
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fields = ["firstName", "lastName", "headline", "language", "link"];
  let isValid = true;

  fields.forEach((id) => {
    const input = document.getElementById(id);
    const error = document.getElementById(id + "Error");
    const value = input.value.trim();

    if (id === "link") {
      const urlPattern = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-]*)*$/;
      if (!urlPattern.test(value)) {
        input.classList.add("error");
        input.classList.remove("success");
        error.style.display = "block";
        isValid = false;
        return;
      }
    }

    if (value === "") {
      input.classList.add("error");
      input.classList.remove("success");
      error.style.display = "block";
      isValid = false;
    } else {
      input.classList.remove("error");
      input.classList.add("success");
      error.style.display = "none";
    }
  });

  if (isValid) {
    alert("✅ Ma'lumotlar muvaffaqiyatli yuborildi!");
  }
});

const form = document.getElementById("userForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log("Form yuborildi — lekin sahifa yangilanmadi!");
});
