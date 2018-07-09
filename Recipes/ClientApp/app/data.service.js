var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.url = "/api/recipes";
    }
    DataService.prototype.getRecipes = function () {
        return this.http.get(this.url);
    };
    DataService.prototype.getRecipe = function (id) {
        return this.http.get(this.url + '/' + id);
    };
    DataService.prototype.createRecipe = function (recipe) {
        return this.http.post(this.url, recipe);
    };
    DataService.prototype.updateRecipe = function (recipe) {
        return this.http.put(this.url + '/' + recipe.id, recipe);
    };
    DataService.prototype.deleteRecipe = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    DataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map