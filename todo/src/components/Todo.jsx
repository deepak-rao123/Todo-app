import {useState} from 'react'
// import { IoMdCheckmark,MdDeleteForever } from "react-icons/io";


export const Todo = () => {
    const[inputvalue,setInputValue] = useState("");
    const [task,setTask]= useState([])

    const handleInputChange=(value)=>{
        setInputValue(value)
 
    }

    const handleFormSubmit =(event)=>{
        event.preventDefault();

        if(!inputvalue) return;

        if(task.includes(inputvalue)) return;
        setTask((prevTask)=> [...prevTask, inputvalue])

        setInputValue("")

    };

  return <section className="todo-container">
<header>
    <h1>Todo List</h1>
</header>
<section className="form">
    <form onSubmit={handleFormSubmit} >
        <div>
            <input type="text" className="todo-input" autoComplete="off" value={inputvalue}
            onChange={(event)=>handleInputChange(event.target.value)
            } />
        </div>
        <div>
            <button type="submit" className="todo-btn">Add Task</button>
        </div>
    </form>
</section>

<section className='myUnOrdList'>
    <ul>
        {
            task.map((curTask,index)=>{
                return <li key={index} className='todo-item'>
                    <span>{curTask}</span>
                    {/* <button className='check-btn'><IoMdCheckmark/> </button>
                    <button className='delete-btn'><MdDeleteForever/> </button> */}
                    </li>
            })
        }
    </ul>
</section>

  </section>
    
 
}
