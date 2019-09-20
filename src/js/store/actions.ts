import  * as actions from "./types";
import { Action } from "redux";
import { ApplicationStates, Item, ServiceRespond, VIN,  } from "../models/Interfaces";
import { ThunkAction } from "redux-thunk";

export const itemFetchDataForPlate = (itemRequest: string, url: string): ThunkAction<void, ApplicationStates, null, Action<string>> => (dispatch, getState) => {
    dispatch(setSearchingItemType(0));
    dispatch(itemIsLoaded(false));
    dispatch(itemIsLoading(true));

    fetch(url, {
        headers:{
          'Accept': 'application/json'
        }
    })
    .then((response) => {
        if (!response.ok){
            throw Error(response.statusText);
        }
        dispatch(itemIsLoading(false));
        return response;
    })
    .then((response) => {
        return response.json(); })
    .then((itemResponse: ServiceRespond) => {
        if(itemResponse.value.length > 0){
            const data = itemResponse.value[0];
            dispatch(itemFetchDataSuccess(data));
            dispatch(addToItemsList(data));
            dispatch(setItemRequest(itemRequest));
            dispatch(responseIsEmpty(false));
        }
        else{
            dispatch(responseIsEmpty(true));
        }
        dispatch(itemIsLoaded(true));
    })
    .catch((error) => {
        dispatch(itemHasErrored(true));
        console.log(error);
    });
};

export const itemFetchDataForVin = (vinRequest: string, url: string): ThunkAction<void, ApplicationStates, null, Action<string>> => (dispatch, getState) => {
    dispatch(setSearchingItemType(1));
    dispatch(itemIsLoaded(false));
    dispatch(itemIsLoading(true));

    fetch(url, {
        headers:{
          'Accept': 'application/json'
        }
    })
    .then((response) => {
        if (!response.ok){
            throw Error(response.statusText);
        }
        dispatch(itemIsLoading(false));
        return response;
    })
    .then((response) => {
        return response.json(); })
    .then((itemResponse: VIN) => {
        if(itemResponse.Results.length > 0){
            const data = itemResponse;
            dispatch(itemFetchDataVinSuccess(data));
            dispatch(addToVinsListList(data));
            dispatch(setVinRequest(vinRequest));
            dispatch(responseIsEmpty(false));
        }
        else{
            dispatch(responseIsEmpty(true));
        }
        dispatch(itemIsLoaded(true));
    })
    .catch((error) => {
        dispatch(itemHasErrored(true));
        console.log(error);
    });
};

export const addToVinsListList = (vinResponse: VIN): actions.addToVinsListList => ({
    type: actions.ADD_TO_VINS_LIST,
    payload: vinResponse
});


export const itemFetchDataVinSuccess = (vinResponse: VIN): actions.ItemFetchDataVinSuccessAction => ({
    type: actions.ITEM_FETCH_DATA_VIN_SUCCESS,
    payload: vinResponse
});

export const setVinRequest = (vinRequest: string): actions.SetVinRequestAction => ({
    type: actions.SET_VIN_REQUEST,
    payload: vinRequest
});

export const setSearchingItemType = (response: number): actions.SetSearchingItemType => ({
    type: actions.SET_SEARCHING_ITEM_TYPE,
    payload: response
});

export const responseIsEmpty = (response: boolean): actions.ResponseIsEmptyAction => ({
    type: actions.RESPONSE_IS_EMPTY,
    payload: response
});

export const setItemRequest = (itemRequest: string): actions.SetItemRequestAction => ({
    type: actions.SET_ITEM_REQUEST,
    payload: itemRequest
});

export const itemIsLoading = (bool: boolean): actions.ItemsIsLoadingAction => ({
    type: actions.ITEM_IS_LOADING,
    payload: bool
});

export const itemIsLoaded = (bool: boolean): actions.ItemsIsLoadedAction => ({
    type: actions.ITEM_IS_LOADED,
    payload: bool
});

export const itemHasErrored = (bool: boolean): actions.ItemsHasErroredAction => ({   
    type: actions.ITEM_HAS_ERRORED,
    payload: bool
});
  
export const itemFetchDataSuccess = (itemResponse: Item): actions.ItemFetchDataSuccessAction => ({
    type: actions.ITEM_FETCH_DATA_SUCCESS,
    payload: itemResponse
});

export const getItems = (): actions.GetItemAction => ({
    type: actions.GET_ITEMS
});

export const addToItemsList = (itemResponse: Item) => ({
    type: actions.ADD_TO_ITEMS_LIST,
    payload: itemResponse
});

export const toggleDrawer = (drawerState: boolean) => ({
    type: actions.TOGGLE_DRAWER,
    payload: drawerState
});