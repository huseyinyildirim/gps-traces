import { client } from "../configs/mysql.ts";
import AdminModel from "../models/adminModel.ts";

class AdminRepository {
    async all() {
        return client.query("SELECT * FROM tbl_admins");
    }

    async find(id: number) {
        return client.query("SELECT * FROM tbl_admins WHERE id=?", [id]);
    }

    async create(admin: AdminModel) {
        return client.execute("INSERT INTO tbl_admins (name, surname, mail, phone, password) VALUES (?, ?, ?, ?, ?)",
            [
                admin.name,
                admin.surname,
                admin.mail,
                admin.phone,
                admin.password
            ]);
    }

    async update(id: number, admin: AdminModel) {
        return client.execute("UPDATE tbl_admins SET name=?, surname=?, mail=?, phone=?, password=? WHERE id=?",
            [
                admin.name,
                admin.surname,
                admin.mail,
                admin.phone,
                admin.password,
                id,
            ]);
    }

    async delete(id: number) {
        return client.execute("DELETE FROM tbl_admins WHERE id=?", [id]);
    }
}

export default new AdminRepository();