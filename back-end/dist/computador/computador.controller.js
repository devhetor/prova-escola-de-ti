"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputadorController = void 0;
const common_1 = require("@nestjs/common");
const computador_service_1 = require("./computador.service");
const create_computador_dto_1 = require("./dto/create-computador.dto");
const update_computador_dto_1 = require("./dto/update-computador.dto");
let ComputadorController = class ComputadorController {
    constructor(computadorService) {
        this.computadorService = computadorService;
    }
    async create(createComputadorDto) {
        console.log("GET: " + new Date());
        return await this.computadorService.create(createComputadorDto);
    }
    async findAll() {
        console.log("GET: " + new Date());
        return await this.computadorService.findAll();
    }
    findOne(nome) {
        console.log("GET: " + new Date());
        return this.computadorService.findOne(nome);
    }
    update(nome, updateComputadorDto) {
        console.log("GET: " + new Date());
        return this.computadorService.update(nome, updateComputadorDto);
    }
    remove(name) {
        console.log("GET: " + new Date());
        return this.computadorService.remove(name);
    }
};
exports.ComputadorController = ComputadorController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_computador_dto_1.CreateComputadorDto]),
    __metadata("design:returntype", Promise)
], ComputadorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ComputadorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':nome'),
    __param(0, (0, common_1.Param)('nome')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComputadorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':nome'),
    __param(0, (0, common_1.Param)('nome')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_computador_dto_1.UpdateComputadorDto]),
    __metadata("design:returntype", void 0)
], ComputadorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComputadorController.prototype, "remove", null);
exports.ComputadorController = ComputadorController = __decorate([
    (0, common_1.Controller)('computador'),
    __metadata("design:paramtypes", [computador_service_1.ComputadorService])
], ComputadorController);
//# sourceMappingURL=computador.controller.js.map