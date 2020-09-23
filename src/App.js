import React from 'react'; 
import Header from "./components/header/Header";
import Person from "./components/Person/Person";
import People from './components/People/People';


function App() { 
  return (
    <>
      <Header>
      </Header>
      <People>
        <Person name="Eli Webb" interests="Webdev">
        </Person>
        <Person name="Eli Webb" interests="Webdev">
        </Person> 
        <Person name="Eli Webb" interests="Webdev">
        </Person> 
      </People>
    </>
  );
}

export default App;
