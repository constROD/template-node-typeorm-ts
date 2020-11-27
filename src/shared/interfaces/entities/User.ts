import { _ICommon } from "./Common";

export interface _IUser extends _ICommon {
  first_name: string;
  middle_name: string;
  last_name: string;
  birthdate: Date;
  gender: string;
  username: string;
  password: string;
  user_type_id: number;
}

export interface _IUserType extends _ICommon {
  type: string;
  permissions: string;
}

export interface IUserTypePermission {
  productsManagement: {
    products: string;
    variants: string;
  };
  productTypeManagement: {
    categories: string;
    brands: string;
    suppliers: string;
  };
  warehouseManagement: {
    warehouseLocations: string;
    warehouse: string;
    aisles: string;
    racks: string;
    pallets: string;
  };
  inventoryManagement: string;
  inboundManagement: {
    stockTransfers: string;
    purchaseOrders: string;
    ntds: string;
    inboundTransaction: string;
    staging: string;
  };
  outboundManagement: {
    purchaseOrders: string;
    mfcRequests: string;
    salesOrders: string;
    stockTransferOrders: string;
    outboundTransactions: string;
    pickings: string;
    dispatchs: string;
  };
  skuManagement: string;
  deviceManagement: string;
  announcementManagement: string;
  reportsManagement: string;
  userManagement: string;
  userPermissionsManagement: string;
  clientManagement: string;
  courierManagement: string;
  systemLogs: string;
}
