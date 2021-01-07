import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import deviceService from "../../services/deviceService.ts";
import { RESPONSE_STATUS_TYPE } from "../../core/constants.ts";

class CustomerController {

  async devices(ctx: RouterContext) {
    if (ctx.params && ctx.params.customerId) {
      const {customerId} = ctx.params;
      const devices = await deviceService.getByCustomerId(parseInt(customerId!));

      ctx.response.headers.set("Content-Type", "application/json");

      ctx.response.body = {
        status: RESPONSE_STATUS_TYPE.success,
        statusCode: 200,
        systemTime: Date.now(),
        data: devices,
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
}

export default new CustomerController();