import { Module } from "@nestjs/common";
import { SharedFileModuleBase } from "./base/sharedFile.module.base";
import { SharedFileService } from "./sharedFile.service";
import { SharedFileController } from "./sharedFile.controller";
import { SharedFileResolver } from "./sharedFile.resolver";

@Module({
  imports: [SharedFileModuleBase],
  controllers: [SharedFileController],
  providers: [SharedFileService, SharedFileResolver],
  exports: [SharedFileService],
})
export class SharedFileModule {}
