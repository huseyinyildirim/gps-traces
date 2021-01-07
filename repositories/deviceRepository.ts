import { client } from "../configs/mysql.ts";
import DeviceModel from "../models/deviceModel.ts";

class DeviceRepository {
    async all() {
        return client.query("SELECT * FROM tbl_devices");
    }

    async find(id: number) {
        return client.query("SELECT * FROM tbl_devices WHERE id=?", [id]);
    }

    async findCustomerId(customerId: number) {
        return client.query("SELECT * FROM tbl_devices AS d USE INDEX(id) WHERE id IN (SELECT device_id FROM tbl_customer_devices AS cd USE INDEX(customer_id) WHERE cd.customer_id = ?)", [customerId]);
    }

    async findSerialNo(serialNo: string) {
        return client.query("SELECT * FROM tbl_devices WHERE serial_no=?", [serialNo]);
    }

    async create(device: DeviceModel) {
        return client.execute("INSERT INTO tbl_devices (serial_no, secret_key) VALUES (?, ?)",
            [
                device.serial_no,
                device.secret_key
            ]);
    }

    async update(id: number, device: DeviceModel) {
        return client.execute("UPDATE tbl_devices SET serial_no=?, secret_key=? WHERE id=?",
            [
                device.serial_no,
                device.secret_key,
                id,
            ]);
    }

    async delete(id: number) {
        return client.execute("DELETE FROM tbl_devices WHERE id=?", [id]);
    }
}

export default new DeviceRepository();