import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./UserLayout.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUserWithCondition } from "../../services/users";
import { login } from "../../actions/login";
function UserLayout() {
  const loginValue = useSelector((state) => state.handleLogin);
  const dispatch = useDispatch();
  if (!loginValue.isLogin) {
    const tokenCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token"))
      ?.split("=")[1];
    if (tokenCookie) {
      const setUp = async () => {
        const info = await getUserWithCondition("token", tokenCookie);
        if (info) dispatch(login(info[0]));
      };
      setUp();
    }
  }
  return (
    <>
      <Header />
      <div className="session">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
export default UserLayout;
