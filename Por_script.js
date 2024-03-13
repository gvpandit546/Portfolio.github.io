// Home Section - Responsive Navbar + Animation

const res_navbar = document.getElementById("res_nav");
const responsive_nav = document.querySelector(".responsive_nav");
const resp_nav_line_1 = document.querySelector(".line_1");
const resp_nav_line_2 = document.querySelector(".line_2");
const resp_nav_line_3 = document.querySelector(".line_3");

responsive_nav.addEventListener('click', ()=>{
    if(res_navbar.style.opacity === "0"){
        res_navbar.style.display = "flex";
        res_navbar.style.opacity = "1";
        resp_nav_line_2.style.display = 'none';
        resp_nav_line_1.style.transform = 'rotate(46deg)';
        resp_nav_line_1.style.top = '08px';
        resp_nav_line_3.style.transform = 'rotate(133deg)';
        resp_nav_line_3.style.bottom = '01.5px';
    }
    else{
        res_navbar.style.opacity = "0";
        resp_nav_line_2.style.display = 'block';
        resp_nav_line_1.style.transform = 'rotate(0deg)';
        resp_nav_line_1.style.top = '00px';
        resp_nav_line_3.style.transform = 'rotate(0deg)';
        resp_nav_line_3.style.bottom = '00px';
    }
});

// Portfolio Section 
function manage1(){
    let All = document.getElementById("All");
    if(All){
        document.getElementById("e-commerce").style.display = "block";
        document.getElementById("zomato_clone").style.display = "block";
        document.getElementById("myntra_clone").style.display = "block";
        document.getElementById("dairy_clone").style.display = "block";
    }
}

function manage2(){
    let Prj = document.getElementById("Prj");
    if(Prj){
        document.querySelector(".por_box").style.gridTemplateRows = "repeat(1, 300px)";
        document.getElementById("e-commerce").style.display = "block";
        document.getElementById("zomato_clone").style.display = "none";
        document.getElementById("myntra_clone").style.display = "none";
        document.getElementById("dairy_clone").style.display = "none";
    }
}

function manage3(){
    let Pra = document.getElementById("Pra");
    if(Pra){
        document.getElementById("e-commerce").style.display = "none";
        document.getElementById("zomato_clone").style.display = "block";
        document.getElementById("myntra_clone").style.display = "block";
        document.getElementById("dairy_clone").style.display = "block";
    }
}


// Footer Section 
function scrollToTop(){
    window.scrollTo(0,0);
}