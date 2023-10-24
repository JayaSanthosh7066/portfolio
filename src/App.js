import "./App.css";
import Header from "./components/Header";
import Content from "./components/content";
import About from "./components/about";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <About />
      <Contact />
    </div>
  );
}

export default App;
// import React from "react";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>My Portfolio</h1>
//         <p>Welcome to my portfolio website!</p>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Projects</li>
//           <li>Contact</li>
//         </ul>
//       </header>
//       <section className="content">
//         <h2>About Me</h2>
//         <p>
//           Hello! I am John Doe, a passionate web developer. I love creating
//           responsive and user-friendly websites.
//         </p>
//         <h2>Projects</h2>
//         <p>Here are some of my projects:</p>
//         <ul>
//           <li>Project 1: Description of project 1</li>
//           <li>Project 2: Description of project 2</li>
//           <li>Project 3: Description of project 3</li>
//         </ul>
//         <h2>Contact Me</h2>
//         <p>Email: john.doe@example.com</p>
//         <p>Phone: 123-456-7890</p>
//       </section>
//     </div>
//   );
// }

// export default App;
