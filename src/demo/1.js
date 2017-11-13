export const run = () => {
  
  var observable = Rx.Observable.create(observer => {
    let v = 0;
    var id = setInterval(() => {
      observer.next(v++);
    }, 500);
  });

  // const deplayObs = () => Rx.Observable.empty().startWith(7);

  observable
  .mergeMap(v=>Rx.Observable.of(1).delay(5000))
  .subscribe(x => console.log(x));
};
