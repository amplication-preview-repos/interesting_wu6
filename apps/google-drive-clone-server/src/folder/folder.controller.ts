import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FolderService } from "./folder.service";
import { FolderControllerBase } from "./base/folder.controller.base";

@swagger.ApiTags("folders")
@common.Controller("folders")
export class FolderController extends FolderControllerBase {
  constructor(protected readonly service: FolderService) {
    super(service);
  }
}
