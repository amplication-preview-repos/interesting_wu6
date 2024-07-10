import * as graphql from "@nestjs/graphql";
import { FolderResolverBase } from "./base/folder.resolver.base";
import { Folder } from "./base/Folder";
import { FolderService } from "./folder.service";

@graphql.Resolver(() => Folder)
export class FolderResolver extends FolderResolverBase {
  constructor(protected readonly service: FolderService) {
    super(service);
  }
}
