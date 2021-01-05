import { Router } from "https://deno.land/x/oak/mod.ts";

import deviceController from "../controllers/deviceController.ts";
import deviceTraceController from "../controllers/deviceTraceController.ts";

const router = new Router();

router.get('/', (ctx : any) => {
    ctx.render("index", null);
});

router.get('/hakkimizda', (ctx : any) => {
    ctx.render("about-us", null);
});

router.get('/iletisim', (ctx : any) => {
    ctx.render("contact", null);
});

//router.get("/device/:id", deviceController.show);
router.get("/device/:serialNo", deviceController.showBySerialNo);

router.get("/device/:deviceId/traces", deviceTraceController.showByDeviceId);
router.post("/device/:deviceId/traces", deviceTraceController.store);

router.get('/admin', (ctx : any) => {
    ctx.render("admin/index", null);
});

router.get('/admin/login', (ctx : any) => {
    ctx.render("admin/auth/login", null);
});

export { router };