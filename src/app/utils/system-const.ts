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
      MANAGEMENT: {
        MAIN: "management",
        USER: "user",
      },
    },
  };

  public static readonly STORAGE = {
    TOKEN: "TOKEN",
  };

  public static readonly PI = 3.1415;

  public static readonly MENU = [
    {
      id: "dashboard",
      icon: "BsFillHouseFill",
      title: "Dashboard",
      link: "/" + this.ROUTE.ADMIN.ADMIN + "/" + this.ROUTE.ADMIN.DASHBOARD,
      hidden: false,
      permissions: [],
      child: [],
    },
    {
      id: "management",
      icon: "BsServer",
      title: "Management",
      link:
        "/" + this.ROUTE.ADMIN.ADMIN + "/" + this.ROUTE.ADMIN.MANAGEMENT.MAIN,
      hidden: false,
      permissions: [],
      child: [
        {
          id: "user",
          icon: "BsFillPeopleFill",
          title: "User",
          link:
            "/" +
            this.ROUTE.ADMIN.ADMIN +
            "/" +
            this.ROUTE.ADMIN.MANAGEMENT.MAIN +
            "/" +
            this.ROUTE.ADMIN.MANAGEMENT.USER,
          hidden: false,
          permissions: [],
          child: [],
        },
      ],
    },
  ];
}
