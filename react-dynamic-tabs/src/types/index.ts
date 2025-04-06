export enum E_APP_ROUTES {
  HOME = "/home",
  PRODUCTS = "/products",
  ABOUT = "/about",
  CONTACT_US = "contact us",
}

export interface I_TAB {
  route: E_APP_ROUTES;
  name: string;
}
