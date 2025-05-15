const getData = async () => {
    const res = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=51.2089&longitude=3.2242&hourly=temperature_2m&forecast_days=10'
    );
    if (res.status !== 200) {
        throw new Error(`failed to fetch data with status ${res.status}`);
    }
    return await res.json();
};

export default getData;
