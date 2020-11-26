import { client } from "../configs/database.ts";
import DeviceModel from "../models/deviceModel.ts";

class DeviceRepository {
  async all() {
    return client.query("SELECT * FROM tbl_devices");
  }

  async find(id: number) {
    return client.query(
      { text: "SELECT * FROM tbl_devices WHERE id=$1", args: [id] },
    );
  }

  async findSerialNo(serialNo: string) {
    return client.query(
      { text: "SELECT * FROM tbl_devices WHERE serial_no=$1", args: [serialNo] },
    );
  }

  async create(device: DeviceModel) {
    return client.query(
      {
        text: "INSERT INTO tbl_devices (serial_no, secret_key) VALUES ($1, $2)",
        args: [
            device.serial_no,
            device.secret_key
        ],
      },
    );
  }

  async update(id: number, device: DeviceModel) {
    return client.query(
      {
        text: "UPDATE tbl_devices SET serial_no=$1, secret_key=$2 WHERE id=$4",
        args: [
            device.serial_no,
            device.secret_key,
          id,
        ],
      },
    );
  }

  async delete(id: number) {
    return client.query(
      {
        text: "DELETE FROM tbl_devices WHERE id=$1",
        args: [id],
      },
    );
  }
}
export default new DeviceRepository();