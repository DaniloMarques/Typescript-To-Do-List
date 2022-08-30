/** Decorators */
import { domInjector } from "../decorators/dom-injector.js";

/** Models */
import { Task } from "../models/task.js";
import { Tasks } from "../models/tasks.js";

/** View */
import { MessageView } from "../views/message-view.js";
import { TasksView } from "../views/tasks-view.js";

export class TodoController {
    @domInjector('#date')
    private inputDate: HTMLInputElement;

    @domInjector('#item')
    private inputItem: HTMLInputElement;

    private tasks = new Tasks();
    private messageView = new MessageView('#messageView');
    private tasksView = new TasksView('#tasksView');

    constructor() {
        this.tasksView.update(this.tasks);
    }

    public add(): void {
        const date = new Date(this.inputDate.value.replace(/-/g, ','));
        const item = this.inputItem.value;
        const newTask = new Task(date, item);

        const alreadyExists = this.tasks.list().some(
            task => task.isEqual(newTask)
        );

        if (!alreadyExists) {
            this.tasks.add(newTask);
            this.resetForm();
            this.updateView();

        } else {
            this.messageView.update('This task already exists in your list!')
        }
    }

    private updateView():void {
        this.tasksView.update(this.tasks);
        this.messageView.update('Task added successfully!');
        setTimeout(() => this.messageView.reset(), 5000);
    }

    private resetForm(): void {
        this.inputDate.value = '';
        this.inputItem.value = '';
        this.inputDate.focus();
    }
}