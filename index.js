const toggle = document.getElementById("themeToggle");

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggle.classList.replace("bi-moon-fill", "bi-sun-fill");
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggle.classList.replace("bi-moon-fill", "bi-sun-fill");
        localStorage.setItem("theme", "dark");
    } else {
        toggle.classList.replace("bi-sun-fill", "bi-moon-fill");
        localStorage.setItem("theme", "light");
    }
});

document.getElementById("copyEmailBtn").addEventListener("click", function() {
    const emailInput = document.getElementById("message");
    const toast = document.getElementById("toast");

    navigator.clipboard.writeText(emailInput.value)
        .then(() => {
            toast.classList.add("show");

            setTimeout(() => {
                toast.classList.remove("show");
            }, 2500);
        })
        .catch(err => {
            console.log("Error: ", err);
        });
});

const images = document.querySelectorAll('.zoomable');
const dialog = document.getElementById('imageViewer');
const viewerImage = document.getElementById('viewerImage');

let holdTimer;
let isDragging = false;

images.forEach(img => {

    img.addEventListener('click', () => {
        viewerImage.src = img.src;
        dialog.showModal();
    });

    img.addEventListener('mousedown', () => {
        isDragging = true;

        holdTimer = setTimeout(() => {
            if (isDragging) {
                viewerImage.src = img.src;
                dialog.showModal();
            }
        }, 3000);
    });

    img.addEventListener('mouseup', () => {
        isDragging = false;
        clearTimeout(holdTimer);
    });

    img.addEventListener('mouseleave', () => {
        isDragging = false;
        clearTimeout(holdTimer);
    });

    img.addEventListener('touchstart', () => {
        isDragging = true;

        holdTimer = setTimeout(() => {
            if (isDragging) {
                viewerImage.src = img.src;
                dialog.showModal();
            }
        }, 3000);
    });

    img.addEventListener('touchend', () => {
        isDragging = false;
        clearTimeout(holdTimer);
    });
});

dialog.addEventListener('click', () => dialog.close());