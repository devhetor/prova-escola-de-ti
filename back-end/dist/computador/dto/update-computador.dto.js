"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateComputadorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_computador_dto_1 = require("./create-computador.dto");
class UpdateComputadorDto extends (0, mapped_types_1.PartialType)(create_computador_dto_1.CreateComputadorDto) {
}
exports.UpdateComputadorDto = UpdateComputadorDto;
//# sourceMappingURL=update-computador.dto.js.map