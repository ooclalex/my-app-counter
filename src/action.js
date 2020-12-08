import { DECREASE, INCREASE, UPDATE_COUNTER_SIZE } from "./actiontypes";

export const increaseSum = () => (
    {type: INCREASE}
)

export const decreaseSum = () => (
    {type: DECREASE}
)

export const updateCounterSize = (size) => (
    {type: UPDATE_COUNTER_SIZE, payload: size}
)