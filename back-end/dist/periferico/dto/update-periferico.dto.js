"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePerifericoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_periferico_dto_1 = require("./create-periferico.dto");
class UpdatePerifericoDto extends (0, mapped_types_1.PartialType)(create_periferico_dto_1.CreatePerifericoDto) {
}
exports.UpdatePerifericoDto = UpdatePerifericoDto;
//# sourceMappingURL=update-periferico.dto.js.map