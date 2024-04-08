document.addEventListener("DOMContentLoaded", function () {
  const description = document.getElementById("hidden");
  const button = document.getElementById("btn-show");

  button.addEventListener("click", function () {
    if (
      description.style.display === "none" ||
      description.style.display === ""
    ) {
      description.style.display = "block";
      button.textContent = "Less";
    } else {
      description.style.display = "none";
      button.textContent = "More";
    }
  });
});
