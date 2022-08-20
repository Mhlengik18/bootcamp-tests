function getDay(day) {
    const date = new Date(day)
    var weekDays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return weekDays[date.getDay(day)];
    }

    console.log(getDay('2022-09-24'))