let btn1 = document.querySelector("#btn1");
let listitem = document.querySelector("#mysidepanel");

if (btn1 && listitem) {
  btn1.addEventListener("click", () => {
    listitem.classList.toggle("active");
  });
}
