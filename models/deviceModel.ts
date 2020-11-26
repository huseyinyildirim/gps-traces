interface Device {
    id: number;
    serial_no: string;
    secret_key: string;
    createdAt: Date;
    createdBy: number;
    updatedAt: Date;
    updatedBy: number;
  }
  
  export default Device;