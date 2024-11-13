//alert("Javascript is active")

// Función de precarga de imágenes
function preloadImages(srcArray, callback) {
    let images = [];
    let loadedImages = 0;
    let numImages = srcArray.length;

    for (let i = 0; i < numImages; i++) {
        images[i] = new Image();
        images[i].src = srcArray[i];
        images[i].onload = function() {
            if (++loadedImages >= numImages) {
                callback(images); // Llama una función una vez que todas las imágenes están cargadas
            }
        };
    }
}

const body = document.querySelector("body");
const navigation = document.querySelector(".navigation");
const menu_items = document.querySelector(".menu-items");
const menu_item = document.querySelectorAll(".navigation ul li a");
const btnMenu = document.querySelector(".btn-menu");
const btnCancel = document.querySelector(".btn-cancel");

btnMenu.onclick = ()=>{
   menu_items.classList.add("active");
   btnMenu.classList.add("hide");
   body.classList.add("disabledScroll");
}

btnCancel.onclick = ()=>{
   menu_items.classList.remove("active");
   btnMenu.classList.remove("hide");
   body.classList.remove("disabledScroll");
}

window.onscroll = ()=>{
    this.scrollY > 20 ? navigation.classList.add("sticky") : navigation.classList.remove("sticky");
}

//Deshabilitar el menú móvil automáticamente con un clic en un elemento del menú
menu_item.forEach(function(item){
    item.onclick = ()=>{
        menu_items.classList.remove("active");
        btnMenu.classList.remove("hide");
        body.classList.remove("disabledScroll");
    }
});

// Inicializar la precarga de imágenes
document.addEventListener('DOMContentLoaded', function() {
    const imagePaths = [
        '/static/images/personal/carrusel 1.jpg',
        '/static/images/personal/coding screen - edited.jpg', 
        '/static/images/personal/carrusel 2.jpg',
        '/static/images/personal/carrusel 3.jpg'
    ];

    preloadImages(imagePaths, function(loadedImages) {
        console.log('Todas las imágenes han sido precargadas!');
        // Aquí puedes iniciar la lógica para las transiciones de imágenes visibles
    });
});