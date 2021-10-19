
// DROPDOWN MENU
// Open dropdown menu on click (function call in the html)
function dropdownFunction(){
  let dropdownMenu = document.getElementById("dropdown-menu");
  if (dropdownMenu.style.display === "flex") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "flex";
  }
}

// Use MediaQueryList.onchange to detect screen size, show dropdown menu as appropriate
// const mediaQuery = window.matchMedia( '( min-width: 900px )' );

// mediaQuery.onchange = (e)=>{
//   let dropdownMenu = document.getElementById("dropdown-menu");
//   if(e.matches){
//     dropdownMenu.style.display = "none";
//   }
//   console.log(dropdownMenu.style.display);
// }

// CHANGE THEME
window.onload = loadTheme();

function loadTheme() {
  if(localStorage.getItem("fred-theme")){
    setTheme = localStorage.getItem("fred-theme");
    document.getElementById("link").href= `css/${setTheme}_style.css`;
  }
}

function changeTheme(value) {
  console.log(value);
  if(localStorage.getItem("fred-theme") === null){
    localStorage.setItem("fred-theme", value);
    themeName = localStorage.getItem("fred-theme");
    console.log(themeName);
    
  }else{
    themeName = localStorage.getItem("fred-theme");
    if(themeName == value){
      value = "light";
      document.getElementById("link").href= `css/${value}_style.css`;
      localStorage.setItem("fred-theme", value);
    } else{
      document.getElementById("link").href= `css/${value}_style.css`;
      localStorage.setItem("fred-theme", value);
    }
    
  }
  
}