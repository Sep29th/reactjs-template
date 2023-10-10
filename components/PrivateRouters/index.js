import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRouters() {
  const loginValue = useSelector((state) => state.handleLogin);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (loginValue) {
      setIsReady(true);
    }
  }, [loginValue]);

  return (
    <>
      {isReady && (loginValue.isLogin ? <Outlet /> : <Navigate to={"/404"} />)}
    </>
  );
}

export default PrivateRouters;
