import DeviceTraceRepository from "../repositories/deviceTraceRepository.ts";
import DeviceTraceModel from "../models/deviceTraceModel.ts";

class DeviceTraceService {
  getAllDeviceTraces = async () => {
    const result = await DeviceTraceRepository.all();
    const devices = new Array<DeviceTraceModel>();

    result.rows.map((book) => {
      var temp: any = {};
      result.rowDescription.columns.map((item, index) => {
        temp[item.name] = book[index];
      });
      devices.push(temp);
    });

    return devices;
  };

  getDeviceTracesByDeviceId = async (deviceId: number) => {
    const result = await DeviceTraceRepository.findDeviceId(deviceId);
    const deviceTraces = new Array<DeviceTraceModel>();

    result.rows.map((book) => {
      var temp: any = {};
      result.rowDescription.columns.map((item, index) => {
        temp[item.name] = book[index];
      });
      deviceTraces.push(temp);
    });

    return deviceTraces;
  };

  getDeviceTracesById = async (id: number) => {
    const result = await DeviceTraceRepository.find(id);

    var device: any = {};

    result.rows.map((items) => {
      result.rowDescription.columns.map((item, index) => {
        device[item.name] = items[index];
      });
    });

    return device;
  };

  createDeviceTraces = async (device: DeviceTraceModel) => {
    return await DeviceTraceRepository.create(device);
  };

  updateDeviceTraces = async (id: number, device: DeviceTraceModel) => {
    return await DeviceTraceRepository.update(id, device);
  };

  deleteDeviceTraces = async (id: number) => {
    return await DeviceTraceRepository.delete(id);
  };
}

export default new DeviceTraceService();