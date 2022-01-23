import { Home } from "./home";
import { StatusHome } from "./status-home";

export interface HomeTime {
  id?: string;
  date?: string;
  home?: Home;
  statusHome?: StatusHome;
}
