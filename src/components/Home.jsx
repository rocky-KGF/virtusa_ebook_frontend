const Home = () => {
  return <h1>{localStorage.getItem("user")}</h1>;
};

export default Home;
