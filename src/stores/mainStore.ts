import React from "react";
import { Counter } from "./counterStore";
import { OnboardingStore } from "./onboardingStore";

export class MainStore {
  counter: Counter;
  onboardingStore: OnboardingStore;

  constructor() {
    this.counter = new Counter();
    this.onboardingStore = new OnboardingStore(this);
  }
}

export const MainStoreContext = React.createContext<MainStore | null>(null);
export const mainStore = new MainStore();
