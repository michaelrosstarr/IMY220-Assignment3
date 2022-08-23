class EventHandler {
    constructor(array) {
        this.events = array;
    }

    getEventsBetweenDates(start, end) {
        const filtered = this.events.filter(element => {
            if(element.dateStart >= start && element.dateEnd <= end) {
                return element;
            }
        })
        return filtered;
    }

    getByMonth(month) {
        const filtered = this.events.filter(element => {
            const split = element.dateStart.split('/');

            var tMonth = month.toString();

            if(tMonth.length === 1) {
                tMonth = "0" + tMonth;
            }

            if(split[1] === tMonth) {
                return element;
            }
        })
        return filtered;
    }

    getUniqueDateAndSort() {

    }

    getSummary() {

    }
}