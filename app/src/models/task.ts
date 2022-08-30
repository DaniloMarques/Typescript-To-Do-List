export class Task {
    constructor(
        public readonly date: Date,
        public readonly item: string
    ) {}

    public isEqual(task: Task): boolean {
        return this.date.getTime() === task.date.getTime()
            && this.item === task.item;
    }
}