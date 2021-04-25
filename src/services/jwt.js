import Cookies from "universal-cookie";

export function setJwt(jwt) {
  console.log(jwt);
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