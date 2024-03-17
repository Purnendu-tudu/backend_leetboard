import { Router } from "express";
import route from "./leetBoard.mjs";
import errRoute from "../middleware/erroApiRequest.mjs"


const apiRoute = Router();


apiRoute.use('/api',route);
apiRoute.use('/api',errRoute);


export default apiRoute;
