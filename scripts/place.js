const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

const currentTemp = 8;
const windSpeed = 6;
function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}
window.addEventListener("DOMContentLoaded", () => {
    const windChillElement = document.getElementById("windchill");
    if (windChillElement) {
        if (currentTemp <= 10 && windSpeed > 4.8) {
            const result = calculateWindChill(currentTemp, windSpeed);
            windChillElement.textContent = `${result.toFixed(1)} °C`;
        } else {
            windChillElement.textContent = "N/A";
        }
    }
});