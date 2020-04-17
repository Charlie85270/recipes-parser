"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../");
class LanguageUtils {
    /**
     * Returns the language to be used.
     */
    static getLang() {
        return process.env.LANG || __1.LANGUAGES.EN;
    }
    /**
     *
     * Removes accent from string
     * @param input
     *
     */
    static removeAccentuation(input) {
        return input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
}
exports.default = LanguageUtils;
