import { Injectable } from "@nestjs/common";
import { HttpModuleOptions, HttpModuleOptionsFactory } from '@nestjs/axios';

@Injectable()
export class HttpConfigService implements HttpModuleOptionsFactory {
    createHttpOptions(): HttpModuleOptions {
        return {
            headers: {
                'Authorization': 'Bearer EAAE225RZA0TwBANagJoZC41nf1KmDyGe7yIZCovMnhZCvWaetoo93UuTtsdcypMGjCuIAhjZCZCo4uHGPI5Ix5pgBts06IpFI0S0byA2pTTD4GZCv1tFdopoJ09HYaklLrHAg5KOsUTdXCB4snGac9eNGRDtpn3jnG8v9nty33JMNTVKXLuAZAjoGbVdZAxexUq7SnHU66j7txWrGM3uTgoUDZAeyFZAB3ZBR24ZD',
                'Content-Type': 'application/json'
            }
        }
    }
}