import "./style.css";
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

// Fungsi untuk menutup menu
const closeMenu = () => {
  menu.classList.add("hidden");
};

// Fungsi untuk toggle menu
const toggleMenu = () => {
  menu.classList.toggle("hidden");

  // Jika menu terbuka, tambahkan event listener untuk klik di luar
  if (!menu.classList.contains("hidden")) {
    setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 10);
  } else {
    document.removeEventListener("click", handleClickOutside);
  }
};

// Fungsi untuk menangani klik di luar menu
const handleClickOutside = (event) => {
  if (!menu.contains(event.target) && !btn.contains(event.target)) {
    closeMenu();
    document.removeEventListener("click", handleClickOutside);
  }
};

// Event listener untuk tombol menu
btn.addEventListener("click", toggleMenu);

// Event listener untuk tombol escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !menu.classList.contains("hidden")) {
    closeMenu();
    document.removeEventListener("click", handleClickOutside);
  }
});

// Event listener untuk resize window (opsional)
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    // Sesuaikan dengan breakpoint Anda
    closeMenu();
    document.removeEventListener("click", handleClickOutside);
  }
});
