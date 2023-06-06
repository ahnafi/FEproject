import Navbar from "../fragments/navbar/Navbar";
import photo from "../assets/img/photo for project/erik-lucatero-d2MSDujJl2g-unsplash.jpg";

const Home = () => {
  function react(e) {
    e.target.classList.toggle("bg-blue-300");
  }
  return (
    <>
      <Navbar />
      <section id="home" className="pt-16">
        <div className="container bg-slate-200">
          <div className="w-full px-4 py-1 flex justify-between items-center">
            <a href="" className="">
              <img
                src={photo}
                alt="profile"
                className="h-10 w-10 rounded-full object-cover"
              />
            </a>
            <form action="">
              <input
                type="text"
                name="post"
                id="post"
                placeholder="Apa yang anda pikirkan"
                className="px-4 py-2 rounded-lg"
              />
            </form>
          </div>
        </div>
        <div className="flex flex-col">
          {/*  */}
          <div className="container my-2 bg-slate-100">
            <div className="px-4 py-2">
              <div className="flex gap-2">
                <img
                  src={photo}
                  alt="person"
                  className="h-10 w-10 object-cover rounded-full"
                />
                <h1 className="font-bold">Bocil legend </h1>
              </div>
              <div className="py-2">
                <p className="py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At in
                  eum vel sapiente. Nulla, porro quam. Reprehenderit rem facilis
                  sed adipisci optio aperiam numquam aut debitis delectus eum,
                  minima ex!
                </p>
                <img
                  src="https://source.unsplash.com/random/?fruit"
                  alt=""
                  className="w-full rounded-lg"
                />
              </div>
              <div className="flex">
                <button
                  onClick={(e) => react(e)}
                  className="bg-white px-4 py-2 w-full border hover:bg-slate-100 active:scale-125"
                >
                  👍
                </button>
                <button className="bg-white px-4 py-2 w-full border hover:bg-slate-100 active:scale-125">
                  💬
                </button>
                <button className="bg-white px-4 py-2 w-full border over:bg-slate-100 active:scale-125">
                  📋
                </button>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="container my-2 bg-slate-100">
            <div className="px-4 py-2">
              <div className="flex gap-2">
                <img
                  src={photo}
                  alt="person"
                  className="h-10 w-10 object-cover rounded-full"
                />
                <h1 className="font-bold">Bocil legend </h1>
              </div>
              <div className="py-2">
                <p className="py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At in
                  eum vel sapiente. Nulla, porro quam. Reprehenderit rem facilis
                  sed adipisci optio aperiam numquam aut debitis delectus eum,
                  minima ex!
                </p>
                <img
                  src="https://source.unsplash.com/random/?fruit"
                  alt=""
                  className="w-full rounded-lg"
                />
              </div>
              <div className="flex">
                <button
                  onClick={(e) => react(e)}
                  className="bg-white px-4 py-2 w-full border hover:bg-slate-100 active:scale-125"
                >
                  👍
                </button>
                <button className="bg-white px-4 py-2 w-full border hover:bg-slate-100 active:scale-125">
                  💬
                </button>
                <button className="bg-white px-4 py-2 w-full border over:bg-slate-100 active:scale-125">
                  📋
                </button>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </section>
    </>
  );
};
export default Home;
