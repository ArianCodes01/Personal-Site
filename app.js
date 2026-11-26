(function () {
   const sidebar = document.getElementById("sidebar"), barsIcon = document.getElementById("barsIcon"), closeBtn = document.getElementById("closeBtn"), scrollTopBtn = document.getElementById("scrollTopBtn"), app = document.getElementById("typewriter");
   if (sidebar && barsIcon && closeBtn) { barsIcon.onclick = function () { sidebar.style.right = 0 }; closeBtn.onclick = function () { sidebar.style.right = "-280px" } }
   if (scrollTopBtn) { window.addEventListener("scroll", () => { scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none" }); scrollTopBtn.addEventListener("click", () => { window.scrollTo({ top: 0, behavior: "smooth" }) }) }
   if (app && typeof Typewriter !== "undefined") { new Typewriter(app, { loop: true, delay: 150, deletedSpeed: 120 }).typeString("Web Developer").pauseFor(2000).deleteAll().typeString("Front-End Developer").pauseFor(2000).deleteAll().typeString("UI/UX Designer").pauseFor(2000).start() }
})();
