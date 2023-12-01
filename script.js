document.getElementById('toggleBtn').addEventListener('click', function() {
    var offcanvas = document.getElementById('offcanvasRight');
    var closeBtn = document.getElementById('closeBtn');
    
    if (offcanvas.style.right === '' || offcanvas.style.right === '-500px') {
        offcanvas.style.right = '0';
    } else {
        offcanvas.style.right = '-500px';
    }
});

document.getElementById('closeBtn').addEventListener('click', function() {
    var offcanvas = document.getElementById('offcanvasRight');
    offcanvas.style.right = '-500px';
});
