import { Task } from "./task.js";

export class Tasks {
    private tasks: Task[] = []

    public add(task: Task): void {
        this.tasks.push(task);
    }

    public list(): readonly Task[] {
        return this.tasks;
    }
}