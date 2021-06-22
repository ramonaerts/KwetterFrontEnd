import Cookies from "universal-cookie";

export function setJwt(jwt) {
    const expirationDate = new Date();
    expirationDate.setHours(expirationDate.getHours() + 24);
  
    const cookie = new Cookies();
    cookie.remove("Jwt", { path: "/" });
    cookie.set("Jwt", jwt, {
      path: "/",
      expires: expirationDate,
      sameSite: true,
    });
  }

  export function getJwt(){
    const cookie = new Cookies();
    const token = cookie.get("Jwt");

    return token;
  }
  
  export function unsetJwt() {
    const cookie = new Cookies();
    cookie.remove("Jwt", { path: "/" });
  }

  export function getClaim(claim) {
    const cookie = new Cookies();
    const token = cookie.get("Jwt");
    if (token === undefined) {
      return undefined;
    }
  
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
        .join("")
    );
  
    const jwt = JSON.parse(jsonPayload);
    return jwt[claim];
  }