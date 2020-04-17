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
process.env.LANG = "FR";
const lib = new __1.default();
test("Test recipe instructions - simple string (NLP)", () => __awaiter(void 0, void 0, void 0, function* () {
    const recipe = ["une demie cuillère à soupe de riz"];
    const result = yield lib.getIngredientsFromText(recipe);
    expect(result).not.toBeUndefined();
    if (result[0] && result[0].result) {
        expect(result[0].result.precise.ingredient).toEqual("riz");
        expect(result[0].result.precise.unit).toEqual("cuillere a soupe");
        expect(result[0].result.precise.amount).toEqual(0.5);
        expect(result[0].result.precise.totalFoodQuantity).toEqual(6);
    }
    else {
        throw new Error("fail");
    }
}));
test("Test recipe instructions - simple string (NLP)", () => __awaiter(void 0, void 0, void 0, function* () {
    const recipe = ["une demie cuillère à cafe de riz"];
    const result = yield lib.getIngredientsFromText(recipe);
    expect(result).not.toBeUndefined();
    if (result[0] && result[0].result) {
        expect(result[0].result.precise.ingredient).toEqual("riz");
        expect(result[0].result.precise.unit).toEqual("cuillere a cafe");
        expect(result[0].result.precise.amount).toEqual(0.5);
        expect(result[0].result.precise.totalFoodQuantity).toEqual(2);
    }
    else {
        throw new Error("fail");
    }
}));
test("Test recipe instructions - simple string (NLP)", () => __awaiter(void 0, void 0, void 0, function* () {
    const recipe = ["70 cl de lait"];
    const result = yield lib.getIngredientsFromText(recipe);
    expect(result).not.toBeUndefined();
    if (result[0] && result[0].result) {
        expect(result[0].result.precise.ingredient).toEqual("lait");
        expect(result[0].result.precise.unit).toEqual("cl");
        expect(result[0].result.precise.amount).toEqual(70);
        expect(result[0].result.precise.totalFoodQuantity).toEqual(700);
    }
    else {
        throw new Error("fail");
    }
}));
test("Test recipe instructions - simple string (NLP)", () => __awaiter(void 0, void 0, void 0, function* () {
    const recipe = ["500 g de riz"];
    const result = yield lib.getIngredientsFromText(recipe);
    expect(result).not.toBeUndefined();
    if (result[0] && result[0].result) {
        expect(result[0].result.precise.ingredient).toEqual("riz");
        expect(result[0].result.precise.unit).toEqual("g");
        expect(result[0].result.precise.amount).toEqual(500);
        expect(result[0].result.precise.totalFoodQuantity).toEqual(500);
    }
    else {
        throw new Error("fail");
    }
}));
test("Test recipe instructions - simple string (NLP)", () => __awaiter(void 0, void 0, void 0, function* () {
    const recipe = ["1 kg de filet de poulet"];
    const result = yield lib.getIngredientsFromText(recipe);
    expect(result).not.toBeUndefined();
    if (result[0] && result[0].result) {
        expect(result[0].result.precise.ingredient).toEqual("filet de poulet");
        expect(result[0].result.precise.unit).toEqual("kg");
        expect(result[0].result.precise.amount).toEqual(1);
        expect(result[0].result.precise.totalFoodQuantity).toEqual(1000);
    }
    else {
        throw new Error("fail");
    }
}));
test("Test recipe instructions - simple string (NLP)", () => __awaiter(void 0, void 0, void 0, function* () {
    const recipe = ["1 l de moules"];
    const result = yield lib.getIngredientsFromText(recipe);
    expect(result).not.toBeUndefined();
    if (result[0] && result[0].result) {
        expect(result[0].result.precise.ingredient).toEqual("moules");
        expect(result[0].result.precise.unit).toEqual("l");
        expect(result[0].result.precise.amount).toEqual(1);
        expect(result[0].result.precise.totalFoodQuantity).toEqual(1000);
    }
    else {
        throw new Error("fail");
    }
}));
test("Test recipe instructions - simple string (NLP)", () => __awaiter(void 0, void 0, void 0, function* () {
    const recipe = ["2 poivrons"];
    const result = yield lib.getIngredientsFromText(recipe);
    expect(result).not.toBeUndefined();
    if (result[0] && result[0].result) {
        expect(result[0].result.precise.ingredient).toEqual("poivrons");
        expect(result[0].result.precise.amount).toEqual(2);
    }
    else {
        throw new Error("fail");
    }
}));
