const timer = (workingTime) => {
  if (typeof workingTime !== `number`) {
    throw new Error(`Рабочее время не число!`);
  }

  if (workingTime < 0) {
    throw new Error(`Рабочее время должно быть больше 0!`);
  }

  return {
    time: workingTime,

    tick() {
      return (this.time <= 0) ? `Закончилось время!` : timer(this.time - 1);
    }
  };
};

export default timer;
