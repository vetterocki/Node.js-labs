import * as express from "express";
import {Request, Response} from "express";

import {HttpError} from "http-errors";
import {config} from "./config/config";
import {userController} from "./controller/user.controller";


export class Server {
  private app = express();
  private config = config;

  start() {
    this.initMiddlewares();
    this.initRoutes();
    this.initErrorHandling();
    this.startListening();
  }

  private initMiddlewares() {
    this.app.use(express.json({limit: "5mb"}));
  }

  private initRoutes() {
    this.app.use("/api/v1/users", userController);
  }

  private initErrorHandling() {
    this.app.use(
        (err: HttpError, req: Request, res: Response) => {
          const statusCode = err.status || 500;
          res.status(statusCode).send({
            message: err.message,
            status: statusCode,
          });
        }
    );
  }

  private startListening() {
    this.app.listen(this.config.port, () => {
      console.log("Server started listening on port", this.config.port);
    });
  }
}
