document.addEventListener("DOMContentLoaded", () => {
    const nav = `
        <nav>
            <ul>
                <li><a href="index.html">About Me</a></li>
                <li><a href="hobbies.html">Hobbies & Interests</a></li>
                <li><a href="projects.html">Projects</a></li>
            </ul>
        </nav>
    `;
    const footer = `
        <footer>
            <p>&copy; 2024 Gabriel Santos</p>
            <ul>
                <li>Email: <a href="mailto:gabrielthss@gmail.com">gabrielthss@gmail.com</a></li>
                <li>
                    <a href="https://www.linkedin.com/in/gabriel-tiago-hardt-de-souto-santos-6471622a8" target="_blank">
                        <img src="images/linkedin.jpg" alt="LinkedIn Logo" class="footer-logo">
                    </a>
                    <a href="https://github.com/SnorlaxCansado" target="_blank">
                        <img src="images/github.png" alt="GitHub Logo" class="footer-logo">
                    </a>
                </li>
            </ul>
        </footer>

    `;
    document.body.insertAdjacentHTML("afterbegin", nav);
    document.body.insertAdjacentHTML("beforeend", footer);
});