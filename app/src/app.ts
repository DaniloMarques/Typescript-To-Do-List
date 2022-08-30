import { TodoController } from "./controllers/todo-controller.js";

const controller = new TodoController();

const form = document.querySelector('#todo-form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.add();
    });
} else {
    throw Error('Unable to start application!');
}