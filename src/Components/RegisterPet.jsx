const RegisterPet = () => {
    return (
        <div className="container mt-5 col-md-4">
            <form>
                <div class="mb-3">
                    <label class="form-label">Pet Name</label>
                    <input type="text" class="form-control" />
                </div>

                <div class="mb-3">
                    <label class="form-label">Name of Owner</label>
                    <input type="text" class="form-control" />
                </div>

                <div class="mb-3">
                    <label class="form-label">Pet Age</label>
                    <input type="text" class="form-control" />
                </div>

                <div class="mb-3">
                    <label class="form-label">Type of Pet</label>
                    <input type="text" class="form-control" />
                </div>

                <div class="mb-3">
                    <label class="form-label">Pet Gender</label>
                    <input type="text" class="form-control" />
                </div>

                <div class="mb-3">
                    <label class="form-label">Address</label>
                    <input type="text" class="form-control" />
                </div>

                <button type="submit" class="btn btn-primary">Register</button>
            </form>
        </div>
    );
}

export default RegisterPet;