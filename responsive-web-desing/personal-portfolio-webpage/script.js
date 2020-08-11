window.addEventListener("DOMContentLoaded", function () {
  let navigation = document.getElementById("side_navigation");
  document.querySelectorAll(".project-description").forEach(function (desc) {
    desc.innerText = String(desc.innerText).slice(0, 100) + "...";
  });
  document.getElementById("menu").addEventListener("click", function () {
    navigation.style.width = "50%";
    navigation.style.opacity = "1";
    navigation.style.display = "flex";
    document.getElementById("close").style.display = "block";
    console.log("menu btn clicked !");
  });
  document.getElementById("close").addEventListener("click", function () {
    navigation.style.width = "0";
    navigation.style.opacity = "0";
    document.getElementById("close").style.display = "none";
    console.log("close btn clicked !");
  });
  // --- modal logic ---
  // selecting projects 'view' buttons
  const projectsViewLinks = document.querySelectorAll(".project-footer .link");
  const modal = document.querySelector(".modal");
  const modalContent = modal.querySelector(".modal-content");
  // looping through all the buttons
  // and add a click event handler
  const onClickHandler = function () {
    // console.log(this);
    // show the modal
    console.log(modalContent);
    modal.classList.add("show");
    setTimeout(() => modalContent.classList.add("show"), 10);
  };
  projectsViewLinks.forEach((btn) =>
    btn.addEventListener("click", onClickHandler)
  );
  // add 'close' handler to modal
  document.getElementById("modal-close").addEventListener("click", function () {
    modalContent.classList.remove("show");
    modal.classList.remove("show");
  });
});
