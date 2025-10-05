//import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";

//To run the app
//npm install
//npm start to run the app
//npm run build to create a build folder for deployment
//npx serve -s build to run the build folder
//JSX - JavaScript XML
//JSX is not HTML
//className in place of class
//htmlFor in place of for
//Comments in JSX {/* */}
//Fragment - <> </>
//Components - Function returning JSX
//Props - Properties passed from one component to another
//Props are read only
//State - A way to manage data in a component
//Hooks - Special functions to use state and other features in functional components
//useState - A hook to manage state in a functional component
//React Router - A library to manage routing in a React application
//Single Page Application - A web application that loads a single HTML page and dynamically updates the content as the user interacts with the app
//SPA - Single Page Application
//npx create-react-app app-name to create a new React application
//Bootstrap - A CSS framework for building responsive and mobile-first websites
//React Bootstrap - A library that provides Bootstrap components as React components
//Accordion - A Bootstrap component that allows the user to toggle the visibility of content
// import About from './components/about';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
// let name = "Utkarsh Saxena";

  // return (
  //   //jsx code
  //   <div classNameName="App">
  //     <header classNameName="App-header">
  //       <img src={logo} classNameName="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         classNameName="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React with Utkarsh.
  //       </a>
  //     </header>
  //   </div>
  // );
    //       <nav>
//         <li><a href="/">Home</a></li>
//         <li><a href="/">About</a></li>
//         <li><a href="/">Contact</a></li>
//       </nav>
//         <div classNameName="container">
//           <h1>Hello {name}</h1>
//           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque magni aliquid consequuntur adipisci quam repellendus veniam. Exercitationem aperiam alias eaque molestiae? Temporibus optio est numquam animi ut pariatur laboriosam in.</p>
//         </div>
//     </>
//     // <div classNameName="blank">Lovely</div>
//   )

function App() {
  const [mode, setMode] = useState('light'); // light or dark mode
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removeBodyClasses = () => { // to remove all the bg- classes from body
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-secondary');
  }
  const toggleMode = (cls) => {
     if (!cls || typeof cls !== 'string') {
    cls = 'dark';
  }
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-' + cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      setInterval(() => {
        document.title = "TextUtils is Amazing Mode";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils Now";
      }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
    {/* <Navbar title ="TextUtils2" aboutText="About TextUtils2"/> */}
        <Navbar title="TextUtils"  aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* /users --> Component 1
            /users/home --> Component 2 */}
            <Route path="/about" element={<About mode={mode} />} />
            <Route
              path="/"
              element={<TextForm showAlert={showAlert} heading="TextUtils - Word Counter | Character Counter | Remove Extra Spaces" />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;