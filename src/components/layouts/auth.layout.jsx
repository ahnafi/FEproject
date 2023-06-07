import { FormLogin, FormRegister } from "../form/auth.form";

function AuthLayout({auth}) {
  return (
    <section>
      <div className="container">
        <div className="w-full px-4 flex justify-center items-center h-screen">
          {auth == "login" ? 
          <FormLogin></FormLogin> :
          <FormRegister></FormRegister>
        }
        </div>
      </div>
    </section>
  );
}
export default AuthLayout;
