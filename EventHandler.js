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
        if(arguments.length === 0) {
            if(Array.isArray(this.events)) {
                const filtered = this.events.map(event => {
                    var str = ``;
                    event.dateStart === event.dateEnd ? str = `On ${event.dateStart}: ${event.name} (${event.description})` : str = `From ${event.dateStart} to ${event.dateEnd}: ${event.name} (${event.description})`;
                    return str;
                })
                return filtered;
            }
        } else if(arguments.length === 1 && Array.isArray(arguments[0])) {
            const filtered = arguments[0].map(event => {
                var str = ``;
                event.dateStart === event.dateEnd ? str = `On ${event.dateStart}: ${event.name} (${event.description})` : str = `From ${event.dateStart} to ${event.dateEnd}: ${event.name} (${event.description})`;
                return str;
            })
            return filtered;
        } else if(arguments.length > 1) {
            const args = Array.from(arguments);
            const filtered = args.map(event => {
                var str = ``;
                event.dateStart === event.dateEnd ? str = `On ${event.dateStart}: ${event.name} (${event.description})` : str = `From ${event.dateStart} to ${event.dateEnd}: ${event.name} (${event.description})`;
                return str;
            })
            return filtered;
        } else {
            return [];
        }
    }
}

Array.prototype.getEventsBetweenDates = EventHandler.getEventsBetweenDates;
Array.prototype.getByMonth = EventHandler.getByMonth;
Array.prototype.getUniqueDateAndSort = EventHandler.getUniqueDateAndSort;
Array.prototype.getSummary = EventHandler.getSummary;