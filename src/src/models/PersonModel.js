import {useState} from 'react';

export const PersonModel = (props)=> {

    const [firstname, setFirstname] = useState(props.firstname)
    const [surname, setSurame] = useState(props.surname)
    const [title, setTitle] = useState(props.title)
    const [id, setId] = useState(props.id)
    const [setName, setSetName] = useState(
    (val)=>{
        this.setFirstname(val);
    })
    return(this)
    // constructor(firstname, surname, title, id) {
    //   this.firstname = firstname;
    //   this.surname = surname;
    //   this.title = title;
    //   this.id = id;
    // }
    // get firstName(){return (this.firstName)}
    // get surname(){return(this.surname)}
    // get title(){return(this.title)}
    // get id(){return(this.id)}

    // set firstName(firstName){this.firstName=firstName}
    // set surname(surname){this.surname = surname}
    // set title(title){this.title=title}
    // set id(id){this.id=id}
}