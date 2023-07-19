import {useState} from 'react'
import {PersonForm} from '../forms/PersonForm.js'

export  const  PeopleList = (props)=>{

    const [people, setPeople] = useState(props.people)
    const [selected, setSelected] = useState(-1);
    const updateSource = props.updateSource
    const select = (id)=>{
        setSelected(id)
    }
    return(
        <div className="list people-list">
        {people.map((person)=>{
            return(
                <div className="selectable-item" 
                key={person.id} sel={person.id===selected?"a":"b"}>
                <PersonForm 
                    firstname={person.firstname}
                    surname={person.surname}
                    title={person.title}
                    id={person.id}
                    updateSource={updateSource}
                    select={select}
                    />
                </div>
            )
        })}
        </div>


    )


}
