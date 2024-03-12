import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <main className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default AuthLayout;
