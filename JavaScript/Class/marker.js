class Marker {
  constructor(color, inkAmount = 100) {
    this.color = color;
    this.inkAmount = inkAmount;
  }

  write(text) {
    let output = '';
    for (const char of text) {
      if (this.inkAmount <= 0) {
        console.log('Чорнило в маркері закінчилося.');
        break;
      }
      if (char !== ' ') {
        this.inkAmount -= 0.5;
      }
      output += char;
    }

    // Виводимо текст відповідним кольором в консоль
    // Оскільки консоль браузера не дозволяє безпосередньо вивести текст кольором маркера,
    // використовуємо CSS стилі для імітації цього.
    console.log(`%c${output}`, `color: ${this.color}`);
  }
  get inkLevel() {
    return this.inkAmount;
  }
}

export default Marker;
