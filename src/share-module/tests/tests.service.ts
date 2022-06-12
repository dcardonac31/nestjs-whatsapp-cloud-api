import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios'
import { BASEURL } from 'src/common/api-resource'
import { firstValueFrom } from 'rxjs';
import { WhatsappCloudAPIRequest } from './dto/whatsapp-cloud-api-request.dto';
import { WhatsappCloudAPIResponse } from '../../common/whatsapp-cloud-api-response.dto';

@Injectable()
export class TestsService {
    constructor(private httpService: HttpService) {}

    baseUrl = BASEURL.baseUrlWhatsappCloudApi;

    async testMessage(request: WhatsappCloudAPIRequest): Promise<AxiosResponse<WhatsappCloudAPIResponse>> {
        const { data } = await firstValueFrom(this.httpService.post(this.baseUrl, request));
        console.log(data);
        return data;
    }
}


