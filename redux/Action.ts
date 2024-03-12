import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { initialState } from "./Reducer";
import axios from "axios"
import { Action } from "./ActionType";

interface actionInterface {
    type: string;
    payload: any
}

export const fetchSearch = (q:string): ThunkAction<void, initialState, null, actionInterface> => {
    return async (dispatch: Dispatch<actionInterface>) => {
        const options = {
            method: 'GET',
            url: process.env.NEXT_PUBLIC_BASE_URL,
            params: {
                query: q,
                limit: '20',
                related_keywords: 'true'
            },
            headers: {
                'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
                'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST
            }
        };
        try {
            const res = await axios.request(options)
            if (res.status == 200) {
                const { data } = res
                const action: actionInterface = {
                    type: Action.FETCH_QUERY,
                    payload: data
                }
                dispatch(action)
            }
        } catch (error) {
            console.log(error)
        }
    }
}
export const clearSearchData = () => {
    return {
        type: Action.CLEAR_SEARCH_DATA
    }
}