import {useState} from 'react';
import './App.css';
import {PeopleView} from './views/PeopleView.js'
function App() {
 
 
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
  
  const updateSource = (firstname,surname,title, id)=>{
  
    var person = people.find((person)=>person.id===id)
    person.firstname=firstname;
    person.surname=surname;
    person.title=title;
    // person.surname = value.surname;

    setR(!r);
    
  }



  return (
    <PeopleView/>
    // <div className="App">
     
    //  <div className=" full row" >
        
    //     {/* <div className="container half col" >
    //     {people.map((person)=>{
    //       return(
    //         <div key={person.id} className="form col">
    //           <h3>{person.title}</h3>
    //           <p>{person.firstname}</p>
    //           <p>{person.surname}</p>
    //         </div>
    //       )
    //     })}
    //     </div> */}

        
    //     <div className="container half col">
    //       <div className="button dif-button"><h2>Add person + </h2></div>
    //       <div className="vertical-scroll">
    //         <PeopleList  people={people} updateSource={updateSource}/>
    //       </div>
    //     </div>        
    //     <div className="container half col">
    //       <div className="vertical-scroll">

    //       </div>
    //     </div>
          
    //     </div>
    //   {/* <PersonForm firstname = {title} surname="nowak" title="mgr"/> */}
     
    // </div>
  );
}

export default App;
