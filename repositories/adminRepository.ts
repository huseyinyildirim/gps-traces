import { client } from "../configs/database.ts";
import AdminModel from "../models/adminModel.ts";

class AdminRepository {
  async all() {
    return client.query("SELECT * FROM tbl_admins");
  }

  async find(id: number) {
    return client.query(
      { text: "SELECT * FROM tbl_admins WHERE id=$1", args: [id] },
    );
  }

  async create(admin: AdminModel) {
    return client.query(
      {
        text: "INSERT INTO tbl_admins (name, surname, mail, phone, password) VALUES ($1, $2, $3, $4, $5)",
        args: [
            admin.name,
            admin.surname,
            admin.mail,
            admin.phone,
            admin.password
        ],
      },
    );
  }

  async update(id: number, admin: AdminModel) {
    return client.query(
      {
        text: "UPDATE tbl_admins SET name=$1, surname=$2, mail=$3, phone=$4, password=$5 WHERE id=$6",
        args: [
          admin.name,
          admin.surname,
          admin.mail,
          admin.phone,
          admin.password,
          id,
        ],
      },
    );
  }

  async delete(id: number) {
    return client.query(
      {
        text: "DELETE FROM tbl_admins WHERE id=$1",
        args: [id],
      },
    );
  }
}
export default new AdminRepository();