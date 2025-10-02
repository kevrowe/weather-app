interface DayData {
  date: string;
  dayName: string;
  icon: string;
  temp_min: number;
  temp_max: number;
}

interface DaySelectorProps {
  days: DayData[];
  selectedDay: number;
  onSelectDay: (index: number) => void;
}

function DaySelector({ days, selectedDay, onSelectDay }: DaySelectorProps) {
  const kelvinToCelsius = (kelvin: number) => Math.round(kelvin - 273.15);

  return (
    <div className="day-selector">
      {days.map((day, index) => (
        <div
          key={index}
          className={`day-card ${selectedDay === index ? 'selected' : ''}`}
          onClick={() => onSelectDay(index)}
        >
          <div className="day-name">{day.dayName}</div>
          <img
            src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
            alt="Weather icon"
          />
          <div className="temp-range">
            <span className="low">{kelvinToCelsius(day.temp_min)}</span>
            <span className="high">{kelvinToCelsius(day.temp_max)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DaySelector;
