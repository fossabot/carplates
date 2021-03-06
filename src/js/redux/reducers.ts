import * as actions from "./types";
import { initialData } from "../data/Data";
import { IApplicationStates } from "../models/Interfaces";

export const getReducer = (
    state = initialData,
    action: any,
  ): IApplicationStates => {
    switch (action.type) {
      case actions.FORCE_UPDATES:
        return {
          ...state,
          updatesAvailable: action.payload,
        };
      case actions.ITEMS_MERGING:
        return {
          ...state,
          itemsMerging: action.payload,
        };
      case actions.MERGE_LOCAL_AND_CLOUD_FAVORITES:
        return {
          ...state,
          favorites: action.payload,
        };
      case actions.ADD_BADGE:
        return {
          ...state,
          badges: state.badges + 1,
        };
      case actions.RESET_BADGE:
        return {
          ...state,
          badges: 0,
        };
      case actions.REMOVE_FROM_FAVORITES:
        return {
          ...state,
          favorites: state.favorites.filter((item) => item !== action.payload),
        };
      case actions.ADD_TO_FAVORITES:
        return {
          ...state,
          favorites: [action.payload, ...state.favorites],
        };
      case actions.CHANGE_LANG:
        return {
          ...state,
          lang: action.payload,
        };
      case actions.IMG_CARSMANIA_LOADED:
        return {
          ...state,
          imageCarsmaniaLoaded: action.payload,
        };
      case actions.IMG_RIA_LOADED:
        return {
          ...state,
          imageRiaLoaded: action.payload,
        };
      case actions.ADD_CARSMANIA_CARS:
        return {
          ...state,
          imagesPlatesMania: action.payload,
        };
      case actions.ADD_RIA_ADS:
        return {
          ...state,
          imagesRia: action.payload,
        };
      case actions.LOGIN:
        return {
          ...state,
          loggedIn: action.payload,
        };
      case actions.ITEM_FETCH_DATA_VIN_SUCCESS:
        return {
          ...state,
          vinResponse: action.payload,
        };
      case actions.SET_VIN_REQUEST:
        return {
          ...state,
          vinRequest: action.payload,
        };
      case actions.SET_SEARCHING_ITEM_TYPE:
        return {
          ...state,
          itemSearching: action.payload,
        };
      case actions.RESPONSE_IS_EMPTY:
        return {
          ...state,
          responseIsEmpty: action.payload,
        };
      case actions.SET_ITEM_REQUEST:
        return {
          ...state,
          itemRequest: action.payload,
        };
      case actions.ITEM_FETCH_DATA_SUCCESS:
        return {
          ...state,
          itemResponse: action.payload,
        };
      case actions.GET_ITEMS:
        return {
          ...state,
        };
      case actions.ADD_TO_ITEMS_LIST:
        return {
          ...state,
          itemsList: [action.payload, ...state.itemsList],
        };
      case actions.ITEM_IS_LOADING:
        return {
          ...state,
          itemIsLoading: action.payload,
        };
      case actions.ITEM_IS_LOADED:
        return {
          ...state,
          itemIsLoaded: action.payload,
        };
      case actions.ITEM_HAS_ERRORED:
        return {
          ...state,
          itemHasErrored: action.payload,
        };
      case actions.TOGGLE_DRAWER:
        return {
          ...state,
          drawerToogled: action.payload,
        };
      default:
        return state;
    }
};
