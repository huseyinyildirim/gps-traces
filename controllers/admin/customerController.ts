import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import customerService from "../../services/customerService.ts";
import customerModel from "../../models/customerModel.ts"
import { RESPONSE_STATUS_TYPE } from "../../core/constants.ts";

class CustomerController {

  async index(context: RouterContext) {
    const data = await customerService.getAll();

    return  {
      status: RESPONSE_STATUS_TYPE.success,
      statusCode: 200,
      systemTime: Date.now(),
      data: JSON.stringify(data),
      message: null,
      error: {
        message: null,
        internalMessage: null,
        help: null
      }
    };

  }

  async show(context: RouterContext) {
    const { id } = context.params;
    const device = await customerService.getById(parseInt(id!));
    context.response.headers.set("Content-Type", "application/json");
    context.response.body = { data: device };
  }

  async store(context: RouterContext) {
    const result = await context.request.body(
        { contentTypes: { text: ["application/json"] } },
    );
    const device = result.value;

    await customerService.create(<customerModel><unknown>device);

    context.response.headers.set("Content-Type", "application/json");
    context.response.body = { message: "success" };
  }

  async update(context: RouterContext) {
    const result = await context.request.body(
        { contentTypes: { text: ["application/json"] } },
    );
    const device = result.value;
    const { id } = context.params;
    await customerService.update(parseInt(id!), <customerModel><unknown>device);

    context.response.headers.set("Content-Type", "application/json");
    context.response.body = { message: "success" };
  }

  async delete(context: RouterContext) {
    const { id } = context.params;
    await customerService.delete(parseInt(id!));

    context.response.headers.set("Content-Type", "application/json");
    context.response.body = { message: "success" };
  }
}

export default new CustomerController();