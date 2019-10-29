export interface ApplicationStates {
  itemRequest: string;
  imageRequest: any;
  itemResponse: Item;
  itemsList: Item[];
  //imagesList: Images;
  imagesPlatesMania?: IPlatesmaniaCars[];
  imagesRia?: IRiaAds[];
  navigation: Navigation;
  signedIn: Auth;
  drawerToogled: boolean;
  itemIsLoading: boolean;
  itemHasErrored: boolean;
  itemIsLoaded: boolean;
  responseIsEmpty: boolean;
  itemSearching: itemSearching;
  vinRequest: string;
  vinResponse: VIN;
  vinsList: [];
  facebookResponse: IFacebook;
  googleResponse: IGoogle;
  imageRiaLoaded: boolean;
  imageCarsmaniaLoaded: boolean;
  lang: Lang;
}

export enum Lang{
  ua = 0,
  ru = 1,
  en = 2,
}

export enum itemSearching{
  plate = 0,
  vin = 1,
  insurance = 2,
  imageAttach = 3,
  imageTake = 4,
}

export enum Auth{
  none = 0,
  facebook = 1,
  google = 2,
  twitter = 3,
  github = 4,
  email = 5,
  phone = 6
}

/*export interface Images {
  platesMania: [];
  ria: IRiaAds[];
  pixabay: [];
}*/

export interface Item {
  "PartitionKey": string;
  "RowKey": string;
  "body": string;
  "brand": string;
  "capacity": string;
  "color": string;
  "d_reg": string;
  "dep": string;
  "dep_code": string;
  "fuel": string;
  "kind": string;
  "make_year": string;
  "model": string;
  "n_reg_new": string;
  "oper_code": string;
  "oper_name": string;
  "own_weight": string;
  "person": string;
  "purpose":string;
  "reg_addr_koatuu": string;
  "total_weight": string;
  "region"?: string;
}

export interface Navigation {
  url: string;
}

export interface ServiceRespond{
  "odata.metadata": string;
  "value": Item[];
}

export interface Window {
  location: Location;
}

export interface Location {
  protocol?: string;
  hash?: string;
  host?: string;
  hostname?: string;
  href?: string;
  origin?: string;
  pathname?: string;
  port?: string;
}

export interface Locale{
    searchInputPlaceholderText: string;
    dashBoradTitle: string;
    copyright: string;
    documentTitle: string;
    noResultMessage: string;

    login: string;
    logout: string;
    login_google: string;
    login_facebook: string;

    rowKey?: string;
    brand?: string;
    model?: string;
    modelBrand?: string;
    body?: string;
    capacity?: string;
    color?: string;
    d_reg?: string;
    dep?: string;
    dep_code?: string;
    fuel?: string;
    kind?: string;
    make_year?: string;
    oper_code?: string;
    oper_name?: string;
    own_weight?: string;
    total_weight?: string;
    weight?: string;
    person?: string;
    person_private?: string;
    person_company?: string;
    purpose?: string;
    reg_addr_koatuu?: string;

    region?: string;

    cameraActions?: string[];
    imgRecognizingMessage?: string;

    details?: string;
    race?: string;
    gearbox?: string;
    phone?: string;

    messageChooseImage?: string;
    messageImageLimit?: string;
    messageTurnOnCamera?: string;
    messageTurnOnFrontCamera?: string;

    url_search: string;
    url_favs: string;
    url_about: string;
    url_profile: string;
    url_lang: string;
    url_disqus: string;
    url_store: string;
    url_install: string;

    card_settings: string;
    card_addToFavs: string;
    card_share: string;
    card_showMore: string;
    card_openOriginalAds: string;
    card_openOriginalImage: string;
    card_ResultImagesFrom: string;
    card_ImgDate: string;

}

export interface IVinResultValues{
  "Value": any;
  "ValueId": any;
  "Variable": any;
  "VariableId": number;
}

export interface VIN{
  "Count"?: number;
  "Message"?: string;
  "SearchCriteria"?: string;
  "Results"?: IVinResultValues[];
}

export interface imageRecognizeResponse{
  "processing_time": any;
  "timestamp": any;
  "results": imageRecognizeResponseResult[],
  "filename": string;
  "version": any;
  "camera_id": any;
}

export interface imageRecognizeResponseResult{
  "box": {
    "xmin": number;
    "ymin": number;
    "ymax": number;
    "xmax": number;
  },
  "plate": string;
  "score": any;
  "dscore": any;
}

export interface IFacebook{
  accessToken?: string,
  data_access_expiration_time?: string,
  email?: string,
  expiresIn?: string,
  id?: string,
  name?: string,
  picture?: {data?: {
    height?: number,
    is_silhouette?: boolean,
    url?: string,
    width?: number
  }},
  signedRequest?: string, 
  userID?: string,
}

export interface IGoogle{
  El?: any,
  Zi?: any,
  accessToken?: any,
  googleId?: any,
  profileObj?: {
    email?: string,
    familyName?: string,
    givenName?: string,
    googleId?: string,
    imageUrl?: string,
    name?: string,
  }
  tokenId?: any
  tokenObj?: any,
  w3?: any,
}

export interface IRiaCategories { 
  name: string, 
  value: number 
}

export interface IRiaSearchData{
  "id": string,
  "type": string
}

export interface IRiaSearch{
  "additional_params": any;
  "result": {
      "search_result": {
          "ids": string[],
          "count": number,
          "last_id": number
      },
      "search_result_common": {
          "count": number,
          "last_id": number,
          "data": IRiaSearchData[]
      },
      "isCommonSearch": boolean,
      "active_state": any,
      "active_city": any,
      "revies": any,
      "additional": {
          "user_auto_positions": [],
          "search_params": {
              "all": {
                  "category_id": string,
                  "marka_id": string[],
                  "model_id": string[],
                  "s_yers": string[],
                  "po_yers": string[],
                  "auctionPossible": string,
                  "abroad": string,
                  "custom": string,
                  "countpage": number,
                  "with_photo": string,
                  "brandOrigin": [],
                  "excludeMM": [],
                  "state": [],
                  "city": [],
                  "auto_options": [],
                  "target": string,
                  "event": string,
                  "lang_id": number,
                  "page": number,
                  "limit_page": any,
                  "last_id": number,
                  "last_search_id": number,
                  "saledParam": number,
                  "state_id": number,
                  "city_id": number,
                  "state_from": number,
                  "city_from": number,
                  "m_state": [],
                  "m_city": [],
                  "marka": [],
                  "model": [],
                  "mm_marka": [],
                  "mm_model": [],
                  "mm_marka_filtr": [],
                  "mm_model_filtr": [],
                  "useOrigAutoTable": boolean,
                  "withoutStatus": boolean,
                  "with_video": boolean,
                  "under_credit": number,
                  "confiscated_car": number,
                  "with_exchange": number,
                  "exchange_filter": [],
                  "with_real_exchange": number,
                  "old_only": boolean,
                  "user_id": number,
                  "person_id": number,
                  "with_discount": boolean,
                  "auto_id_str": string
                  "black_user_id": number,
                  "order_by": number,
                  "is_online": boolean,
                  "last_send_id": boolean,
                  "withoutCache": boolean,
                  "with_last_id": boolean,
                  "color": number,
                  "color_id": number,
                  "gear_id": number,
                  "gearbox": number,
                  "top": number,
                  "drive_type": number,
                  "country": number,
                  "mm_country": [],
                  "mm_country_exeption": [],
                  "currency": number,
                  "currency_id": number,
                  "currencies_arr": [],
                  "auto_repairs": number,
                  "power_name": number,
                  "powerFrom": number,
                  "powerTo": number,
                  "hide_black_list": [],
                  "fuelRateFrom": number,
                  "fuelRateTo": number,
                  "damage": number,
                  "body_id": [],
                  "bodyStyleId": [],
                  "type": number,
                  "metallic": number,
                  "engineVolumeFrom": number,
                  "engineVolumeTo": number,
                  "raceFrom": number,
                  "raceTo": number,
                  "sid": number,
                  "star_auto": number,
                  "start_date": string
                  "drive_id": number,
                  "door": number,
                  "price_ot": number,
                  "price_do": number,
                  "year": number,
                  "auto_ids_search_position": number,
                  "print_qs": number,
                  "last_auto_id": number,
                  "is_hot": number,
                  "deletedAutoSearch": number,
                  "can_be_checked": number,
                  "seatsFrom": number,
                  "seatsTo": number,
                  "wheelFormulaId": number,
                  "axleId": number,
                  "carryingTo": number,
                  "carryingFrom": number,
                  "company_id": number,
                  "company_type": number,
                  "matched_country": number,
                  "q": string
                  "bodystyle": [],
                  "sellerType": any,
                  "purpose": any,
                  "class": any
              },
              "cleaned": {
                  "category_id": string,
                  "marka_id": string[],
                  "model_id": string[],
                  "s_yers": string[],
                  "po_yers": string[],
                  "auctionPossible": string,
                  "abroad": string,
                  "custom": string,
                  "countpage": number,
                  "with_photo": string,
                  "brandOrigin": [],
                  "excludeMM": [],
                  "state": [],
                  "city": [],
                  "auto_options": [],
                  "target": string,
                  "event": string,
                  "lang_id": 2,
                  "m_state": [],
                  "m_city": [],
                  "marka": [],
                  "model": [],
                  "mm_marka": [],
                  "mm_model": [],
                  "mm_marka_filtr": [],
                  "mm_model_filtr": [],
                  "exchange_filter": [],
                  "mm_country": [],
                  "mm_country_exeption": [],
                  "currency": number,
                  "currencies_arr": [],
                  "hide_black_list": [],
                  "body_id": [],
                  "bodyStyleId": [],
                  "matched_country": number,
                  "bodystyle": []
              }
          },
          "query_string": string
      }
  }
}

export interface IRiaAds{
  "userId": number,
  "userBlocked": [],
  "chipsCount": number,
  "locationCityName": string,
  "cityLocative": string,
  "auctionPossible": boolean,
  "exchangePossible": boolean,
  "realtyExchange": boolean,
  "exchangeType": string,
  "exchangeTypeId": 0,
  "addDate": string,
  "updateDate": string,
  "expireDate": string,
  "soldDate": string,
  "userHideADSStatus": boolean,
  "userPhoneData": {
      "phoneId": string,
      "phone": string
  },
  "USD": number,
  "UAH": number,
  "EUR": number,
  "isAutoAddedByPartner": boolean,
  "partnerId": number,
  "levelData": {
      "level": number,
      "label": number,
      "hotType": string,
      "expireDate": string
  },
  "autoData": {
      "active": boolean,
      "description": string,
      "version": string,
      "onModeration": boolean,
      "year": number,
      "autoId": number,
      "bodyId": number,
      "statusId": number,
      "withVideo": boolean,
      "race": string,
      "raceInt": number,
      "fuelName": string,
      "fuelNameEng": string,
      "gearboxName": string,
      "isSold": boolean,
      "mainCurrency": string,
      "fromArchive": boolean,
      "categoryId": number,
      "categoryNameEng": string,
      "subCategoryNameEng": string,
      "custom": number
  },
  "markName": string,
  "markNameEng": string,
  "markId": number,
  "modelName": string,
  "modelNameEng": string,
  "modelId": number,
  "photoData": {
      "count": number,
      "seoLinkM": string,
      "seoLinkSX": string,
      "seoLinkB": string,
      "seoLinkF": string
  },
  "linkToView": string,
  "title": string,
  "stateData": {
      "name": string,
      "regionName": string,
      "regionNameEng": string,
      "linkToCatalog": string,
      "title": string,
      "stateId": number,
      "cityId": number
  },
  "oldTop": {
      "isActive": boolean,
      "expireDate": ""
  },
  "canSetSpecificPhoneToAdvert": boolean,
  "dontComment": number,
  "sendComments": number,
  "badges": [],
  "VIN": string,
  "haveInfotechReport": boolean,
  "hasWebP": number,
  "moderatedAbroad": boolean,
  "secureKey": string,
  "isLeasing": number,
  "dealer": {
      "link": string,
      "logo": string,
      "type": string,
      "id": number,
      "name": string,
      "packageId": number,
      "typeId": number
  },
  "withInfoBar": boolean,
  "infoBarText": string,
  "optionStyles": [],
  status?: number,
  message?: string,
}

export interface IPlatesmaniaCars{
  "make": string;
  "model": string;
  "date": string;
  "photo": {
      "link": string,
      "small": string,
      "medium": string,
      "original": string
  }
}

export interface IPlatesmania{
  "error": number;
  "region": any;
  "informer": string;
  "cars": IPlatesmaniaCars[];
}

export interface ISearchFieldState {
  value: string;
}