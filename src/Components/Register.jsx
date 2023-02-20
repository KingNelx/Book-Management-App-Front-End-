const Register = () => {
  return (
    <div className="container mt-5">
      <form class="row g-3">
        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">
            Owner Name
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault01"
            required
          />
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">
            Pet Name
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault02"
            required
          />
        </div>
        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">
           Type of Pet
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault01"
            required
          />
        </div>

        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">
            Pet Gender
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault01"
            required
          />
        </div>

        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault01"
            required
          />
        </div>

        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">
            Pet Age
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault01"
            required
          />
        </div>

        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">
          Has Vaccine
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault01"
            required
          />
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
