import _ from "lodash";
import { LANGUAGES } from "../";

export default class LanguageUtils {
  /**
   * Returns the language to be used.
   */
  public static getLang(): LANGUAGES {
    return (process.env.LANG as LANGUAGES) || LANGUAGES.FR;
  }

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
