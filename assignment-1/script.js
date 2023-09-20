// Your JS code goes here
var btnAdd = document.getElementById("btnAdd");
var Addmodal = document.getElementById("addModal");
var Deletemodal = document.getElementById("deleteModal");
btnAdd.addEventListener("click", function () {
  openAdd();
});
window.onclick = function (event) {
  if (event.target == Addmodal || event.target == Deletemodal) {
    Addmodal.style.display = "none";
    Deletemodal.style.display = "none";
  }
};
function openAdd() {
  Addmodal.style.display = "block";
}
