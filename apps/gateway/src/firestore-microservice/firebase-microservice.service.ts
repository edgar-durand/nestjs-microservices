import { Injectable } from '@nestjs/common';
import { ClientOptions, ClientProxy, ClientProxyFactory } from "@nestjs/microservices";
import { MICROSERVICES_CONFIG } from "@app/utils";
import { firstValueFrom } from "rxjs";

@Injectable()
export class FirebaseMicroserviceService {
  client: ClientProxy;
  constructor() {
    this.client  = ClientProxyFactory.create(<ClientOptions>MICROSERVICES_CONFIG.FIREBASE_MICROSERVICE);
  }

  async checkHealth(){
    const response = await firstValueFrom(
      this.client.send({ cmd: 'check' }, {})
    )
    this.client.close();
    return response;
  }
}
