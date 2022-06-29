import { Injectable, Logger } from "@nestjs/common";
import { FirebaseMicroserviceService } from "./firestore-microservice/firebase-microservice.service";
import { CrawlerMicroserviceService } from "./crawler-microservice/crawler-microservice.service";
import { GoogleMicroserviceService } from "./google-microservice/google-microservice.service";
import { MongodbMicroserviceService } from "./mongodb-microservice/mongodb-microservice.service";

@Injectable()
export class AppService {
  logger = new Logger(AppService.name);
  constructor(
    private firebaseClient: FirebaseMicroserviceService,
    private crawlerClient: CrawlerMicroserviceService,
    private googleClient: GoogleMicroserviceService,
    private mongoClient: MongodbMicroserviceService,
  ) {
  }
  async getHealth(): Promise<any> {
    let status = {};

    try {
      const firestoreClient = await this.firebaseClient.checkHealth();
      this.logger.debug(firestoreClient);
      status['firebaseClient'] = firestoreClient && 'ok';
    } catch (e) {
      this.logger.error(e);
      status['firebaseClient'] = 'offline';
    }

    try {
      const crawlerClient = await this.crawlerClient.checkHealth();
      this.logger.debug(crawlerClient);
      status['crawlerClient'] = crawlerClient && 'ok';
    } catch (e) {
      this.logger.error(e);
      status['crawlerClient'] = 'offline';
    }

    try {
      const googleClient = await this.googleClient.checkHealth();
      this.logger.debug(googleClient);
      status['googleClient'] = googleClient && 'ok';
    } catch (e) {
      this.logger.error(e);
      status['googleClient'] = 'offline';
    }

    try {
      const mongoClient = await this.mongoClient.checkHealth();
      this.logger.debug(mongoClient);
      status['mongoClient'] = mongoClient && 'ok';
    } catch (e) {
      this.logger.error(e);
      status['mongoClient'] = 'offline';
    }

    return status;
  }
}
