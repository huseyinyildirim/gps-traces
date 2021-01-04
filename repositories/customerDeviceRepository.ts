import { client } from "../configs/database.ts";
import CustomerDeviceModel from "../models/customerDeviceModel.ts";

class CustomerDeviceRepository {
  async find(deviceId: number) {
    return client.query(
      { text: "SELECT * FROM tbl_customer_devices WHERE device_id=$1",
      args: [deviceId] },
    );
  }

  async create(customerDevice: CustomerDeviceModel) {
    return client.query(
      {
        text: "INSERT INTO tbl_customer_devices (customer_id, device_id) VALUES ($1, $2)",
        args: [
          customerDevice.customer_id,
          customerDevice.device_id
        ],
      },
    );
  }

  async delete(deviceId: number) {
    return client.query(
      {
        text: "DELETE FROM tbl_customer_devices WHERE device_id=$1",
        args: [deviceId],
      },
    );
  }
}

export default new CustomerDeviceRepository();