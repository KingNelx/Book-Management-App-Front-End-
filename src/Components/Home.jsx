import PetsTable from "./PetsTable";


const Home = () => {
    return (
        <div>
            <nav class="navbar bg-body-tertiary shadow-lg">
                <div class="container-fluid">
                    <a class="navbar-brand">Pet's are AWESOME</a>
                </div>
            </nav>
            <PetsTable />
        </div>
    );
}

export default Home;