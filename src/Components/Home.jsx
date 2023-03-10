import HomeTopNav from "./HomeTopNav";
import ViewData from "./ViewData";

const Home = () => {
    return ( 
        <div>
            
            <nav>
                <HomeTopNav />
            </nav>

            <section>
                <ViewData />
            </section>

        </div>
     );
}
 
export default Home;