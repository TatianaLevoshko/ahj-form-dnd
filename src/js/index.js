import App from "./app.js";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("app");
    const app new App();
    root.appendChild(app.render());
});