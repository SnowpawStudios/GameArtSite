// Gallery
const galleryDiv = document.querySelector(".gallery");
let imgSelector = "monsters";
let btnContainer = document.querySelector(".gallery-categories");
let catBtns = btnContainer.getElementsByClassName("cat-btn");


// SET ACTIVE BUTTON
for (let index = 0; index < catBtns.length; index++) {
  catBtns[index].addEventListener("click", function(){
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
    imgSelector = catBtns[index].textContent;
    galleryLoader(imgSelector);
  });
  
}

// LOAD IMAGES
function galleryLoader(imgSelector){
  galleryDiv.innerHTML = "";
  for (let index = 1; index < 10; index++) {
    galleryDiv.innerHTML += `
      <div class="img-container">
        <img src="images/${imgSelector}/${imgSelector}_${index}.png" alt="" onclick="openModal(${index});" class="hover-shadow" data="${index}">
      </div>`;   
  }
}



galleryLoader(imgSelector);

// MODAL
function openModal(index) {
    document.getElementById("myModal").style.display = "block";
    let image = document.querySelector(".modal-img");
    image.src= `images/${imgSelector}/${imgSelector}_${index}.png`;
  }
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }