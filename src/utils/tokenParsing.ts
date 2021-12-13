import jwt_decode from "jwt-decode";
export interface ParsedToken {
  name: string;
  stripe_id: string;
  user_id: string;
  role: string;
}
export const currentUser = () => {
  if (localStorage.getItem("token") === null) {
    return { name: null, role: null };
  } else {
    const { name, role }: ParsedToken = jwt_decode(localStorage.getItem("token") as string);
    return { name, role };
  }
};
