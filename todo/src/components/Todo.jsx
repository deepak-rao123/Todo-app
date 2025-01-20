import {useState,useEffect} from 'react'
import { MdDelete } from "react-icons/md";



export const Todo = () => {
    const[inputvalue,setInputValue] = useState("");
    const [task,setTask]= useState(()=>{
        return JSON.parse(localStorage.getItem("task")) || []
    })

    useEffect(()=>{
        localStorage.setItem("task",JSON.stringify(task));
    },[task])

    const [dateTime,setDateTime]= useState("")

    const handleInputChange=(value)=>{
        setInputValue(value)
 
    }

    const handleFormSubmit =(e)=>{
        e.preventDefault();

        if(!inputvalue) return;

        if(task.includes(inputvalue)) return;

        setTask((prevTask)=> [...prevTask, inputvalue])

        setInputValue("")

    };

  
    
      useEffect(()=>{
        const interval = setInterval(()=> {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString(); 
            setDateTime(`${formattedDate} -  ${formattedTime}`) 
        },1000);
        return ()=> clearInterval(interval)
      },[]);

      const handleDeleteTodo = (value)=>{
        
        const updatedTask = task.filter((curTask)=> curTask !== value);
        setTask(updatedTask);
      }

      const handleClearTodoData = ()=>{
        setTask([]);
      };
     

  return <section className="todo-container">
<header>
    <h1>Todo List</h1>
    <h2 className='date-time'>{dateTime}</h2>
</header>
<section className="form">
    <form onSubmit={handleFormSubmit} >
        <div>
            <input type="text" className="todo-input"  value={inputvalue}
            onChange={(e)=>handleInputChange(e.target.value)
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
                    <button className='delete-btn' onClick={()=>handleDeleteTodo(curTask)}>
                        
                        <MdDelete/>
                        </button>
                    </li>
            })
        }
    </ul>
</section>
<section className='clear-btn'onClick={handleClearTodoData} >Clear All</section>

  </section>
    
 
}
