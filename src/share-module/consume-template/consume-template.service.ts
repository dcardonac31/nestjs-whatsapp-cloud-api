import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios'
import { BASEURL } from 'src/common/api-resource'
import { firstValueFrom } from 'rxjs';
import { WhatsappCloudAPIResponse } from '../../common/whatsapp-cloud-api-response.dto';
import { WhatsappCloudApiRequest } from 'src/common/whatsapp-cloud-api-request.dto';

@Injectable()
export class ConsumeTemplateService {
    constructor(private httpService: HttpService) {}

    baseUrl = BASEURL.baseUrlWhatsappCloudApi;

    async sampleMovieTicketConfirmation(request: WhatsappCloudApiRequest): Promise<AxiosResponse<WhatsappCloudAPIResponse>> {
        const { data } = await firstValueFrom(this.httpService.post(this.baseUrl, request));
        console.log(data);
        return data;
    }
}
