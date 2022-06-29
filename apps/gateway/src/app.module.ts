import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { FirebaseMicroserviceService } from "./firestore-microservice/firebase-microservice.service";
import { CrawlerMicroserviceService } from "./crawler-microservice/crawler-microservice.service";
import { GoogleMicroserviceService } from "./google-microservice/google-microservice.service";
import { MongodbMicroserviceService } from "./mongodb-microservice/mongodb-microservice.service";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    FirebaseMicroserviceService,
    CrawlerMicroserviceService,
    GoogleMicroserviceService,
    MongodbMicroserviceService
  ]
})
export class AppModule {
}
