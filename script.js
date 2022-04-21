// Toggle Navigation

let navPane = document.getElementById("nav-pane");
let navWidth = navPane.offsetWidth;
let navOpen = false;

let openNav = () => {
    navPane.style.transform = `translate3D(${-1 * navWidth}px, 0, 0)`;
}

let closeNav = () => {
    navPane.style.transform = `translate3D(0, 0, 0)`;
}

let promptOpen = document.getElementById("prompt-open");
let promptClose = document.getElementById("prompt-close");

let toggleNav = () => {
    navOpen = !navOpen;
    if (navOpen) {
        promptOpen.style.opacity = "0.0";
        promptClose.style.opacity = "1.0";
        openNav();
    } else {
        promptOpen.style.opacity = "1.0";
        promptClose.style.opacity = "0.0";
        closeNav();
    }
}


let navButton = document.getElementById("nav-toggle");
navButton.addEventListener("click", toggleNav);

// Navigation Highlighting

let links = document.querySelectorAll("#nav-pane li");
let topics = document.querySelectorAll(".topic");

// Remove the "current" class from all navigation links
let clearHighlighted = function() {
    let highlighted = document.querySelectorAll(".current");
    for (let j = 0; j < highlighted.length; j++) {
        highlighted[j].classList.remove("current");
    }
}

let updateCurrent = (node) => {
    clearHighlighted();
    node.classList.add("current");
}

// Add "current" class to clicked navigation link
// for (let i = 0; i < links.length; i++) {
//     links[i].addEventListener("click", function() {
//         clearHighlighted();
//         this.classList.add("current");
//     });
// }

let options = {
    rootMargin: '0px',
    threshold: 0.2
}
  

let callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            clearHighlighted();
            console.log(entry.target);
            let topic = entry.target.dataset.topic;
            // console.log(`a[href=#${topic}]`);
            let navItem = document.querySelector(`a[href="#${topic}"]`).parentElement;
            // console.log(navItem);
            updateCurrent(navItem);
        }
    });
};

let observer = new IntersectionObserver(callback, options);

for (let i = 0; i < topics.length; i++) {
    observer.observe(topics[i]);
};
