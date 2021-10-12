import { useSelector, useDispatch } from "react-redux";
import { setLight, setDark } from "./reducers";
import "./App.css";
import profile from "./nandu.jpg";
function App() {
  const skills = [
    "html",
    "css",
    "javascript",
    "react-js",
    "next-js",
    "python",
    "django",
    "mysql",
    "mongo-db",
  ];

  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  return (
    <div className={`body-${theme}`}>
      <div className="theme-btns">
        <button
          className={`theme-btn-${theme === "light" && "light"}`}
          onClick={() => dispatch(setLight())}
        >
          Light Theme
        </button>
        <button
          className={`theme-btn-${theme === "dark" && "dark"}`}
          onClick={() => dispatch(setDark())}
        >
          Dark Theme
        </button>
      </div>
      <div className={`card-body-${theme}`}>
        <img src={profile} alt="profileImage" className="profile" />
        <hr className={`border-${theme}`} />
        <h2>Nandu</h2>
        <div className="skills-container">
          <div className="profession">
            <h4>Profession</h4>
            <p>Fullstack Web Developer</p>
          </div>
          <h4>Skills</h4>
          <div className="skills">
            {skills.map((skill) => (
              <p className={`pills-${theme}`}>{skill}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
