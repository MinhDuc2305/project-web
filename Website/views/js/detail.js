document.querySelectorAll(".rating span").forEach((star) => {
    star.addEventListener("click", function () {
      document
        .querySelectorAll(".rating span")
        .forEach((s) => s.classList.remove("active"));
      this.classList.add("active");
    });
  });
  