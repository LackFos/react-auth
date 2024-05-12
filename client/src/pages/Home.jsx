const Home = () => {
  return (
    <main className="flex flex-col items-center min-h-screen justify-center">
      <h1>Home Page</h1>
      <nav>
        <a href="/login" className="text-sm underline text-blue-400">
          Login
        </a>
      </nav>
    </main>
  );
};

export default Home;
