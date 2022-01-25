import { Home } from "./home";
import { User } from "./user";

export interface Comment {
  id?: string,
  content?: string,
  time?: string,
  home?: Home,
  user?: User
}
