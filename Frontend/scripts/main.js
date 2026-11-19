const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "assets/logo-senai.png") {
        myImage.setAttribute("src", "assets/logo-senai-cinza.png", )
    } else {
        myImage.setAttribute("src", "assets/logo-senai.png", )
    }
}