window.addEventListener('DOMContentLoaded', function () {
    var descriptions = document.querySelectorAll('.project-description');
    console.log(descriptions);
    descriptions.forEach(function (desc) {
        desc.innerText = String(desc.innerText).slice(0, 100) + '...';
    });
});