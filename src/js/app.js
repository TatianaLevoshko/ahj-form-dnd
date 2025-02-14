import Form from "./Form.js";
import DragAndDrop from "./DragAndDrop.js";

class App {
    constructor() {
        this.container = document.createElement("div");
        this.container.classList.add("app-container");
    }

    render() {
        const form = new Form();
        const dragAndDrop = new DragAndDrop();

        this.container.appendChild(form.render());
        this.container.appendChild(DragAndDrop.render());

        return this.container;
    }
}

export default App;