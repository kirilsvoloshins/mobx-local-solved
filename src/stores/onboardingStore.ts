import {
    reaction,
} from "mobx";
import { type MainStore } from "./mainStore";

export class OnboardingStore {
    constructor(rootStore: MainStore) {
        // reaction(
        //     () => rootStore.counter.count,
        //     (newValue) => {
        //         console.warn(`onboardingStore: looks like you changed the counter to ${newValue}!`)
        //     }
        // );
    }
}
