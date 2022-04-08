import "./App.css";
import logo from "./assets/campfire-logo-gng.png";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="logo" />
        <h2>Primitive Survival School</h2>
      </header>

      <form className="sign-up-form" autoComplete="off">
        <div className="input-field">
          <label htmlFor="first-name">First Name</label>
          <input type="text" name="firstName" id="first-name" />
        </div>

        <div className="input-field">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" name="lastName" id="last-name" />
        </div>

        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
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
          <input type="password" name="password" id="password" />
        </div>

        <div className="input-field">
          <label htmlFor="confirm-pass">Confirm Password</label>
          <input type="password" name="confirmPass" id="confirm-pass" />
        </div>

        <input
          type="submit"
          value="Create Account"
          className="submit-btn"
          disabled
        />

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
