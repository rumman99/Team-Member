import React, { useState } from 'react';
import './member.css'

const Member = (props) => {
    const {first_name, last_name, email, photo, id}= props.perPerson;
    const name= first_name+' '+last_name;
    const clickPerson= props.personClick;

    const [mail, setmail]= useState('');

    const showMail= ()=>{
        setmail(email);
    }

    return (
        <div className='box'>
            <img src={photo} alt="" />
            <h4>Name: {name}</h4>
            <h4>ID: {id}</h4>
            <h5>Email: {mail}</h5>
            <button style={{marginRight:"10px", marginBottom:"5px"}} onClick={()=> clickPerson(props.perPerson)}>Add me</button>
            <button onClick={showMail}>View Email</button>
        </div>
    );
};

export default Member;