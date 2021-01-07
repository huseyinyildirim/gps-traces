import { client } from "../configs/mysql.ts";
import CustomerDeviceModel from "../models/customerDeviceModel.ts";

class CustomerDeviceRepository {
    async find(deviceId: number) {
        return client.query("SELECT * FROM tbl_customer_devices WHERE device_id=?",
            [
                deviceId
            ]);
    }

    async create(customerDevice: CustomerDeviceModel) {
        return client.execute("INSERT INTO tbl_customer_devices (customer_id, device_id) VALUES (?, ?)",
            [
                customerDevice.customer_id,
                customerDevice.device_id
            ]);
    }

    async delete(deviceId: number) {
        return client.execute("DELETE FROM tbl_customer_devices WHERE device_id=?", [deviceId]);
    }
}

export default new CustomerDeviceRepository();