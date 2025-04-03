function getWeather() {
    let apiKey = "YOUR_OPENWEATHER_API_KEY"; // ⚠️ Replace with your API key
    let city = "Indore"; // You can change this or make it user-input based
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let weatherInfo = `🌡️ Temp: ${data.main.temp}°C | 🌤️ Condition: ${data.weather[0].description}`;
            document.getElementById("weatherOutput").innerText = weatherInfo;
        })
        .catch(error => {
            console.error("Error fetching weather:", error);
            document.getElementById("weatherOutput").innerText = "Failed to fetch weather data!";
        });
}
