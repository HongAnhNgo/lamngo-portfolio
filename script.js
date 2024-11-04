const details = [...document.querySelectorAll("details")];
document.addEventListener("click", function (e) {
  let isClickInsideDetails = details.some((f) => f.contains(e.target));

  if (!isClickInsideDetails) {
    details.forEach((f) => f.removeAttribute("open"));
  } else {
    details.forEach((f) => {
      if (!f.contains(e.target)) {
        f.removeAttribute("open");
      }
    });
  }
});
