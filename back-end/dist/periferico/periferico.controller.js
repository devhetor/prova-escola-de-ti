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
exports.PerifericoController = void 0;
const common_1 = require("@nestjs/common");
const periferico_service_1 = require("./periferico.service");
const create_periferico_dto_1 = require("./dto/create-periferico.dto");
const update_periferico_dto_1 = require("./dto/update-periferico.dto");
let PerifericoController = class PerifericoController {
    constructor(perifericoService) {
        this.perifericoService = perifericoService;
    }
    create(createPerifericoDto) {
        return this.perifericoService.create(createPerifericoDto);
    }
    findAll() {
        return this.perifericoService.findAll();
    }
    findOne(nome) {
        return this.perifericoService.findOne(nome);
    }
    update(nome, updatePerifericoDto) {
        return this.perifericoService.update(nome, updatePerifericoDto);
    }
    remove(nome) {
        return this.perifericoService.remove(nome);
    }
};
exports.PerifericoController = PerifericoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_periferico_dto_1.CreatePerifericoDto]),
    __metadata("design:returntype", void 0)
], PerifericoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PerifericoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':nome'),
    __param(0, (0, common_1.Param)('nome')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PerifericoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':nome'),
    __param(0, (0, common_1.Param)('nome')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_periferico_dto_1.UpdatePerifericoDto]),
    __metadata("design:returntype", void 0)
], PerifericoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':nome'),
    __param(0, (0, common_1.Param)('nome')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PerifericoController.prototype, "remove", null);
exports.PerifericoController = PerifericoController = __decorate([
    (0, common_1.Controller)('periferico'),
    __metadata("design:paramtypes", [periferico_service_1.PerifericoService])
], PerifericoController);
//# sourceMappingURL=periferico.controller.js.map