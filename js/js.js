// memberishkan
window.onbeforeunload = ()=>{
    for (const form of document.getElementsByTagName("form")){
        form.reset();
    }
};

const navSlide = () =>{
    const burger = document.querySelector(".burger")
    const navLists = document.querySelector("nav")
    burger.addEventListener("click",() => {
        navLists.classList.toggle("nav-active")
        burger.classList.toggle("toogle-burger")
    });
};

navSlide();

document.addEventListener("DOMContentLoaded", function () {
    let path = window.location.pathname;
    let page = path.split("/").pop().split(".")[0];

    document.querySelectorAll("nav a").forEach(link => {
        link.classList.remove("active");
    });

    if (page === "" || page === "index") {
        document.getElementById("beranda").classList.add("active");
    } else {
        let activeLink = document.getElementById(page);
        if (activeLink) {
            activeLink.classList.add("active");
        }
    }
});
