import { client } from "../configs/mysql.ts";
import DeviceTraceModel from "../models/deviceTraceModel.ts";

class DeviceTraceRepository {
  async all() {
    return client.query("SELECT * FROM tbl_device_traces");
  }

  async find(id: number) {
    return client.query("SELECT * FROM tbl_device_traces WHERE id=?", [id]);
  }

  async findDeviceId(deviceId: number) {
    return client.query("SELECT * FROM tbl_device_traces WHERE device_id=?", [deviceId]);
  }

  async create(deviceTrace: DeviceTraceModel) {
    return client.execute("INSERT INTO tbl_device_traces (device_id, longitude, latitude, speed, ip_address) VALUES (?, ?, ?, ?, ?)",
        [
          deviceTrace.device_id,
          deviceTrace.longitude,
          deviceTrace.latitude,
          deviceTrace.speed,
          deviceTrace.ip_address
        ]);
  }

  async update(id: number, deviceTrace: DeviceTraceModel) {
    return client.execute("UPDATE tbl_devices SET device_id=?, longitude=?, latitude=?, speed=?, ip_address=? WHERE id=?",
        [
          deviceTrace.device_id,
          deviceTrace.longitude,
          deviceTrace.latitude,
          deviceTrace.speed,
          deviceTrace.ip_address,
          id,
        ]);
  }

  async delete(id: number) {
    return client.execute("DELETE FROM tbl_devices WHERE id=?", [id]);
  }
}

export default new DeviceTraceRepository();