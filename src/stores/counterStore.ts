import {
  makeObservable,
  reaction,
  observable,
  action,
} from "mobx";

export class Counter {
  @observable
  count = 0;

  @action.bound
  increment() {
    this.count++;
  }

  @action.bound
  decrement() {
    this.count--;
  }

  constructor() {
    makeObservable(this);

    reaction(
      () => this.count,
      (newCount, oldCount, reactionItself) => {
        console.log(`count changed from ${oldCount} to ${newCount}`);
        reactionItself.trace();
      },
      {
        name: "reaction to count changes",
        fireImmediately: true,
      }
    );
  }
}
