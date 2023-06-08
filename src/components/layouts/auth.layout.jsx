import { Link } from "react-router-dom";
import { FormLogin, FormRegister } from "../form/auth.form";

function AuthLayout({ auth }) {
  return (
    <section>
      <div className="container">
        <div className="w-full px-4 flex flex-col justify-center items-center h-screen">
          <h1 className="font-serif text-4xl font-bold py-2 text-slate-700 ">
            starstY
          </h1>
          {auth == "login" ? (
            <FormLogin></FormLogin>
          ) : (
            <FormRegister></FormRegister>
          )}
          {auth == "login" ? (
            <p className="py-2">
              dont have an account? try
              <Link to="/register" className="text-sky-500">
                {" "}
                Register
              </Link>
            </p>
          ) : (
            <p className="py-2">
              have an account? try
              <Link to="/login" className="text-sky-500">
                {" "}
                Login
              </Link>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
export default AuthLayout;
