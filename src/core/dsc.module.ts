import { HttpModule, HttpService } from "@nestjs/axios";
import { DynamicModule, Module } from "@nestjs/common";
import { IDscOptions } from "../interfaces/dsc-options.interface";
import { DscService } from "./dsc.service";

@Module({})
export class DscModule {
  static register(options: IDscOptions): DynamicModule {
    return {
      module: DscModule,
      imports: [
        HttpModule.register({
          baseURL: `${options.url}/${options.appId}`,
          timeout: 10000,
          maxRedirects: 5,
        }),
      ],
      providers: [DscService],
      exports: [DscService],
    };
  }
}
