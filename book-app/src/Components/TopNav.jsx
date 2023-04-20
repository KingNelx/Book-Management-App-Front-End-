const TopNav = () => {
    return (
        <div>
            <nav class="navbar bg-body-tertiary shadow-lg py-3">
                <div class="container-fluid">
                    <a class="navbar-brand">Book Management System</a>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default TopNav;