import {useState} from 'react'
import {PeopleList} from '../lists/PeopleList.js'
export const PeopleView = (props)=>{

    const [r, setR] = useState(false);
    const [people, setPeople] = useState([
    //   // new PersonModel("Adam","Nowak", "Mgr", 0), 
    //   // new PersonModel("Adam","Kowal", "Mgr", 1),
    //   // new PersonModel("Ewa","Nowak", "Dr", 2),
      // <PersonModel firstName="adam" surname="nowak" title="mgr" id={0} />,
      // <PersonModel firstName="ewa" surname="kowalska" title="dr" id={1}/>
  
  
      {firstname: "Adam",surname:"Nowak", title:"Mgr", id:0}, 
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
        newPeople.push({firstname: "",surname:"", title:"", id:iter})
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

          {/* <div className="container half col" >
          {people.map((person)=>{
            return(
              <div key={person.id} className="form col">
                <h3>{person.title}</h3>
                <p>{person.firstname}</p>
                <p>{person.surname}</p>
              </div>
            )
          })}
          </div> */}


          <div className="container half col">
            <div 
                className="button dif-button"
                onClick={addPerson}>
                <h2>Add person + </h2>
            </div>
            <div className="vertical-scroll">
              <PeopleList  people={people} updateSource={updateSource} delPerson={delPerson} addPerson={addPerson}/>
            </div>
          </div>        
          <div className="container half col">
            <div className="vertical-scroll">

            </div>
          </div>

          </div>
        {/* <PersonForm firstname = {title} surname="nowak" title="mgr"/> */}
      
      </div>
    );
}


