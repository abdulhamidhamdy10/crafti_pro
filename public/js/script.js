'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * MOBILE NAVBAR TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElements(navTogglers, "click", toggleNav);



/**
 * active header when window scroll down to 100px
 */

// const header = document.querySelector("[data-header]");

// const headerActive = function () {
//   if (window.scrollY > 100) {
//     header.classList.add("active");
//   } else {
//     header.classList.remove("active");
//   }
// }

// window.addEventListener("scroll", headerActive);


<script>
    {/* // استدعاء الأنيميشن عند دخول العنصر في الشاشة */}
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated');
                // يمكن إزالة المراقبة بعد أن يتم تشغيل الأنيميشن
                observer.unobserve(entry.target);
            }
        })
    })

    // استهدف العنصر الذي تريد تطبيق الأنيميشن عليه
    const section = document.getElementById('mySection');
    observer.observe(section);
</script>
