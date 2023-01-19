import React from 'react';

const Team = (props) => {
    const {first_name, last_name, id}= props.personName;
    const name= first_name+' '+last_name;
    return (
        <div>
            <p>Name: {name}</p>
            <p>ID: {id}</p>
        </div>
    );
};

export default Team;