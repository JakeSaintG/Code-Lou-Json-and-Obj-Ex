// Unchecks nav checkbox if open.
document.getElementById("nav-hamburger").checked = false;
let navOpen = false;

document.getElementById("nav-hamburger").addEventListener('click', () => {
    if (navOpen === false) {
        document.querySelector("nav").style.animationName = "slide-down";
        document.querySelector("nav").style.display = "flex";
        navOpen = true;
    } else {
        document.querySelector("nav").style.animationName = "slide-up";
        setTimeout(() => {
            document.querySelector("nav").style.display = "none";
        }, 250); // Enough delay to clear the animation. 
        navOpen = false;
    }
})

function toonsHandler() {
    fetch('./json/toon.json')
        .then(r => r.json())
        .then(data => printToons(data));
}

printToons = (data) => {
    data.cartoons.forEach(e => {
        newDiv = document.createElement('div');
        newDiv.classList.add('tile');
        newDiv.innerHTML = `
        <div class='rating ${e.rating}'>${e.rating}</div>
        <div class='bio'>
            <img height="90" width="90" src="${e.img}" alt="Img of ${e.name}" class="toon-img">
            <div class='details'>
                <p>${e.name}</p>
                <p>Source: ${e.source}</p>
                <p>Show: ${e.show}</p>
            </div>
        </div>
        `;
        document.getElementById('cartoon-tiles').appendChild(newDiv);
        console.log(e.name);
    });
    
    // Also works:
    // for (const employee of data.cartoons) {
    //     console.log(employee.name);
    // };
}