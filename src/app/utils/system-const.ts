export class SYSTEM_CONST {
  // public static readonly VERSION = "1.0.0";
  public static readonly API = {
    AUTH: {
      LOGIN: "/login",
    },
  };

  public static readonly ROUTE = {
    AUTH: {
      AUTH: "auth",
      LOGIN: "login",
      VERIFY_CODE: "verify-code",
    },
    ADMIN: {
      ADMIN: "admin",
      DASHBOARD: "dashboard",
    },
  };

  public static readonly STORAGE = {
    TOKEN: "TOKEN",
  };

  public static readonly PI = 3.1415;
}
