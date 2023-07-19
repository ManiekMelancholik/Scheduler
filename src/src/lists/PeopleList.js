import {useState} from 'react'
import {PersonForm} from '../forms/PersonForm.js'

export  const  PeopleList = (props)=>{

    // const [people, setPeople] = useState(props.people)
    
    const [selected, setSelected] = useState(-1);
    const updateSource = props.updateSource

    const delPerson = props.delPerson
    const addPerson = props.addPerson
    // const delPer = (id)=>{
    //     const newPeople = people.filter((person)=>{return(person.id!==id)})
                    
    //     setPeople(newPeople)
    // }

    const select = (id)=>{
        setSelected(id)
    }
    const {people} = props
    return(
        
        <div className="center-holder">
            
            <div className="list people-list">
            
            {people.map((person)=>{
                return(
                    <div className="selectable-item deletable-item"
                    key={person.id} sel={person.id===selected?"a":"b"}>
                    
                    <span 
                        className="delete-x" 
                        onClick={()=>{
                            delPerson(person.id)
                            // delPer(person.id)
                            
                        }}>
                        x
                    </span> 
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
            <div className="form person-form">
                <div 
                    className="button dif-button"
                    onClick={addPerson}
                    >
                    
                    <h2>Add person + </h2>
                </div>    
            </div>
            </div>
            
        </div>



    )


}
