const formatHours = (hour) => {
    return hour < 10 ? `0${hour}:00` : `${hour}:00`;
};

const processingData = (data) => {
    const newData2 = {
        days: {}
    };

    data.hourly.time.forEach((element, index) => {
        const now = new Date(element);
        const day = now.getDate();
        if (!newData2.days[day]) {
            newData2.days[day] = [];
        }
        newData2.days[day].push({
            hour: formatHours(now.getHours()),
            temperature: data.hourly.temperature_2m[index].toFixed(1)
        });
    });
    return newData2;
};

export { formatHours, processingData };