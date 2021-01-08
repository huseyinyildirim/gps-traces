import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import customerService from "../../services/customerService.ts";
import {LOCALE, RESPONSE_STATUS_TYPE} from "../../core/constants.ts";

class AuthController {

  async login(ctx: RouterContext) {
    try {

      if (ctx.request.hasBody) {
        const result = await ctx.request.body(
            { contentTypes: { text: ["application/javascript"] } },
        );

        const values : any = await result.value;

        const data = await customerService.loginControl(values.mail, values.password)

        ctx.response.headers.set("Content-Type", "application/json");

        if (data.length > 0) {
          ctx.response.body = {
            status: RESPONSE_STATUS_TYPE.success,
            statusCode: 200,
            systemTime: Date.now(),
            data: data[0],
            message: null,
            locale: LOCALE.TR,
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
            locale: LOCALE.TR,
            error: {
              message: "Kullanıcı adı veya şifreniz hatalıdır.",
              internalMessage: null,
              help: null
            }
          };
        }
      }

    } catch (e) {
      console.log(e)
    }
  }
}

export default new AuthController();