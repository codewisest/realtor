window.onload = function () {
    // MODAL
    let modal = document.querySelectorAll('.modal');
    const overlay = document.getElementById('overlay');

    // Show Hamburger Menu
    let hamburgerMenu = document.querySelector('.hamburger_menu');
    let navigationModal = document.querySelector('.navigation_modal');
    if(hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            
            // navigationModal.style.top = 0;
            if(hamburgerMenu.classList.contains('change')) {
                modal.forEach(element => {
                    element.classList.remove('modal_show');
                });
                } else {
                    navigationModal.classList.add('modal_show');
                }
                toggleNav();

                hamburgerMenu.classList.toggle('change');         
        })
    }


    const navItems = document.querySelectorAll('[class^="slide_"]');

    // Control navigation animation
    function navAnimation(direction1, direction2) {
        navItems.forEach((nav, i) => {
            nav.classList.replace(`slide_${direction1}_${i + 1}`, `slide_${direction2}_${i + 1}`);
        })
    }

    function toggleNav() {
        // Toggle: Menu Bars Open/Closed
        //menuBars.classList.toggle('change');

        // show/hide menu
        overlay.classList.toggle('overlay_active');
        if(overlay.classList.contains('overlay_active')) {
            // animate-in overlay
            overlay.classList.replace('overlay_slide_left', 'overlay_slide_right');

            // animate-in nav items
            navAnimation('out', 'in');
        } else {
            // animate-out nav items
            navAnimation('in', 'out')
            // animate-out overlay
            overlay.classList.replace('overlay_slide_right', 'overlay_slide_left');
        }
    }
    
    // Toggle Light/Dark Mode
const toggleSwitch = document.getElementById('checkbox');

function switchMode (event) {
    if(event.target.checked == true) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
    }
}

toggleSwitch.addEventListener('change', switchMode);
}

