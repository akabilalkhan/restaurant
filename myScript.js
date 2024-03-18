function toggleMenu(categoryId) {
    var menu = document.getElementById(categoryId);
    var arrow = document.querySelector('#' + categoryId).previousElementSibling.querySelector('.arrow');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';
        document.querySelector('.category.active').classList.remove('active');
        document.getElementById(categoryId).classList.add('active');
    } else {
        menu.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
        document.getElementById(categoryId).classList.remove('active');
    }
}