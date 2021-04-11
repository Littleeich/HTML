document.querySelector('.btn-menu').addEventListener('click', () => 
{ 
    document.querySelector('.left-nav').classList.add('opened') 
    document.querySelector('.btn-menu').classList.add('hidden')
    document.querySelector('.btn-close').classList.remove('hidden')
});

document.querySelector('.btn-close').addEventListener('click', () => { 
    document.querySelector('.left-nav').classList.remove('opened') 
    document.querySelector('.btn-menu').classList.remove('hidden')
    document.querySelector('.btn-close').classList.add('hidden')
});

document.querySelector('.skills').addEventListener('mouseover', () => {
    const elems = document.querySelectorAll('.load-line')
    for (const el of elems) {
        el.classList.add('skill-growth')
    }
});

document.querySelector('.skills').addEventListener('mouseout', () => {
    const elems = document.querySelectorAll('.load-line')
    for (const el of elems) {
        el.classList.remove('skill-growth')
    }
});

const navItems = document.getElementsByClassName('nav');

for (const elem of navItems) {
    elem.addEventListener('click', () => { 
        document.querySelector('.left-nav').classList.remove('opened')
        document.querySelector('.btn-menu').classList.remove('hidden')
    document.querySelector('.btn-close').classList.add('hidden')
    });
}


//Get the button:
mybutton = document.querySelector(".myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}