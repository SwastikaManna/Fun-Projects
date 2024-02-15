const cursor = document.querySelector(".cursor");
      window.addEventListener("click", function () {
        cursor.classList.add("clickin");
      });
      window.addEventListener("contextmenu", function () {
        event.preventDefault(); 
        cursor.classList.remove("clickin");
      });
      window.addEventListener("mousemove", function (e) {
        cursor.style.left = e.x - 0 + "px";
        cursor.style.top = e.y - 0 + "px";
      });
