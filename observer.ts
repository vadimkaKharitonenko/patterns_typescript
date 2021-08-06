interface Subject {
  registerObserver(o: Observer): void;
  removeObserver(o: Observer ): void;
  notifyObservers(): void;
}

interface Observer {
  update(temp: number, humidity: number, pressure: number): void;
}

interface DisplayElement {
  display(): void;
}

class WeatherData implements Subject {
  observers: Array<Observer>;
  temp: number;
  humidity: number;
  pressure: number;

  constructor() {
    this.observers = [];
  }

  public registerObserver(o: Observer) {
    this.observers.push(o);
  }

  public removeObserver(o: Observer) {
    const i = this.observers.indexOf(o);
    if (i >= 0) {
      this.observers.splice(i, 1);
    }
  }

  public notifyObservers() {
    this.observers.forEach(observer => {
      observer.update(this.temp, this.humidity, this.pressure);
    });
  }

  private measurementsChanged() {
    this.notifyObservers();
  }

  public setMeasurements(temp: number, humidity: number, pressure: number) {
    this.temp = temp;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}

class CurrentConditionsDisplay implements Observer, DisplayElement {
  weatherData: Subject;
  temp: number;
  humidity: number;

  constructor(weatherData: Subject) {
    this.weatherData =  weatherData;
    weatherData.registerObserver(this);
  }

  public update(temp: number, humidity: number) {
    this.temp = temp;
    this.humidity = humidity;
    this.display();
  } 

  public display() {
    console.log(`Current conditions: ${this.temp} F degrees and ${this.humidity}% humidity.`);
  }
}

class StatisticsDisplay implements Observer, DisplayElement {
  weatherData: Subject;
  average: number;
  max: number;
  min: number;
  temps: Array<number> = [];

  constructor(weatherData: Subject) {
    this.weatherData =  weatherData;
    weatherData.registerObserver(this);
  }

  public update(temp: number) {
    this.temps.push(temp);
    
    this.average = this.temps.reduce((a, temp) => a + temp, 0) / this.temps.length;
    this.max = Math.max(...this.temps);
    this.min = Math.min(...this.temps);

    this.display();
  } 

  public display() {
    console.log(`Avg/Max/Min temperature: ${this.average}/${this.max}/${this.min}`);
  }
}

function main(): void {
  const weatherData: WeatherData = new WeatherData();

  const currentDisplay: CurrentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
  const statisticsDisplay: StatisticsDisplay = new StatisticsDisplay(weatherData);

  weatherData.setMeasurements(80, 65, 30);
  weatherData.setMeasurements(82, 70, 29);
  weatherData.setMeasurements(78, 90, 29);
}

main();