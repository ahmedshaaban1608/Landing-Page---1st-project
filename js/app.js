// define variables
const sections = document.getElementsByTagName('section'),
    menu = document.querySelector('#nav-menu__list'),
    myFrag = document.createDocumentFragment(),
    scrollBtn = document.querySelector('.footer .top-arrow');

// create menu items
// build the nav
for (let section of sections) {
    const li = document.createElement('li'), // create <li>
        a = document.createElement('a'); // create <a>

    a.href = `#${section.id}`; // add href ==> <a href="section.id">
    a.innerHTML = section.dataset.title;
    li.insertAdjacentElement('beforeend', a); // <li><a>...</a></li>
    li.classList.add('nav-menu__link'); // add class to <li>
    myFrag.appendChild(li);
}
// show menu in landing
menu.appendChild(myFrag); // add all <li>s to menu


// all <a> in menu
const menuLinks = document.querySelectorAll('#nav-menu__list li a');
//define navbar container
const nav = document.querySelector('nav.header__nav-menu');
//define menu icon on small devices
const icon = document.querySelector('.material-symbols-outlined');
//scroll to section when related menu link is clicked
for (let link of menuLinks) {
    link.addEventListener('click', function (evt) {
        // get href for each link == #sectionID 
        const sectionScrolLink = document.querySelector(link.getAttribute('href'));
        evt.preventDefault();
        sectionScrolLink.scrollIntoView({
            behavior: 'smooth' //smooth scrolling to sections
        });
        //remove .nav-responsive class from nav to hide it
        nav.classList.remove('nav-responsive');
        // change close icon to menu icon
        icon.textContent = 'menu';
    });
}

// responsive nav menu
function responsiveMenu() {

    if (!nav.classList.contains('nav-responsive')) {
        // add .nav-responsive class to nav to show it if menu icon clicked
        nav.classList.add('nav-responsive');
        // change menu  icon to close icon
        icon.textContent = 'close';
    } else {
        //remove .nav-responsive class from nav to hide it if close icon clicked
        nav.classList.remove('nav-responsive');
        // change close icon to menu icon
        icon.textContent = 'menu';
    }
}
//define which section is being viewed while scrolling through the page
// Set sections as active
function sectionPosition() {

    for (const section of sections) {
        let sectionRect = section.getBoundingClientRect(),
            notActive = !section.classList.contains('active');
        // checking if section in Viewport
        if (sectionRect.top <= 100 && sectionRect.bottom >= 200) {
            // yes section in Viewport
            // checking if section have active class
            if (notActive) {
                //no, let's add active class to it
                section.classList.add('active');
                //checking which menu item is linked to the active section
                for (let link of menuLinks) {
                    if (link.getAttribute('href') === `#${section.id}`) {
                        // adding active class to menu item
                        link.classList.add('active');
                    } else {
                        //removing active class from menu item if it's not linked with the active section
                        link.classList.remove('active');
                    }
                }
            }
        } else {
            //removing active class when the section be out of Viewport
            section.classList.remove('active');
        }
    }
}
// making browser listen to scrolling
document.addEventListener("scroll", sectionPosition);

//smooth scrolling for toTop button
document.addEventListener('scroll', function () {
    if (document.body.scrollTop > 400) {
        //show scroll button when scoll down > 400
        scrollBtn.style.display = 'inline-block';
    } else {
        //hide scroll button when scoll down > 400
        scrollBtn.style.display = 'none';
    }
});
scrollBtn.addEventListener('click', function () {
    // scroll to top when clicking the botton
    document.body.scrollTop = 0;
});


//Styling Paragraph using user inputs
function changeStyling() {
    //define input variables
    const p = document.getElementById('pStyling'),
        textColor = document.getElementById('textColor'),
        groundColor = document.getElementById('groundColor'),
        fSize = document.getElementById('fSize');
    if (fSize.value > 100) {
        fSize.value = 100;
    } else if (fSize.value < 0) {
        fSize.value = 10;
    }
    //change paragraph text 
    p.style.color = textColor.value;
    //change paragraph background color
    p.style.backgroundColor = groundColor.value;
    // change paragraph font size
    p.style.fontSize = fSize.value;
}