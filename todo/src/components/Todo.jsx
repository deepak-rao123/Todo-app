import {useState,useEffect} from 'react'
// import { MdDeleteForever } from "react-icons/io";


export const Todo = () => {
    const[inputvalue,setInputValue] = useState("");
    const [task,setTask]= useState([])
    const [dateTime,setDateTime]= useState("")

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

  
    
      useEffect(()=>{
        const interval = setInterval(()=> {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString(); 
            setDateTime(`${formattedDate} - ${formattedTime}`) 
        },1000);
        return ()=> clearInterval(interval)
      },[]);

      const handleDeleteTodo = (value)=>{
        console.log(task)
        console.log(value)
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
                    <button className='delete-btn' onClick={()=>handleDeleteTodo(curTask)}>
                        {/* <MdDeleteForever/>  */}
                        d
                        </button>
                    </li>
            })
        }
    </ul>
</section>
<section className='clear-btn'onClick={handleClearTodoData} >Clear All</section>

  </section>
    
 
}
