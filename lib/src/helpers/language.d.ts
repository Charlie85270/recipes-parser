import { LANGUAGES } from "../";
export default class LanguageUtils {
    /**
     * Returns the language to be used.
     */
    static getLang(): LANGUAGES;
    /**
     *
     * Removes accent from string
     * @param input
     *
     */
    static removeAccentuation(input: string): string;
}
