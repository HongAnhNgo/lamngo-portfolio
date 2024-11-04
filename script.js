// const leftSidebar = document.getElementById("left-sidebar");
// const rightSidebar = document.getElementById("right-sidebar");

// const closeLeftSidebarBtn = document.getElementById("close-left-sidebar-btn");
// const closeRightSidebarBtn = document.getElementById("close-right-sidebar-btn");

// const openLeftSidebarBtn = document.getElementById("open-left-sidebar-btn");
// const openRightSidebarBtn = document.getElementById("open-right-sidebar-btn");

// openLeftSidebarBtn.addEventListener("click", () => {
//   leftSidebar.style.display = "block";
// });

// openRightSidebarBtn.addEventListener("click", () => {
//   rightSidebar.style.display = "block";
// });

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
