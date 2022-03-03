import { DECREASE_COUNT, INCREASE_COUNT, SET_STARS } from "../consts/filterConts";

const initialState = {
    stars: 0,
    adults: 0,
    children: 0
}

const filterReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case SET_STARS:
            return { ...state, stars: action.payload.number }
        case INCREASE_COUNT:
            return { ...state, [action.payload.type]: state[action.payload.type] + 1 }
        case DECREASE_COUNT:
            return { ...state, [action.payload.type]: state[action.payload.type] - 1 }
        default:
            return state;
    }
}
export default filterReducer;
export const selectFilter = (rootState: any) => rootState.filterReducer;