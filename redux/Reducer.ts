
import { Action } from "./ActionType"
export interface initialState {
    serachData: {}
}
const initialState: initialState = {
    serachData: {}
}
interface action {
    type: string,
    payload: {}
}


export const fetchReducer = (state = initialState, { type, payload }: action) => {
    switch (type) {
        case Action.FETCH_QUERY:
            return {
                ...state,
                serachData: payload
            }
        case Action.CLEAR_SEARCH_DATA:
            return {
                ...state,
                serachData: {}
            }
        default:
            return state
            break;
    }
}