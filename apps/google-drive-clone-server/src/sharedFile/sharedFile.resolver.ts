import * as graphql from "@nestjs/graphql";
import { SharedFileResolverBase } from "./base/sharedFile.resolver.base";
import { SharedFile } from "./base/SharedFile";
import { SharedFileService } from "./sharedFile.service";

@graphql.Resolver(() => SharedFile)
export class SharedFileResolver extends SharedFileResolverBase {
  constructor(protected readonly service: SharedFileService) {
    super(service);
  }
}
