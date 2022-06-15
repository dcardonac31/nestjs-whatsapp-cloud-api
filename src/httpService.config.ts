import { Injectable } from "@nestjs/common";
import { HttpModuleOptions, HttpModuleOptionsFactory } from '@nestjs/axios';

@Injectable()
export class HttpConfigService implements HttpModuleOptionsFactory {
    createHttpOptions(): HttpModuleOptions {
        return {
            headers: {
                'Authorization': 'Bearer EAAE225RZA0TwBAMxijsTuGjZCm1nSENSVZBKVWTtQifl0dozNfg50AqlAZBbkhZBBMQMgy5QC6wkEZCB0npzALOr8Qs0gRi6JbSOScnnvm0HOVLEqDOGFQzZBWwqhgqAjkZBdMyOypKIJF0tSn2yYMUDyPMFrIoihoQtenB42ehuMWo27oVIbjFlZBz15R2HwWDjIavQYO06jESchyMYyRGqZB3kZB9DjH7YZCEZD',
                'Content-Type': 'application/json'
            }
        }
    }
}