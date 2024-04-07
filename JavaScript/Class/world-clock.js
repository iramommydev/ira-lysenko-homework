class WorldClock {
  constructor(timezone) {
    this.timezone = timezone;
    this.container = document.createElement('div');
    this.container.className = 'clock';
    this.buildClock();
  }
  buildClock() {
    const clockDisplay = document.createElement('div');
    clockDisplay.className = 'clock-display';

    const dateBtn = document.createElement('button');
    dateBtn.textContent = 'Show Date';
    dateBtn.addEventListener('click', () => {
      clockDisplay.textContent = this.getCurrentDate();
    });

    const dateTimeBtn = document.createElement('button');
    dateTimeBtn.textContent = 'Show Date & Time';
    dateTimeBtn.addEventListener('click', () => {
      clockDisplay.textContent = this.getCurrentDateTime();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete Clock';
    deleteBtn.addEventListener('click', () => {
      clockDisplay.textContent = this.deleteClock();
    });

    this.container.appendChild(clockDisplay);
    this.container.appendChild(dateBtn);
    this.container.appendChild(dateTimeBtn);
    this.container.appendChild(deleteBtn);

    document.getElementById('clocksContainer').appendChild(this.container);
  }

  getCurrentDate() {
    const date = new Date().toLocaleDateString('en-US', {
      timeZone: this.timezone,
    });
    return `Current Date in ${this.timezone} is: ${date}`;
  }

  getCurrentDateTime() {
    const dateTime = new Date().toLocaleString('en-US', {
      timeZone: this.timezone,
    });
    return `Current Date & Time in ${this.timezone} is: ${dateTime}`;
  }

  deleteClock() {
    this.container.remove();
  }
}

function createClock() {
  const timezone = document.getElementById('timezoneInput').value;
  if (timezone) {
    new WorldClock(timezone);
  } else {
    alert('Please enter a timezone.');
  }
}

export default createClock;
