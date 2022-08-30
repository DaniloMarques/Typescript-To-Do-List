export abstract class View<T> {
    protected element: HTMLElement;

    constructor(htmlSelector: string) {
        const element = document.querySelector(htmlSelector);
        if (element) {
            this.element = <HTMLElement>element;
        } else {
            throw Error(`${htmlSelector} selector does not exists in html DOM`)
        }
    }

    protected abstract template(model: T): string;

    public update(model: T):void {
        let template = this.template(model);
        this.element.innerHTML = template;
    }

    public reset():void {
        this.element.innerHTML = '';
    }
}