interface DeviceTrace {
    id?: number;
    device_id: number;
    longitude: string;
    latitude: string;
    speed?: number;
    ip_address: string;
}
  
  export default DeviceTrace;