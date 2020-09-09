import React, { Component, useState } from "react";
import logo from "./logo.svg";
import sun from "./image/sun.png";
import moon from "./image/moon.png";
import "./App.css";

/**
 *  Class component Solution
 */

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { darkTheme: true };
//   }

//   render() {
//     return (
//       <>
//         <div
//           className={`main ${
//             this.state.darkTheme ? "main--dark-theme" : "main--light-theme"
//           }`}
//         >

//           <img src={this.state.darkTheme ? moon : sun} alt={this.state.darkTheme ? "moon" : "sun"} />
//           <h2>Good {this.state.darkTheme ? "Evening" : "Morning"}</h2>
//         </div>

//         <button onClick={() => this.setState({darkTheme: !this.state.darkTheme})}>
//           {this.state.darkTheme ? "light" : "dark"}
//         </button>
//       </>
//     );
//   }
// }

/**
 *  Functional component Solution
 */
function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <>
      <div
        className={`main ${
          darkTheme ? "main--dark-theme" : "main--light-theme"
        }`}
      >
        <img src={darkTheme ? moon : sun} alt={darkTheme ? "moon" : "sun"} />
        <h2>Good {darkTheme ? "Evening" : "Morning"}</h2>
      </div>
      <button onClick={() => setDarkTheme(!darkTheme)}>
        {darkTheme ? "light" : "dark"}
      </button>
    </>
  );
}

/**
 *  Functional component Solution
 * if/esle solution using useEffect
 */

// function App() {
//   const [darkTheme, setDarkTheme] = useState(true);

//   const [mainTheme, setMainTheme] = useState("main--dark-theme");
//   useEffect(() => {
//     if (darkTheme) {
//       setMainTheme("main--dark-theme");
//     } else {
//       setMainTheme("main--light-theme");
//     }
//   }, [darkTheme]);

//  return (
//    <>
//       <div className={`main ${mainTheme}`}> // Implemention of the useEffect method
//        <img src={darkTheme ? moon : sun} alt={darkTheme ? "moon" : "sun"} />
//        <h2>Good {darkTheme ? "Evening" : "Morning"}</h2>
//      </div>
//      <button onClick={() => setDarkTheme(!darkTheme)}>
//        {darkTheme ? "light" : "dark"}
//      </button>
//    </>
//  );
// }

export default App;
