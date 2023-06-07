import Navbar from "../components/navbar/Navbar";
import photo from "../assets/img/photo for project/erik-lucatero-d2MSDujJl2g-unsplash.jpg";

const Home = () => {
  function react(e) {
    e.target.classList.toggle("bg-blue-300");
  }
  const post = [1, 2, 3];
  return (
    <>
      <Navbar />
      <section id="home" className="bg-white">
        <div className="container">
          <div className="w-full max-w-xl px-4 py-2 flex justify-between items-center border-b ">
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
          <div className="flex flex-col mb-8">
            {post.map((a) => {
              return (
                <div key={a} className="max-w-xl my-2 bg-white">
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        At in eum vel sapiente. Nulla, porro quam. Reprehenderit
                        rem facilis sed adipisci optio aperiam numquam aut
                        debitis delectus eum, minima ex!
                      </p>
                      <img
                        src="https://source.unsplash.com/random/?fruit"
                        alt=""
                        className="w-full rounded-lg"
                      />
                    </div>
                    <div className="flex">
                      <button onClick={(e) => react(e)} className="btn-card">
                        👍
                      </button>
                      <button className="btn-card">💬</button>
                      <button className="btn-card">📋</button>
                    </div>
                  </div>
                </div>
              );
            })}
            {/*  */}
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
