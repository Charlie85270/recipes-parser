import _ from "lodash";
import { LANGUAGES } from "../";

export default class LanguageUtils {
  /**
   *
   * Removes accent from string
   * @param input
   *
   */
  public static removeAccentuation(input: string) {
    return input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
}
