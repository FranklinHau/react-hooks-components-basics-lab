import React from "react";

let name = "Liza"
let city = "New York"

function NavBar() {
  return (
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
    </nav>
  );
}

function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: 'firebrick'}}>
      {name} is a Web Developer from {city}
    </h1>
      
    </div>
  );
}

function Links(props) {
  return (
    <div>
      <h3>Links</h3>
      <div><a href={props.github}>https://github.com/liza</a></div>
      <div><a href={props.linkedin}>https://linkedin.com/in/liza/</a></div>
    </div>
  );
}

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <h4>I made this!</h4>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {props.bio && <p>{props.bio}</p>}
      <Links github={props.github} linkedin={props.linkedin} />
    </div> 
  )
}


function App() {
 const user = {
  name: "Liza",
  city: "New York"
 }
 const bio = "";
 const github = "https://github.com/liza";
 const linkedin = "https://linkedin.com/in/liza/";
  return (
    <div>
      <NavBar />
      <Home  user={user}/>
      <About bio={bio} github={github} linkedin={linkedin} /> 
    </div>
  );
}

export default App;
