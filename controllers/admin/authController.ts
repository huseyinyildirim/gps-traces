import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import deviceService from "../../services/deviceService.ts";
import deviceModel from "../../models/deviceModel.ts"
import { RESPONSE_STATUS_TYPE } from "../../core/constants.ts";

class AuthController {

  async index(ctx: RouterContext) {
    const data = await deviceService.getAll();
    ctx.response.headers.set("Content-Type", "application/json");
    ctx.response.body = { data: data };
  }

  async showBySerialNo(ctx: RouterContext) {

    if (ctx.params && ctx.params.serialNo) {

      const { serialNo } = ctx.params;
      const data = await deviceService.getBySerialNo(serialNo!);

      ctx.response.headers.set("Content-Type", "application/json");

      ctx.response.body = {
        status: RESPONSE_STATUS_TYPE.success,
        statusCode: 200,
        systemTime: Date.now(),
        data: data,
        message: null,
        error: {
          message: null,
          internalMessage: null,
          help: null
        }
      };

    } else {
      ctx.response.body = {
        status: RESPONSE_STATUS_TYPE.failure,
        statusCode: 404,
        systemTime: Date.now(),
        data: null,
        message: null,
        error: {
          message: null,
          internalMessage: null,
          help: null
        }
      };
    }
  }

  async show(ctx: RouterContext) {
    const { id } = ctx.params;
    const device = await deviceService.getById(parseInt(id!));
    ctx.response.headers.set("Content-Type", "application/json");
    ctx.response.body = { data: device };
  }

  async store(ctx: RouterContext) {
    const result = await ctx.request.body(
        { contentTypes: { text: ["application/json"] } },
    );
    const device = result.value;

    await deviceService.create(<deviceModel><unknown>device);

    ctx.response.headers.set("Content-Type", "application/json");
    ctx.response.body = { message: "success" };
  }

  async update(ctx: RouterContext) {
    const result = await ctx.request.body(
        { contentTypes: { text: ["application/json"] } },
    );
    const device = result.value;
    const { id } = ctx.params;
    await deviceService.update(parseInt(id!), <deviceModel><unknown>device);

    ctx.response.headers.set("Content-Type", "application/json");
    ctx.response.body = { message: "success" };
  }

  async delete(ctx: RouterContext) {
    const { id } = ctx.params;
    await deviceService.delete(parseInt(id!));

    ctx.response.headers.set("Content-Type", "application/json");
    ctx.response.body = { message: "success" };
  }
}

export default new AuthController();