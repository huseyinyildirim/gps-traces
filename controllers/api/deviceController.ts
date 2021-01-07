import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import deviceService from "../../services/deviceService.ts";
import deviceModel from "../../models/deviceModel.ts"
import { RESPONSE_STATUS_TYPE } from "../../core/constants.ts";

class DeviceController {
  async index(context: RouterContext) {
    const data = await deviceService.getAll();
    context.response.headers.set("Content-Type", "application/json");
    context.response.body = { data: data };
  }

  async showBySerialNo(context: RouterContext) {
    
    if (context.params && context.params.serialNo) {

      const { serialNo } = context.params;
      const device = await deviceService.getBySerialNo(serialNo!);

      context.response.headers.set("Content-Type", "application/json");

      context.response.body = {
        status: RESPONSE_STATUS_TYPE.success,
        statusCode: 200,
        systemTime: Date.now(),
        data: device,
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
    const device = await deviceService.getById(parseInt(id!));
    context.response.headers.set("Content-Type", "application/json");
    context.response.body = { data: device };
  }

  async store(context: RouterContext) {
    const result = await context.request.body(
      { contentTypes: { text: ["application/json"] } },
    );
    const device = result.value;

    await deviceService.create(<deviceModel><unknown>device);

    context.response.headers.set("Content-Type", "application/json");
    context.response.body = { message: "success" };
  }

  async update(context: RouterContext) {
    const result = await context.request.body(
      { contentTypes: { text: ["application/json"] } },
    );
    const device = result.value;
    const { id } = context.params;
    await deviceService.update(parseInt(id!), <deviceModel><unknown>device);

    context.response.headers.set("Content-Type", "application/json");
    context.response.body = { message: "success" };
  }

  async delete(context: RouterContext) {
    const { id } = context.params;
    await deviceService.delete(parseInt(id!));

    context.response.headers.set("Content-Type", "application/json");
    context.response.body = { message: "success" };
  }
}

export default new DeviceController();