import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import articleService from "./api/article";

const storeData = ( data ) => ( {
    type: "STORE_DATA",
    data,
} );

export const fetchData = () => ( dispatch ) =>
  articleService.getArticles().then( ({data}) => dispatch(storeData( data.articleArr ) ) );

const reducer = ( state = [], action ) => {
    switch ( action.type ) {
        case "STORE_DATA":
            return action.data;
        default: return state;
    }
};


export default (initialState = []) =>
    createStore( reducer, initialState, applyMiddleware( thunkMiddleware ) );