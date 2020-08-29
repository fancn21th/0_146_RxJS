// It allows you to specify the dynamic behavior of a value completely at the time of declaration

/*
  const a = 3
  const b = a * 5

  a = 4
  however variable b won't change accordingly
*/

const streamA = Rx.Observable.of(3, 4, 5, 6);
const streamB = streamA.map((a) => 10 * a);

streamB.subscribe((b) => console.log(b));
