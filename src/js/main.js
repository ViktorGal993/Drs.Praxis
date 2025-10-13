//Größe von Elementen ändern beim mausover/mausout
const logoBig = document.querySelectorAll(".animation");

for(let i=0;i<logoBig.length;i++){
    logoBig[i].addEventListener("mouseover",function(){
        logoBig[i].style.transform = "scale(1.2)";
    });
    
    for(let i=0;i<logoBig.length;i++){

        logoBig[i].addEventListener("mouseout",function(){
            logoBig[i].style.transform = "scale(1)";
        });
    } 
}; 
//Scrift farbe Ändern beim mausover/mausout
const menuColor = document.querySelectorAll(".menu");

for(let i =0;i<menuColor.length;i++){
    menuColor[i].addEventListener("mouseover", function(){
        menuColor[i].style.color="#0096e3";
    });

    for(let i = 0; i<menuColor.length;i++){
        menuColor[i].addEventListener("mouseout", function(){
            menuColor[i].style.color="#5b5c5e";
        })
    }
};
//mobil menu Einrichtung

const menu_mobil = document.getElementById("menu_mobil");
const menu_btnA = document.getElementById("menu_btn");
const menu_listBtn=document.querySelector(".menu_btn");
const menu_list=document.querySelector(".menu_list");

    menu_listBtn.addEventListener("click", function(){
       menu_mobil.style.display="block";
       menu_btnA.style.display = "none";
    });
    let timer;
    //wenn maus wider da TimeReset  
    menu_mobil.addEventListener("mouseenter", () => {
        clearTimeout(timer);
    });
    //timmer wenn mause weggelaufen)
     menu_mobil.addEventListener("mouseleave", () => {
        timer = setTimeout(() => {
            menu_mobil.style.display="none";
            menu_btnA.style.display = "block";
        },2500 );
    });

    

   



