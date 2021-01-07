import CustomerRepository from "../repositories/customerRepository.ts";
import CustomerModel from "../models/customerModel.ts";

class CustomerService {
  loginControl = async (mail: string, password: string) => {
    return await CustomerRepository.loginControl(mail, password)
  }

  getAll = async () => {
    return await CustomerRepository.all();
  };

  getById = async (id: number) => {
    return await CustomerRepository.find(id);
  };

  create = async (device: CustomerModel) => {
    return await CustomerRepository.create(device);
  };

  update = async (id: number, device: CustomerModel) => {
    return await CustomerRepository.update(id, device);
  };

  delete = async (id: number) => {
    return await CustomerRepository.delete(id);
  };
}

export default new CustomerService();