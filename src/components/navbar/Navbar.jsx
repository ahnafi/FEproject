import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  function logOutHandler(e){
    localStorage.removeItem("token")
    navigate("/login")
  }
  return (
    <header className="bg-white py-2 sticky top-0">
      <div className="container">
        <div className="px-4 flex justify-between items-center">
          <div className="">
            <a href="/" className="font-bold font-mono text-2xl text-slate-700">
              StartsY
            </a>
          </div>
          <nav className="">
            <button
              type="button"
              onClick={(e)=>logOutHandler(e)}
              className="bg-slate-700 px-4 py-2 text-white rounded-lg font-mono font-semibold text-lg"
            >
              Log out
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
