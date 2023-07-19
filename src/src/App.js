import {useState} from 'react';
import './App.css';
import {PeopleList} from './lists/PeopleList.js'
function App() {
  const [title, setTitle] = useState('welcome')
  const [likes, setLikes] = useState(50)

  function handleClick(){
    setLikes(likes + 1)
    console.log(likes)
  }
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
    <div className="App">
      <h1>{title}</h1>
      <h4>Liked {likes} times</h4>
      <button onClick ={handleClick} >
        Like +1
      </button>
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
        <PeopleList  people={people} updateSource={updateSource}/>
        </div>        
        <div className="container half col">
          
        </div>
          
        </div>
      {/* <PersonForm firstname = {title} surname="nowak" title="mgr"/> */}
     
    </div>
  );
}

export default App;
