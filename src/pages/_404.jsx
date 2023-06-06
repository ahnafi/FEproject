function NotFound() {
  return (
    <div className="flex justify-center items-center w-screen min-h-screen">
      <div className="container">
        <div className="text-center">
          <h1 className="font-serif font-bold text-5xl animate-pulse transition-opacity duration-75 text-red-600">
            ERROR <br />
            404 <br />
            PAGE NOT FOUND
          </h1>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
