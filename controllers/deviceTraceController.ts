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
    if (context.params && context.params.deviceId) {
      const { deviceId } = context.params;
      const deviceTraces = await deviceTraceService.getDeviceTracesByDeviceId(parseInt(deviceId!));

      context.response.headers.set("Content-Type", "application/json");

      context.response.body = {
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
      context.response.body = {
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

  async show(context: RouterContext) {
    const { id } = context.params;
    const deviceTrace = await deviceTraceService.getDeviceTracesById(parseInt(id!));
    context.response.headers.set("Content-Type", "application/json");
    context.response.body = { data: deviceTrace };
  }

  async store(context: RouterContext) {

    if (context.request.hasBody) {
      const result = await context.request.body(
            { contentTypes: { text: ["application/javascript"] } },
          );
      
          const data : any = await result.value;
      
          await deviceTraceService.createDeviceTraces(data);
      
          context.response.headers.set("Content-Type", "application/json");
      
          context.response.body = {
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
          context.response.body = {
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