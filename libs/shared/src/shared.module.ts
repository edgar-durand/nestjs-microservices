import { Module } from '@nestjs/common';
import { SharedService } from './shared.service';
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [
    ClientsModule.register([
      { name: 'FIREBASE_SERVICE', transport: Transport.TCP },
    ]),
  ],
  providers: [SharedService],
  exports: [SharedService],
})
export class SharedModule {}
