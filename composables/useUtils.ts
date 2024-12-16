import { jwtDecode } from "jwt-decode";

interface DecodedTokenBody {
  admin: number;
  app: number;
  country: string;
  email: string;
  grant: string;
  exp: number;
}

export const getJwtBodyAndSetNeededData = (token: string) => {
  let decodedTokenBody = jwtDecode(token) as DecodedTokenBody;
  let expiryTime = decodedTokenBody.exp;
  localStorage.setItem("ept", expiryTime.toString());
};
