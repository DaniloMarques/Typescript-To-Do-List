import { Tasks } from "../models/tasks.js";
import { View } from "./view.js";

export class TasksView extends View<Tasks> {
    protected template(model: Tasks): string {
        if (model.list().length === 0) {
            return '<p class="text-center">No items added</p>';
        }

        let datesList: string[] = [];

        const sortedDates = [...model.list()].sort(function(a, b) {
            return a.date.getTime() - b.date.getTime();
        });

        sortedDates.forEach((task) => {
            const date = this.formatDate(task.date);

            if (!datesList.includes(date)) {
                datesList.push(date);
            }
        });

        return `
            ${datesList.map((taskDate) => {
                return `
                    <p class="mt-4 mb-1 font-weight-bold">Tasks for ${taskDate}</p>
                    <ul class="list-group">
                        ${model.list().filter((taskFilter) => this.formatDate(taskFilter.date) === taskDate)
                            .map((task, index) => {
                                return `
                                    <li class="list-group-item">
                                        <input class="form-check-input ml-1 align-middle" type="checkbox" value="" id="item-${index}">
                                        <label class="form-check-label ml-4 align-middle" for="item-${index}">${task.item}</label>
                                    </li>
                                `;
                        }).join('')}
                    </ul>
                    `
            }).join('')}
        `;
    }

    private formatDate(date: Date): string {
        return new Intl.DateTimeFormat()
            .format(date);
    }
}