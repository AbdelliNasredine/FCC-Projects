window.addEventListener('DOMContentLoaded', function () {
    let navigation = document.getElementById('side_navigation');
    document.querySelectorAll('.project-description')
            .forEach(function (desc) {
                    desc.innerText = String(desc.innerText).slice(0, 100) + '...';
            });
    document.getElementById('menu').addEventListener('click', function() {
        navigation.style.width = "50%";
        navigation.style.opacity = "1";
        navigation.style.display = "flex";
        document.getElementById("close").style.display = "block";
        console.log("menu btn clicked !");
    })
    document.getElementById('close').addEventListener('click', function() {
        navigation.style.width = "0";
        navigation.style.opacity = "0";
        document.getElementById("close").style.display = "none";
        console.log("close btn clicked !");
    });
});