import DeviceRepository from "../repositories/deviceRepository.ts";
import DeviceModel from "../models/deviceModel.ts";

class DeviceService {
  getAll = async () => {
    return await DeviceRepository.all();
  };

  getBySerialNo = async (serialNo: string) => {
    return await DeviceRepository.findSerialNo(serialNo);
  };

  getById = async (id: number) => {
    return await DeviceRepository.find(id);
  };

  create = async (device: DeviceModel) => {
    return await DeviceRepository.create(device);
  };

  update = async (id: number, device: DeviceModel) => {
    return await DeviceRepository.update(id, device);
  };

  delete = async (id: number) => {
    return await DeviceRepository.delete(id);
  };
}

export default new DeviceService();