var WeatherData = /** @class */ (function () {
    function WeatherData() {
        this.observers = [];
    }
    WeatherData.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    WeatherData.prototype.removeObserver = function (o) {
        var i = this.observers.indexOf(o);
        if (i >= 0) {
            this.observers.splice(i, 1);
        }
    };
    WeatherData.prototype.notifyObservers = function () {
        var _this = this;
        this.observers.forEach(function (observer) {
            observer.update(_this.temp, _this.humidity, _this.pressure);
        });
    };
    WeatherData.prototype.measurementsChanged = function () {
        this.notifyObservers();
    };
    WeatherData.prototype.setMeasurements = function (temp, humidity, pressure) {
        this.temp = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    };
    return WeatherData;
}());
var CurrentConditionsDisplay = /** @class */ (function () {
    function CurrentConditionsDisplay(weatherData) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }
    CurrentConditionsDisplay.prototype.update = function (temp, humidity) {
        this.temp = temp;
        this.humidity = humidity;
        this.display();
    };
    CurrentConditionsDisplay.prototype.display = function () {
        console.log("Current conditions: " + this.temp + " F degrees and " + this.humidity + "% humidity.");
    };
    return CurrentConditionsDisplay;
}());
var StatisticsDisplay = /** @class */ (function () {
    function StatisticsDisplay(weatherData) {
        this.temps = [];
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }
    StatisticsDisplay.prototype.update = function (temp) {
        this.temps.push(temp);
        this.average = this.temps.reduce(function (a, temp) { return a + temp; }, 0) / this.temps.length;
        this.max = Math.max.apply(Math, this.temps);
        this.min = Math.min.apply(Math, this.temps);
        this.display();
    };
    StatisticsDisplay.prototype.display = function () {
        console.log("Avg/Max/Min temperature: " + this.average + "/" + this.max + "/" + this.min);
    };
    return StatisticsDisplay;
}());
function main() {
    var weatherData = new WeatherData();
    var currentDisplay = new CurrentConditionsDisplay(weatherData);
    var statisticsDisplay = new StatisticsDisplay(weatherData);
    weatherData.setMeasurements(80, 65, 30);
    weatherData.setMeasurements(82, 70, 29);
    weatherData.setMeasurements(78, 90, 29);
}
main();
