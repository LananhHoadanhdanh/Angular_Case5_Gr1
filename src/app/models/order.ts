import { Home } from "./home";
import { User } from "./user";

export interface Order {
  id?: string;
  bookingDate?: string;
  startDate?: string;
  endDate?: string;
  user?: User;
  home?: Home;
}
