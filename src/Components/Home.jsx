import Topnav from "./TopNav";
import ViewPets from "./ViewPets";
import { Link } from "react-router-dom";

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
