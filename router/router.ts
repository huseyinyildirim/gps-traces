import { Router } from "https://deno.land/x/oak/mod.ts";

import deviceController from "../controllers/deviceController.ts";
import deviceTraceController from "../controllers/deviceTraceController.ts";

const router = new Router();

router.get('/', (ctx:any) => {
    ctx.render("index.ejs", { data: { name: "John" } });

});

//router.get("/device/:id", deviceController.show);
router.get("/device/:serialNo", deviceController.showBySerialNo);

router.get("/device/:deviceId/traces", deviceTraceController.showByDeviceId);
router.post("/device/:deviceId/traces", deviceTraceController.store);

router.get('/admin', (ctx) => {
    //ctx.render("./views/admin/index.ejs", { data: { name: "John" } });
});

router.get('/admin/login', (ctx) => {
    //ctx.render(".views/admin/auth/login.ejs", { data: { name: "John" } });
});

export { router };