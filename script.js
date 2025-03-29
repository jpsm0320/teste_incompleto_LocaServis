function toggleMenu() {
    document.querySelector('.menu').classList.toggle('active');
}

function openLogin() {
    document.getElementById('loginModal').style.display = 'block';
    closeMenu();
}

function closeLogin() {
    document.getElementById('loginModal').style.display = 'none';
}

function openRegister() {
    document.getElementById('registerModal').style.display = 'block';
    closeMenu();
}

function closeRegister() {
    document.getElementById('registerModal').style.display = 'none';
}

function openAddService() {
    document.getElementById('addServiceModal').style.display = 'block';
    closeMenu();
}

function closeAddService() {
    document.getElementById('addServiceModal').style.display = 'none';
}

function closeMenu() {
    document.querySelector('.menu').classList.remove('active');
}

// Close modal if clicked outside the modal-content
window.onclick = function (event) {
    var loginModal = document.getElementById('loginModal');
    var registerModal = document.getElementById('registerModal');
    var addServiceModal = document.getElementById('addServiceModal');

    if (event.target == loginModal) {
        closeLogin();
    }

    if (event.target == registerModal) {
        closeRegister();
    }

    if (event.target == addServiceModal) {
        closeAddService();
    }
}

// Added feature: Close modal with Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeLogin();
        closeRegister();
        closeAddService();
    }
}
);