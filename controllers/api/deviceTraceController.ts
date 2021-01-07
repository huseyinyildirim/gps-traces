import { RouterContext, Context, Request, Response } from "https://deno.land/x/oak/mod.ts";
import deviceTraceService from "../../services/deviceTraceService.ts";
import deviceTraceModel from "../../models/deviceTraceModel.ts"
import { RESPONSE_STATUS_TYPE } from "../../core/constants.ts";

class DeviceTraceController {
  async index(ctx: RouterContext) {
    const deviceTraces = await deviceTraceService.getAll();
    ctx.response.headers.set("Content-Type", "application/json");
    ctx.response.body = { data: deviceTraces };
  }

  async showByDeviceId(ctx: RouterContext) {
    if (ctx.params && ctx.params.deviceId) {
      const { deviceId } = ctx.params;
      const deviceTraces = await deviceTraceService.getByDeviceId(parseInt(deviceId!));

      ctx.response.headers.set("Content-Type", "application/json");

      ctx.response.body = {
        status: RESPONSE_STATUS_TYPE.success,
        statusCode: 200,
        systemTime: Date.now(),
        data: deviceTraces,
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
    const deviceTrace = await deviceTraceService.getById(parseInt(id!));
    ctx.response.headers.set("Content-Type", "application/json");
    ctx.response.body = { data: deviceTrace };
  }

  async store(ctx: RouterContext) {

    if (ctx.request.hasBody) {
      const result = await ctx.request.body(
          { contentTypes: { text: ["application/javascript"] } },
      );

      const data : any = await result.value;

      await deviceTraceService.create(data);

      ctx.response.headers.set("Content-Type", "application/json");

      ctx.response.body = {
        status: RESPONSE_STATUS_TYPE.success,
        statusCode: 201,
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

  async update(ctx: RouterContext) {
    const result = await ctx.request.body(
        { contentTypes: { text: ["application/json"] } },
    );
    const device = result.value;
    const { id } = ctx.params;
    await deviceTraceService.update(parseInt(id!), <deviceTraceModel><unknown>device);

    ctx.response.headers.set("Content-Type", "application/json");
    ctx.response.body = { message: "success" };
  }

  async delete(ctx: RouterContext) {
    const { id } = ctx.params;
    await deviceTraceService.delete(parseInt(id!));

    ctx.response.headers.set("Content-Type", "application/json");
    ctx.response.body = { message: "success" };
  }
}

export default new DeviceTraceController();