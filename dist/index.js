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
function GetUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        let data = yield fetch("https://jsonplaceholder.typicode.com/users/").then((x) => x.json());
        console.log(data[0].address);
        return data;
    });
}
// console.log(GetUsers());
function GetUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = yield fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((x) => x.json());
        console.log(data);
        return data;
    });
}
GetUserById(1);
// console.log(GetUserById(1));
