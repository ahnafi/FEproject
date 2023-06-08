import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export function FormLogin() {
  const navigate = useNavigate();
  const username = useRef(null);
  useEffect(() => {
    username.current.focus();
  }, []);
  function submitHandler(e) {
    e.preventDefault();
    const dbUser = localStorage.getItem("username");
    const dbPw = localStorage.getItem("password");
    const user = e.target.username.value;
    const pw = e.target.password.value;
    if (user == dbUser && pw == dbPw) {
      localStorage.setItem("token", 69);
      navigate("/");
    } else {
      alert("username or password doesnt match");
    }
  }
  return (
    <div className="w-full max-w-sm">
      <form action="" onSubmit={(e) => submitHandler(e)}>
        <label htmlFor="username">Username</label>
        <input
          ref={username}
          type="text"
          name="username"
          id="username"
          autoComplete="off"
          className="block px-4 py-2 border rounded-lg w-full"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="block px-4 py-2 border rounded-lg w-full"
        />
        <button
          type="submit"
          className="w-full bg-slate-500 text-white px-4 py-2 mt-2 rounded-lg hover:bg-slate-400 font-mono font-bold text-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
}
export function FormRegister() {
  const navigate = useNavigate()
  const username = useRef(null);
  useEffect(() => {
    username.current.focus();
  }, []);
  function submitHandler(e) {
    e.preventDefault();
    const user = e.target.username.value;
    const pw = e.target.password.value;
    const pw2 = e.target.confirm.value;
    if (pw == pw2) {
      localStorage.setItem("username", user);
      localStorage.setItem("password", pw);
      navigate("/login")
    } else {
      alert("password doesnt match");
    }
  }
  return (
    <div className="w-full max-w-sm">
      <form action="" onSubmit={(e) => submitHandler(e)}>
        <label htmlFor="username">Username</label>
        <input
          ref={username}
          type="text"
          name="username"
          id="username"
          autoComplete="off"
          className="block px-4 py-2 border rounded-lg w-full"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="block px-4 py-2 border rounded-lg w-full"
        />
        <label htmlFor="password">Confirm Password</label>
        <input
          type="password"
          name="confirm"
          id="confirm"
          className="block px-4 py-2 border rounded-lg w-full"
        />
        <button
          type="submit"
          className="w-full bg-slate-500 text-white px-4 py-2 mt-2 rounded-lg hover:bg-slate-400 font-mono font-bold text-lg"
        >
          Register
        </button>
      </form>
    </div>
  );
}
