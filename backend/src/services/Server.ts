import express from "express";
import cors from "cors";
import partnersRouter from "../routes/partners";
import Partners from "../models/partners";
import { urlencoded } from "body-parser";
import path from "path";

class Server {
  private app: express.Application;
  private port: number | string;
  private apiPaths = {
    partners: "/api/partners",
  };
  constructor() {
    this.app = express();
    this.app.use(cors());
    this.port = process.env.PORT || 4000;
    this.middlewares();
    this.routes();
  }
  private middlewares() {
    this.app.use(express.json());
    this.app.use(urlencoded({ limit: "50mb" }));
    this.app.use(express.static("public"));
    // add more middlewares here
  }
  private routes() {
    // add more routes here
    this.app.use(this.apiPaths.partners, partnersRouter);
  }
  public async listen() {
    // add more configuration here
    const partnersInstance = new Partners();
    await partnersInstance.initialize();
    console.log("Partners db initialized");
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

export default Server;
