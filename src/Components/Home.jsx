import Topnav from "./TopNav";
import ViewPets from "./ViewPets";

const Home = () => {
  return (
    <div>
      <nav>
        <Topnav />
      </nav>

      <section>
        <ViewPets />
      </section>
    </div>
  );
};

export default Home;
