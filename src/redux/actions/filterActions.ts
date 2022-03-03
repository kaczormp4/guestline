import { DECREASE_COUNT, INCREASE_COUNT, SET_STARS } from "../consts/filterConts"

export const setStars = (number: number) => ({
    type: SET_STARS,
    payload: { number: number }
})

export const increaseCount = (type: string) => ({
    type: INCREASE_COUNT,
    payload: { type: type }
})

export const decreaseCount = (type: string) => ({
    type: DECREASE_COUNT,
    payload: { type: type }
})