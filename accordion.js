document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(accordion => {
        accordion.addEventListener("click", () => {
            // Close all other accordions (optional for exclusive open behavior)
            accordions.forEach(other => {
                if (other !== accordion) {
                    other.classList.remove("active");
                    other.nextElementSibling.style.display = "none";
                }
            });

            // Toggle the current accordion
            accordion.classList.toggle("active");
            const content = accordion.nextElementSibling;

            if (content.style.display === "block") {
                content.style.display = "none"; // Collapse
            } else {
                content.style.display = "block"; // Expand
            }
        });
    });
});
