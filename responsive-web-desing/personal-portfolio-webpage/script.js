window.addEventListener('DOMContentLoaded', function () {
    let navigation = document.getElementById('side_navigation');
    document.querySelectorAll('.project-description')
            .forEach(function (desc) {
                    desc.innerText = String(desc.innerText).slice(0, 100) + '...';
            });
    document.getElementById('menu').addEventListener('click', function() {
        navigation.classList.toggle('hidden'); 
    })
    document.getElementById('close').addEventListener('click', function() {
        navigation.classList.toggle('hidden');
    });
});