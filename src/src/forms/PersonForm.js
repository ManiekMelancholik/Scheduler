import {useState} from 'react'

export  const  PersonForm = (props)=>{

    
    const [firstname, setFirstname] = useState(props.firstname)
    const [surname, setSurame] = useState(props.surname)
    const [title, setTitle] = useState(props.title)
    const [id, setId] = useState(props.id)

    const updateSource = props.updateSource
    

    const firstnameHandle = (val)=>{
        setFirstname(val.target.value)
        updateSource(val.target.value,surname,title, id)
    }
    const surnameHandle = (val)=>{
        setSurame(val.target.value)
        updateSource(firstname,val.target.value,title, id)
    }
    const titleHandle = (val)=>{
        setTitle(val.target.value)
        updateSource(firstname,surname,val.target.value, id)
    }
    
    return(
        <div className="form person-form col">
            <div className="input-with-label">
                <label>Name</label>
                <input className="firstname"
                    placeholder="Name"
                    name="firstName" 
                    value={firstname}
                    onChange={firstnameHandle} />
            </div>
            <div className="input-with-label">
                <label>Surname</label>
                <input className="surname"
                    placeholder="Surname"
                    name="surname" 
                    value={surname}
                    onChange={surnameHandle} />
            </div>
            <div className="input-with-label">
                <label>Title</label>
                <input className="title"
                    placeholder="Title"
                    name="title" 
                    value={title}
                    onChange={titleHandle} />
            </div>
            <div className="button">
                <h2>Constrains</h2>
            </div>
        </div>
    )


}