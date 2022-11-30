/* developed by EcXscariot/yourOrdinaryCarrot */
/* last modified 11/23/2022 */


mouseGlow();

// cursor trace function
const mouse = document.querySelector(".mouse");
const triangle = document.getElementById("mouse-triangle");

function mouseMove(e, acctivated) {
    const x = e.clientX - mouse.offsetWidth / 2,
          y = e.clientY - mouse.offsetHeight / 2;

    const keyframes = {
        transform: `translate(${x}px, ${y}px)`
    }
    mouse.animate(keyframes, {
        duration: 1000,
        fill: "forwards"
    });

    mouse.classList.add("mouse-hover");
    mouse.classList.remove("acctivate");
    triangle.classList.remove("mouse-triangle-invisible");

}

function mouseGlow() {
window.onmousemove = e => {
    const possible = e.target.closest(".trigger"),
          acctivated = possible !== null;    
          
          mouseMove(e, acctivated);
          if (acctivated) {
            mouse.classList.remove("mouse-hover");
            mouse.classList.add("acctivate");
            triangle.classList.add("mouse-triangle-invisible");
        }
     
}
}
