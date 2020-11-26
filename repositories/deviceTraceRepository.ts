import { client } from "../configs/database.ts";
import DeviceTraceModel from "../models/deviceTraceModel.ts";

class DeviceTraceRepository {
  async all() {
    return client.query("SELECT * FROM tbl_device_traces");
  }

  async find(id: number) {
    return client.query(
      { text: "SELECT * FROM tbl_device_traces WHERE id=$1", args: [id] },
    );
  }

  async findDeviceId(deviceId: number) {
    return client.query(
      { text: "SELECT * FROM tbl_device_traces WHERE device_id=$1", args: [deviceId] },
    );
  }

  async create(deviceTrace: DeviceTraceModel) {
    return client.query(
      {
        text: "INSERT INTO tbl_device_traces (device_id, long, lat, ip_address) VALUES ($1, $2, $3, $4)",
        args: [
          deviceTrace.device_id,
          deviceTrace.long,
          deviceTrace.lat,
          deviceTrace.ip_address
        ],
      },
    );
  }

  async update(id: number, deviceTrace: DeviceTraceModel) {
    return client.query(
      {
        text: "UPDATE tbl_devices SET device_id=$1, long=$2, lat=$3, ip_address=$4 WHERE id=$",
        args: [
          deviceTrace.device_id,
          deviceTrace.long,
          deviceTrace.lat,
          deviceTrace.ip_address,
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
export default new DeviceTraceRepository();