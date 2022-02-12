function birthdayCakeCandles(candles) {
  let bigCandle = 0;
  let count = 0;
  candles.sort((a, b) => b - a);
  bigCandle = candles[0];

  for (let index = 0; index < candles.length; index += 1) {
    if (candles[index] === bigCandle) {
      count += 1;
    }
  }

  return count;

}

birthdayCakeCandles([3, 2, 1, 3]);