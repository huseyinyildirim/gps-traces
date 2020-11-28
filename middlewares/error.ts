import { Response } from "https://deno.land/x/oak/mod.ts";
import { RESPONSE_STATUS_TYPE } from "../core/constants.ts";

export default async ({ response }: { response: Response }, next: () => Promise<void>) => {
  try {
    await next();
  } catch (err) {
    response.status = 500;
    response.body = {
        status: RESPONSE_STATUS_TYPE.failure,
        statusCode: 500,
        systemTime: Date.now(),
        data: null,
        message: null,
        error: {
            message: err.message,
            internalMessage: err.message,
            help: null
        }
    };
  }
};