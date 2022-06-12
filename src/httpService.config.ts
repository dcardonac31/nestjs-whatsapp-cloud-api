import { Injectable } from "@nestjs/common";
import { HttpModuleOptions, HttpModuleOptionsFactory } from '@nestjs/axios';

@Injectable()
export class HttpConfigService implements HttpModuleOptionsFactory {
    createHttpOptions(): HttpModuleOptions {
        return {
            headers: {
                'Authorization': 'Bearer EAAE225RZA0TwBAJFMbqpXDttb0ZCLxKTweNVKgDqtRuJM51Cn8JNaylDAcyJJSpEqf8W3ZCHsm2pn8caO0uUcMQTuk44z0701OjdAwwKvIU6fDSSeYqAilZC8FtD4PZCVWwAmaLJZAhkmPIpBhAl1lMxXECUvRtT5uRS0oILPZBM7UzT5N4RBxgT3v0pK1dQvKVcOVwSI8LejVtKNfMtIyJiqNt58F9oe8ZD',
                'Content-Type': 'application/json'
            }
        }
    }
}