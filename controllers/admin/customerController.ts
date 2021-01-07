import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import customerService from "../../services/customerService.ts";
import customerModel from "../../models/customerModel.ts"
import { RESPONSE_STATUS_TYPE } from "../../core/constants.ts";

class CustomerController {

  async index(ctx: RouterContext) {
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

  async show(ctx: RouterContext) {
    const { id } = ctx.params;
    const device = await customerService.getById(parseInt(id!));
    ctx.response.headers.set("Content-Type", "application/json");
    ctx.response.body = { data: device };
  }

  async store(ctx: RouterContext) {
    const result = await ctx.request.body(
        { contentTypes: { text: ["application/json"] } },
    );
    const device = result.value;

    await customerService.create(<customerModel><unknown>device);

    ctx.response.headers.set("Content-Type", "application/json");
    ctx.response.body = { message: "success" };
  }

  async update(ctx: RouterContext) {
    const result = await ctx.request.body(
        { contentTypes: { text: ["application/json"] } },
    );
    const device = result.value;
    const { id } = ctx.params;
    await customerService.update(parseInt(id!), <customerModel><unknown>device);

    ctx.response.headers.set("Content-Type", "application/json");
    ctx.response.body = { message: "success" };
  }

  async delete(ctx: RouterContext) {
    const { id } = ctx.params;
    await customerService.delete(parseInt(id!));

    ctx.response.headers.set("Content-Type", "application/json");
    ctx.response.body = { message: "success" };
  }
}

export default new CustomerController();