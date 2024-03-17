import { Router } from "express";

const route = Router();

route.use((req, res, next) => {
    return res.status(404).json(
        {
            status: 'False',
            message: 'Route Not Found'
        }
    );
})

export default route;