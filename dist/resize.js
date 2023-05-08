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
const sharp_1 = __importDefault(require("sharp"));
const resizeImage = (filename, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, sharp_1.default)(`src/assets/full/${filename}.jpg`)
            .resize({ width: width, height: height, fit: "cover" })
            .toFile(`src/assets/thumb/${filename}.jpg`)
            .then(() => {
            return Promise.resolve(true);
        })
            .catch(() => {
            return Promise.reject(false);
        });
        if (result) {
            return Promise.resolve("Success resize image");
        }
        else {
            return Promise.reject("Success resize image");
        }
    }
    catch (error) {
        console.log(error);
        throw (error);
    }
});
exports.default = resizeImage;
