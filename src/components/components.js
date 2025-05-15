const createMeteoDom = (data) => {
    const container = document.createElement('div');
    container.classList.add('container');

    for (const day in data.days) {
        const daySection = document.createElement('section');
        daySection.classList.add('day');

        const title = document.createElement('h2');
        title.innerText = `Day ${day}`;
        daySection.append(title);

        data.days[day].forEach((hourData) => {
            const hourContainer = document.createElement('div');
            hourContainer.classList.add('hour');

            const hour = document.createElement('p');
            hour.innerText = hourData.hour;

            const temperature = document.createElement('p');
            temperature.innerText = hourData.temperature;

            hourContainer.append(hour, temperature);
            daySection.append(hourContainer);
        });

        container.append(daySection);
    }
    return container;
};

export default createMeteoDom;