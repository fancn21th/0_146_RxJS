const source = Rx.Observable.interval(1000)
  .take(4)
  .map((i) => ["1", "2", "foo", "3"][i]);

const result = source.map((x) => parseInt(x)).filter((x) => !isNaN(x));

result.subscribe((x) => console.log(x));
