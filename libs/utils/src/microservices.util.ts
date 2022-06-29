import { Transport } from "@nestjs/microservices";

export const MICROSERVICES_CONFIG = {
  FIREBASE_MICROSERVICE: {
    transport: Transport.TCP,
    options: {
      host: "127.0.0.1",
      port: 8800
    }
  },
  CRAWLER_MICROSERVICE: {
    transport: Transport.TCP,
    options: {
      host: "127.0.0.1",
      port: 8801
    }
  },
  GOOGLE_MICROSERVICE: {
    transport: Transport.TCP,
    options: {
      host: "127.0.0.1",
      port: 8802
    }
  },
  MONGODB_MICROSERVICE: {
    transport: Transport.TCP,
    options: {
      host: "127.0.0.1",
      port: 8803
    }
  },
};