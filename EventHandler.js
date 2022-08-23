class EventHandler {
    constructor(array) {
        this.events = array;
    }

    getEventsBetweenDates(start, end) {
        const filtered = this.events.filter(element => {
            if (element.dateStart >= start && element.dateEnd <= end) {
                return element;
            }
        })
        return filtered;
    }

    getByMonth(month) {
        const filtered = this.events.filter(element => {
            const split = element.dateStart.split('/');

            var tMonth = month.toString();

            if (tMonth.length === 1) {
                tMonth = "0" + tMonth;
            }

            if (split[1] === tMonth) {
                return element;
            }
        })
        return filtered;
    }

    getUniqueDateAndSort() {
        var filtered = this.events;
        filtered = filtered.sort((eventOne, eventTwo) => {
            if (eventTwo.dateStart > eventOne.dateStart) {
                return -1;
            } else {
                return 1;
            }
        })

        const startArr = [], endArr = [];
        filtered = filtered.filter(item => { 
            if(startArr.includes(item.dateStart) && endArr.includes(item.dateEnd)) {
                return null;
            } else {
                startArr.includes(item.dateStart) ? null : startArr.push(item.dateStart);
                endArr.includes(item.dateEnd) ? null : endArr.push(item.dateEnd);
                return item;
            }
        });

        return filtered;
    }

    getSummary() {

    }
}