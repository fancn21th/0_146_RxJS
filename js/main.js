var button = document.querySelector("button");
var label = document.querySelector("h4");

label.textContent = "准备好双击...";

var clickStream = Rx.Observable.fromEvent(button, "click");

var doubleClickStream = clickStream
  .bufferWhen(() => clickStream.debounceTime(250))
  .map((arr) => arr.length)
  .filter((len) => len === 2);

doubleClickStream.subscribe((event) => {
  label.textContent = "双击成功!";
});

doubleClickStream.delay(1000).subscribe((suggestion) => {
  label.textContent = "准备好双击...";
});
