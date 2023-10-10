import { useRoutes } from "react-router-dom";
import { routers } from "../../routers";

function AllRouters() {
  return useRoutes(routers);
}
export default AllRouters;
