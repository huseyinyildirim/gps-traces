import { client } from "../configs/database.ts";
import CustomerModel from "../models/customerModel.ts";

class CustomerRepository {
  async all() {
    return client.query("SELECT * FROM tbl_customers");
  }

  async find(id: number) {
    return client.query(
      { text: "SELECT * FROM tbl_customers WHERE id=$1", args: [id] },
    );
  }

  async create(customer: CustomerModel) {
    return client.query(
      {
        text: "INSERT INTO tbl_customers (name, surname, mail, phone, password) VALUES ($1, $2, $3, $4, $5)",
        args: [
          customer.name,
          customer.surname,
          customer.mail,
          customer.phone,
          customer.password
        ],
      },
    );
  }

  async update(id: number, customer: CustomerModel) {
    return client.query(
      {
        text: "UPDATE tbl_customers SET name=$1, surname=$2, mail=$3, phone=$4, password=$5 WHERE id=$6",
        args: [
          customer.name,
          customer.surname,
          customer.mail,
          customer.phone,
          customer.password,
          id,
        ],
      },
    );
  }

  async delete(id: number) {
    return client.query(
      {
        text: "DELETE FROM tbl_customers WHERE id=$1",
        args: [id],
      },
    );
  }
}
export default new CustomerRepository();