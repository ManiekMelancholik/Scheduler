import {useState} from 'react'
import {WeekList} from '../lists/WeekList.js'
import {PeopleList} from '../lists/PeopleList.js'
import {BoxSelect} from '../utils/BoxSelect.js'
export const PeopleView = (props)=>{

    const [r, setR] = useState(false);
    const [people, setPeople] = useState([
      {firstname: "Adam",surname:"Nowak", title:"Mgr", id:0, }, 
      {firstname: "Ewa",surname:"Kowalsa", title:"Mgr", id:1}, 
      {firstname: "Anna",surname:"Bronowicka", title:"Dr", id:2}, 
      {firstname: "Adam",surname:"Nowak", title:"Mgr", id:3}, 
      {firstname: "Ewa",surname:"Kowalsa", title:"Mgr", id:4}, 
      {firstname: "Anna",surname:"Bronowicka", title:"Dr", id:5}, 
      {firstname: "Adam",surname:"Nowak", title:"Mgr", id:6}, 
      {firstname: "Ewa",surname:"Kowalsa", title:"Mgr", id:7}, 
      {firstname: "Anna",surname:"Bronowicka", title:"Dr", id:8}, 
    ])
    const [iter, setIter] = useState(people.length)

    const updateSource = (firstname,surname,title, id)=>{
  
        var person = people.find((person)=>person.id===id)
        person.firstname=firstname;
        person.surname=surname;
        person.title=title;
        // person.surname = value.surname;
    
        setR(!r);
    }
    const addPerson = ()=>{
        const newPeople = people;
        newPeople.push({firstname: "",surname:"", title:"", id:iter, constrains:[]})
        setPeople(newPeople)
        console.log(people)
        setIter(iter+1);
        setR(!r)
    }
    const delPerson = (id)=>{
        console.log(id)
        const newPeople = people.filter((person)=>{return(person.id!==id)})

        setPeople(newPeople)
        console.log(people)
        setR(!r)
    }
    return (
      <div className="App">
    
       <div className=" full row" >

          <div className="container half col">
          <div className="uppScroll">
              <div className="button dif-button"
                  onClick={addPerson}>
                  <h2>Add person + </h2>
              </div>
            </div>
            <div className="vertical-scroll">
              <PeopleList  people={people} updateSource={updateSource} delPerson={delPerson} addPerson={addPerson}/>
            </div>
          </div>        
          <div className="container half col">
          <div className="uppScroll">
            <h1>WEEK</h1>
          </div>
            
            <div className="vertical-scroll">
              <BoxSelect>
                  <WeekList/>
              </BoxSelect>
            </div>
          </div>

          </div>

      </div>
    );
}


