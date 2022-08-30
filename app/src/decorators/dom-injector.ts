export function domInjector(htmlSelector: string) {
    return function (target: any, propertyKey: string) {
        let element: HTMLElement;

        const getter = function() {
            if (!element) {
                element = <HTMLElement>document.querySelector(htmlSelector);
            }

            return element;
        }

        Object.defineProperty(
            target, 
            propertyKey, 
            { get: getter }
        );
    };
}