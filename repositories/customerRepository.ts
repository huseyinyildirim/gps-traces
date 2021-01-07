import { client } from "../configs/mysql.ts";
import CustomerModel from "../models/customerModel.ts";

class CustomerRepository {

    async loginControl(mail: string, password:string) {
        return client.query("SELECT * FROM tbl_customers WHERE mail=? AND password=?", [
            mail,
            password
        ]);
    }

    async all() {
        return client.query("SELECT * FROM tbl_customers");
    }

    async find(id: number) {
        return client.query("SELECT * FROM tbl_customers WHERE id=?", [id]);
    }

    async create(customer: CustomerModel) {
        return client.execute("INSERT INTO tbl_customers (name, surname, mail, phone, password) VALUES (?, ?, ?, ?, ?)",
            [
                customer.name,
                customer.surname,
                customer.mail,
                customer.phone,
                customer.password
            ]);
    }

    async update(id: number, customer: CustomerModel) {
        return client.execute("UPDATE tbl_customers SET name=?, surname=?, mail=?, phone=?, password=? WHERE id=?",
            [
                customer.name,
                customer.surname,
                customer.mail,
                customer.phone,
                customer.password,
                id,
            ]);
    }

    async delete(id: number) {
        return client.execute("DELETE FROM tbl_customers WHERE id=?", [id]);
    }
}

export default new CustomerRepository();