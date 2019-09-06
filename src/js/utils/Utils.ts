import { window } from "../models/interfaces";

export default class Utils {
  /**
   * Function to get Current Domain Url
   * Samples:
   *      "https://domain.sharepoint.com"
   */
  public static getAbsoluteDomainUrl(windowObj: window): string {
    return windowObj.location.protocol + "//" + windowObj.location.host;
  } 
  /**
    * The reducer function on each member of the array resulting in a single output value
    */
   public static reducer(accumulator: string, currentValue: string): string{
    return accumulator + currentValue;
  }
}