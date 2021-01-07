import DeviceTraceRepository from "../repositories/deviceTraceRepository.ts";
import DeviceTraceModel from "../models/deviceTraceModel.ts";

class DeviceTraceService {
  getAll = async () => {
    /*const devices = new Array<DeviceTraceModel>();

    result.rows.map((items) => {
      var temp: any = {};
      result.rowDescription.columns.map((item, index) => {
        temp[item.name] = items[index];
      });
      devices.push(temp);
    });*/

    return await DeviceTraceRepository.all();
  };

  getByDeviceId = async (deviceId: number) => {
    /*const deviceTraces = new Array<DeviceTraceModel>();

    result.rows.map((items) => {
      var temp: any = {};
      result.rowDescription.columns.map((item, index) => {
        temp[item.name] = items[index];
      });
      deviceTraces.push(temp);
    });*/

    return await DeviceTraceRepository.findDeviceId(deviceId);
  };

  getById = async (id: number) => {
    /*var device: any = {};

    result.rows.map((items) => {
      result.rowDescription.columns.map((item, index) => {
        device[item.name] = items[index];
      });
    });*/

    return await DeviceTraceRepository.find(id);
  };

  create = async (device: DeviceTraceModel) => {
    return await DeviceTraceRepository.create(device);
  };

  update = async (id: number, device: DeviceTraceModel) => {
    return await DeviceTraceRepository.update(id, device);
  };

  delete = async (id: number) => {
    return await DeviceTraceRepository.delete(id);
  };
}

export default new DeviceTraceService();