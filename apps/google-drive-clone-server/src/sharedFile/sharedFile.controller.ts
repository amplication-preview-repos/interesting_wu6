import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SharedFileService } from "./sharedFile.service";
import { SharedFileControllerBase } from "./base/sharedFile.controller.base";

@swagger.ApiTags("sharedFiles")
@common.Controller("sharedFiles")
export class SharedFileController extends SharedFileControllerBase {
  constructor(protected readonly service: SharedFileService) {
    super(service);
  }
}
