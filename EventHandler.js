// Michael Tarr u20537833

function getEventsBetweenDates(start, end, array) {
    const filtered = array.filter(element => {
        if (element.dateStart >= start && element.dateEnd <= end) {
            return element;
        }
    })
    return filtered;
}

function getByMonth(month, array) {
    const filtered = array.filter(element => {
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

function getUniqueDateAndSort(array) {
    var filtered = array;
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

function getSummary(arguments, array) {
    if(arguments.length === 0) {
        if(Array.isArray(array)) {
            const filtered = array.map(event => {
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

class EventHandler {
    constructor(array) {
        this.events = array;
    }

    getEventsBetweenDates(start, end) {
        return getEventsBetweenDates(start, end, this.events);
    }

    getByMonth(month) {
        return getByMonth(month, this.events);
    }

    getUniqueDateAndSort() {
        return getUniqueDateAndSort(this.events);
    }

    getSummary() {
        return getSummary(arguments, this.events);
    }
}

Array.prototype.getSummary = function() {
    if(Array.isArray(this)) {
        return getSummary(this);
    } else {
        return [];
    }
    
};

Array.prototype.getEventsBetweenDates = function(start, end) {
    if(Array.isArray(this)) {
        return getEventsBetweenDates(start, end, this);
    } else {
        return [];
    }
}

Array.prototype.getByMonth = function(month) {
    if(Array.isArray(this)) {
        return getByMonth(month, this);
    } else {
        return [];
    }
}

Array.prototype.getUniqueDateAndSort = function() {
    if(Array.isArray(this)) {
        return getUniqueDateAndSort(this);
    } else {
        return [];
    } 
}