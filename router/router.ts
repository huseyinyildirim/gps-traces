import { Router } from "https://deno.land/x/oak/mod.ts";

import adminCustomerController from "../controllers/admin/customerController.ts"

import apiDeviceController from "../controllers/api/deviceController.ts";
import apiDeviceTraceController from "../controllers/api/deviceTraceController.ts";
import apiAuthController from "../controllers/api/authController.ts";

const router = new Router();

//#region Assets
router.get("/assets/web/:folder/:file", async (context) => {
    const folder = context.params.folder;
    const file = context.params.file;
    context.response.body = await Deno.readFile(`${Deno.cwd()}/assets/web/${folder}/${file}`);
});
router.get("/assets/admin/:folder/:file", async (context) => {
    const folder = context.params.folder;
    const file = context.params.file;
    context.response.body = await Deno.readFile(`${Deno.cwd()}/assets/admin/${folder}/${file}`);
});
//#endregion

//#region Web
router.get('/', (ctx : any) => {
    ctx.render("web/pages/home/index", null);
});

router.get('/hakkimizda', (ctx : any) => {
    ctx.render("web/pages/content/about-us", null);
});

router.get('/iletisim', (ctx : any) => {
    ctx.render("web/pages/content/contact", null);
});
//#endregion

//#region
router.get('/admin', (ctx : any) => {
    ctx.render("admin/pages/home/index", null);
});

router.get('/admin/login', (ctx : any) => {
    ctx.render("admin/pages/auth/login", null);
});

router.get('/admin/customer', (ctx : any) => {
    ctx.render("admin/pages/customer/index", null);
});

router.get('/admin/device', (ctx : any) => {
    ctx.render("admin/pages/device/index", null);
});
//#endregion

//#region API
router.post("/api/v1/auth/login", apiAuthController.login);
router.get("/api/v1/customer/:customerId/devices", null)

//router.get("/device/:id", deviceController.show);
router.get("/api/v1/device/:serialNo", apiDeviceController.showBySerialNo);
router.get("/api/v1/device/:deviceId/traces", apiDeviceTraceController.showByDeviceId);
router.post("/api/v1/device/:deviceId/traces", apiDeviceTraceController.store);
//#endregion

export { router };