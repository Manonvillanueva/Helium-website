const cursor = document.querySelector(".cursor");
const mouseMove = document.querySelector(".mouseMove");
const mouseMoveBefore = document.querySelector(".mouseMoveBefore");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.x + "px";
  cursor.style.top = e.y + "px";
  mouseMove.style.left = e.x + "px";
  mouseMove.style.top = e.y + "px";
  mouseMoveBefore.style.left = e.x + "px";
  mouseMoveBefore.style.top = e.y + "px";
});
