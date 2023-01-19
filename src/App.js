import logo from './logo.svg';
import './App.css';
import Mock_DATA from "./MOCK_DATA.json"
import { useEffect, useState } from 'react';
import Member from './Components/Member/Member';
import Team from './Components/Team/Team';

function App() {
  const [person, setPerson]= useState([]);

  const [addPerson, setaddPerson]= useState([]);

  const personClick= (addMe)=>{
    const addTeam= [...addPerson, addMe]
    setaddPerson(addTeam);
  }

  useEffect( ()=> {
    setPerson(Mock_DATA);
  }, []);

  return (
    <div >
      <h1>Team-Member</h1>
      {
      addPerson.map( personName => <Team personName={personName}></Team>)
      }

      {
      person.map(perPerson => <Member perPerson={perPerson} personClick={personClick}></Member>)
      }
    </div>
  );
}

export default App;
