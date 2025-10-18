import Cookies from "js-cookie";

class CookiesService {
  public static getItem<T = unknown>(name: string): T | null {
    const value = Cookies.get(name);
    try {
      return value ? (JSON.parse(value) as T) : null;
    } catch {
      return value as T;
    }
  }

  public static setItem(name: string, value: unknown, days = 365) {
    Cookies.set(name, JSON.stringify(value), {
      expires: days,
      path: "/",
      secure: true,
      sameSite: "strict",
    });
  }

  public static removeItem(name: string) {
    Cookies.remove(name, { path: "/" });
  }
}

const cookieStorage = () => ({
  getItem: (name: string) => {
    return JSON.stringify(CookiesService.getItem(name));
  },
  setItem: (name: string, value: string) => {
    CookiesService.setItem(name, JSON.parse(value));
  },
  removeItem: (name: string) => {
    CookiesService.removeItem(name);
  },
});

export { CookiesService, cookieStorage };
