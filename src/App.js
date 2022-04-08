import "./App.css";
import logo from "./assets/campfire-logo-gng.png";

function App() {
  const form = document.querySelector(".sign-up-form");
  const passWarning = document.querySelector(".pass-warning");

  const handleSubmit = (e) => {
    e.preventDefault();

    form.password.value === form.confirmPass.value
      ? passWarning.classList.remove("show")
      : passWarning.classList.add("show");
    !passWarning.classList.contains("show") && form.reset();
  };

  return (
    <div className="App">
      <header>
        <img src={logo} alt="logo" />
        <h2>Primitive Survival School</h2>
      </header>

      <form className="sign-up-form" autoComplete="off" onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            name="firstName"
            id="first-name"
            minLength={3}
            required
          />
        </div>

        <div className="input-field">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" name="lastName" id="last-name" required />
        </div>

        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>

        <div className="input-field">
          <label htmlFor="phone-number">Phone Number</label>
          <input type="text" name="phoneNumber" id="phone-number" />
        </div>

        <div className="input-field">
          <label htmlFor="survival-exp">Your Survival Experince</label>
          <select
            name="surivalExperience"
            id="survival-exp"
            defaultValue={"beginner"}
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>

        <div className="input-field">
          <label htmlFor="confirm-pass">Confirm Password</label>
          <input
            type="password"
            name="confirmPass"
            id="confirm-pass"
            required
          />
        </div>
        <p className="pass-warning">Passwords don't match</p>

        <input type="submit" value="Create Account" className="submit-btn" />

        <p>
          Already have an account? <a href="/">Log in</a>
        </p>
      </form>

      <footer>
        <p>
          Photo by{" "}
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://unsplash.com/@pacd_photography"
          >
            Caspian
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
