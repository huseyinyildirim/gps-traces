import { RouterContext, Context, Request, Response } from "https://deno.land/x/oak/mod.ts";
import deviceTraceService from "../services/deviceTraceService.ts";
import deviceTraceModel from "../models/deviceTraceModel.ts"
import { RESPONSE_STATUS_TYPE } from "../core/constants.ts";

class DeviceTraceController {
  async index(context: RouterContext) {
    const deviceTraces = await deviceTraceService.getAllDeviceTraces();
    context.response.headers.set("Content-Type", "application/json");
    context.response.body = { data: deviceTraces };
  }

  async showByDeviceId(context: RouterContext) {
    const { deviceId } = context.params;
    const deviceTraces = await deviceTraceService.getDeviceTracesByDeviceId(parseInt(deviceId!));
    context.response.headers.set("Content-Type", "application/json");
    context.response.body = { data: deviceTraces };
  }

  async show(context: RouterContext) {
    const { id } = context.params;
    const deviceTrace = await deviceTraceService.getDeviceTracesById(parseInt(id!));
    context.response.headers.set("Content-Type", "application/json");
    context.response.body = { data: deviceTrace };
  }

  async store(context: RouterContext) {

    const result = await context.request.body(
      { contentTypes: { json: ["application/json"] } },
    );
    
    const { device_id, lat, long, ip_address } = result.value;

    const trace : deviceTraceModel = {device_id, lat, long, ip_address}

    await deviceTraceService.createDeviceTraces(trace);

    context.response.headers.set("Content-Type", "application/json");

    context.response.body = {
      status: RESPONSE_STATUS_TYPE.success,
      statusCode: 500,
      systemTime: Date.now(),
      data: trace,
      message: null,
      error: {
          message: null,
          internalMessage: null,
          help: null
      }
    };
  }

  async update(context: RouterContext) {
    const result = await context.request.body(
      { contentTypes: { text: ["application/json"] } },
    );
    const device = result.value;
    const { id } = context.params;
    await deviceTraceService.updateDeviceTraces(parseInt(id!), <deviceTraceModel><unknown>device);

    context.response.headers.set("Content-Type", "application/json");
    context.response.body = { message: "success" };
  }

  async delete(context: RouterContext) {
    const { id } = context.params;
    await deviceTraceService.deleteDeviceTraces(parseInt(id!));

    context.response.headers.set("Content-Type", "application/json");
    context.response.body = { message: "success" };
  }
}
export default new DeviceTraceController();