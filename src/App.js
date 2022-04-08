import "./App.css";
import logo from "./assets/campfire-logo-gng.png";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h2>Primitive Survival School</h2>
      </div>

      <form className="sign-up-form">
        <div className="input-field">
          <label htmlFor="">First Name</label>
          <input type="text" name="firstName" id="" />
        </div>
        <div className="input-field">
          <label htmlFor="">Last Names</label>
          <input type="text" name="lastName" id="" />
        </div>
        <div className="input-field">
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="" />
        </div>
        <div className="input-field">
          <label htmlFor="">Phone Number</label>
          <input type="text" name="" id="" />
        </div>
        <div className="input-field">
          <label htmlFor="">Your Survival Experince</label>
          <select name="surival-experience" id="">
            <option value="beginner" selected>
              Beginner
            </option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <div className="input-field">
          <label htmlFor="">Password</label>
          <input type="password" name="" id="" />
        </div>
        <div className="input-field">
          <label htmlFor="">Confirm Password</label>
          <input type="password" name="" id="" />
        </div>

        <button type="submit" className="submit-btn">
          Create Account
        </button>

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
