const Dashboard = () => {
  return (
    <main className="flex flex-col items-center min-h-screen justify-center">
      <h1>Dashboard</h1>
      <nav>
        <ol className="text-sm">
          <span>Back to </span>
          <a href="/" className="text-sm underline text-blue-400">
            Home
          </a>
        </ol>
      </nav>
    </main>
  );
};

export default Dashboard;
