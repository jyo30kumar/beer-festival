var offcanvas = document.getElementById('offcanvasRight');
var toggleBtn = document.getElementById('toggleBtn');
var closeBtn = document.getElementById('closeBtn');

function toggleOffcanvas() {
    if (offcanvas.style.right === '' || offcanvas.style.right === '-500px') {
        offcanvas.style.right = '0';
    } else {
        offcanvas.style.right = '-500px';
    }
}

function closeOffcanvas() {
    offcanvas.style.right = '-500px';
}

// Initial check for screen size and hide off-canvas if needed
if (window.innerWidth < 840) {
    offcanvas.style.width = '50%';
}

// Toggle off-canvas on button click
toggleBtn.addEventListener('click', toggleOffcanvas);

// Close off-canvas on close button click
closeBtn.addEventListener('click', closeOffcanvas);

// Add event listener for window resize to adjust off-canvas behavior
window.addEventListener('resize', function () {
    if (window.innerWidth > 840) {
        offcanvas.style.right = '-500px';
        offcanvas.style.width = ''; // Reset width when window is small
    } else {
        offcanvas.style.width = '25%';
        offcanvas.style.right = '0';
    }
});
