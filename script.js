let links = document.querySelectorAll("#nav-pane li");
let topics = document.querySelectorAll(".topic");

let indexOf = (entry, nodeList) => {
    for (let i = 0; i < nodeList.length; i++) {
        if (entry === nodeList[i]) {
            return i;
        }
    }
    return -1;
}

// CLICKING

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
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        clearHighlighted();
        this.classList.add("current");
    });
}

// SCROLLING

let options = {
    rootMargin: '0px',
    threshold: 0.75
}
  

let callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            // console.log(entry.target);
            index = indexOf(entry.target, topics);
            // console.log(index)
            // topics[index].click();
        }
    });
};

let observer = new IntersectionObserver(callback, options);

for (let i = 0; i < topics.length; i++) {
    observer.observe(topics[i]);
};
