"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
process.env.LANG = "EN";
const lib = new __1.default();
test("Get nutrients in recipe - simple string (NLP)", () => __awaiter(void 0, void 0, void 0, function* () {
    const recipe = ["20gr of sugar"];
    const result = yield lib.getIngredientsFromText(recipe);
    expect(result).not.toBeUndefined();
    if (result[0] && result[0].result) {
        expect(result[0].result.precise.ingredient).toEqual("sugar");
        expect(result[0].result.precise.unit).toEqual("gr");
        expect(result[0].result.precise.amount).toEqual(20);
    }
    else {
        throw new Error("fail");
    }
}));
