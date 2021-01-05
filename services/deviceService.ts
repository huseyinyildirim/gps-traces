import DeviceRepository from "../repositories/deviceRepository.ts";
import DeviceModel from "../models/deviceModel.ts";

class DeviceService {
  getAllDevices = async () => {
    const result = await DeviceRepository.all();
    const devices = new Array<DeviceModel>();

    /*result.rows.map((items) => {
      var temp: any = {};
      result.rowDescription.columns.map((item, index) => {
        temp[item.name] = items[index];
      });
      devices.push(temp);
    });*/

    return result;
  };

  getDeviceBySerialNo = async (serialNo: string) => {
    const result = await DeviceRepository.findSerialNo(serialNo);

    /*var device: any = {};

    result.rows.map((items) => {
      result.rowDescription.columns.map((item, index) => {
        device[item.name] = items[index];
      });
    });*/

    return result;
  };

  getDeviceById = async (id: number) => {
    const result = await DeviceRepository.find(id);

    /*var device: any = {};

    result.rows.map((items) => {
      result.rowDescription.columns.map((item, index) => {
        device[item.name] = items[index];
      });
    });*/

    return result;
  };

  createDevice = async (device: DeviceModel) => {
    return await DeviceRepository.create(device);
  };

  updateDevice = async (id: number, device: DeviceModel) => {
    return await DeviceRepository.update(id, device);
  };

  deleteDevice = async (id: number) => {
    return await DeviceRepository.delete(id);
  };
}

export default new DeviceService();