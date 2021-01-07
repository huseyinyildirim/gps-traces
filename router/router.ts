import { Router } from "https://deno.land/x/oak/mod.ts";
import { create } from "https://deno.land/x/djwt@v2.0/mod.ts"
import { v4 } from "https://deno.land/std@0.83.0/uuid/mod.ts";

import adminCustomerController from "../controllers/admin/customerController.ts"

import apiDeviceController from "../controllers/api/deviceController.ts";
import apiDeviceTraceController from "../controllers/api/deviceTraceController.ts";
import apiAuthController from "../controllers/api/authController.ts";
import {RESPONSE_STATUS_TYPE} from "../core/constants.ts";

//#region JWT
const jwtKey = "A38E074BDEEFBB6E37049F44D7315040B82A821FF718F7C92EA5E58FEF9034F021099E6D03BB75C2A553B238D764EEAD43828E454CCF4D7A6DC92AE6A2D49B0C";

const jwt = await create(
    {
        alg: "HS512",
        typ: "JWT"
    }, {
        iss: "gpstakipapp.com",
        iat: new Date().getTime(),
        exp: new Date().getTime() + 60000,
        jti: v4.generate()
    }, jwtKey)
//#endregion

const router = new Router();

//#region Assets
router.get("/assets/web/:folder/:file", async (ctx) => {
    const folder = ctx.params.folder;
    const file = ctx.params.file;
    ctx.response.body = await Deno.readFile(`${Deno.cwd()}/assets/web/${folder}/${file}`);
});
router.get("/assets/admin/:folder/:file", async (ctx) => {
    const folder = ctx.params.folder;
    const file = ctx.params.file;
    ctx.response.body = await Deno.readFile(`${Deno.cwd()}/assets/admin/${folder}/${file}`);
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

//#region Admin
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
router.get("/api/handshake", async (ctx) => {
    ctx.response.body = {
        status: RESPONSE_STATUS_TYPE.success,
        statusCode: 200,
        systemTime: Date.now(),
        data: jwt,
        message: null,
        error: {
            message: null,
            internalMessage: null,
            help: null
        }
    };
});

router.post("/api/v1/auth/login", apiAuthController.login);
router.get("/api/v1/customer/:customerId/devices")

//router.get("/device/:id", deviceController.show);
router.get("/api/v1/device/:serialNo", apiDeviceController.showBySerialNo);
router.get("/api/v1/device/:deviceId/traces", apiDeviceTraceController.showByDeviceId);
router.post("/api/v1/device/:deviceId/traces", apiDeviceTraceController.store);
//#endregion

export { router };