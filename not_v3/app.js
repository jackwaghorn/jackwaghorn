let list = document.querySelectorAll("li");
let blurLayer = document.getElementById("blur");
let pageOverlay = document.getElementById("pageOverlay");
let moodboard = document.querySelector(".moodboard");
let wireframe = document.querySelector(".wireframe");




list.forEach(function (i) {
  i.addEventListener("mouseover", function () {
    let color = i.id;
    document.querySelector(".overlay").innerHTML = "";
    document.querySelector(
      ".overlay"
    ).innerHTML = `<div class="dot ${color} ${color}_position dot_resize"></img>`;
  });
});

// List: Change back when mouse not hover

list.forEach(function (i) {
  i.addEventListener("mouseout", function () {
    document.querySelector(".overlay").innerHTML = `        
        <div class="dot yellow yellow_position dot_resize"></div>
        <div class="dot blue blue_position dot_resize"></div>
        <div class="dot pink pink_position dot_resize"></div>
        <div class="dot grey grey_position dot_resize"></div>
        <div class="dot green green_position dot_resize"></div>
        <div class="dot red red_position dot_resize"></div>
        <div class="dot orange orange_position dot_resize"></div>
        `;
  });
});

list.forEach(function (i) {
  i.addEventListener("click", function () {
    let color = i.id;
    pageOverlay.style.display = 'block';
    blurLayer.classList.add("blur");
    pageOverlay.innerHTML = `

    <div class="area">
        <h2>${color}</h2>
        <div class="instagram"><img src="img/${color}/${color}_instagram.png" alt=""></div>
        <div class="moodboard"><img src="img/${color}/${color}_moodboard.png" alt=""></div>
        <div class="wireframe"><img src="img/${color}/${color}_wireframe.png" alt=""></div>

    </div>
    `
  });
});


pageOverlay.addEventListener('click', function(){
  blurLayer.classList.remove("blur");
  pageOverlay.style.display = 'none';

});


// wireframe.addEventListener("mouseover", function() {
//   wireframe.style.width = '20%';
// });
// wireframe.addEventListener("mouseout", function() {
//   wireframe.style.width = 'inherit';
// });
