import { Router } from "https://deno.land/x/oak/mod.ts";
import deviceController from "../controllers/deviceController.ts";
import deviceTraceController from "../controllers/deviceTraceController.ts";

const router = new Router();

router.get('/',(ctx) => {
    ctx.response.body = 'GPS Traces';
});

//router.get("/device/:id", deviceController.show);
router.get("/device/:serialNo", deviceController.showBySerialNo);

router.get("/device/:deviceId/traces", deviceTraceController.showByDeviceId);
router.post("/device/:deviceId/traces", deviceTraceController.store);

export { router };