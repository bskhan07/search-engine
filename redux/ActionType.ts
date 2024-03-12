
 export interface action {
    FETCH_QUERY: string,
    payload?:{},
    CLEAR_SEARCH_DATA:string
}
 export const Action: action = {
    FETCH_QUERY: "FETCH_QUERY",
    CLEAR_SEARCH_DATA: "CLEAR_SEARCH_DATA"
}


