import React , { useState} from "react"

function TodoList(){

    const [tasks, setTasks] = useState(["eat" , "sleep" , "grind"]);
    const [newTask, setNewTask] = useState("");

    function handleInput(event){
            setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim()!=="")  {
            setTasks(t =>[...t, newTask]);
            setNewTask(" ");
        }
       
    }

    function deleteTask(index){
        const updatedTask = tasks.filter((_,i) => i !== index);
        setTasks(updatedTask)

    }


    function moveTaskUp(index){
        if(index>0){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index-1]] = 
            [updatedTask[index-1] ,updatedTask[index]];
            setTasks(updatedTask);
        }

    }


    function moveTaskDown(index){

        if(index< tasks.length -1){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index+1]] = 
            [updatedTask[index+1] ,updatedTask[index]];
            setTasks(updatedTask);
        }

    }
    return (<div className="to-do-list">

        <h1>To-Do-List</h1>

        <div>
            <input 
                type="text"
                placeholder="Enter a task"
                value={newTask}
                onChange={handleInput}/>
            <button
                className="add-button"
                onClick={addTask}>add</button>
        </div>

        <ol>
            {tasks.map((task, index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button 
                        className="delete-button"
                        onClick={()=> deleteTask(index)}>
                        Delete 
                    </button>
                    <button 
                        className="move-button"
                        onClick={()=> moveTaskUp(index)}>
                        up
                    </button>
                    <button 
                        className="move-button"
                        onClick={()=> moveTaskDown(index)}>
                        down
                    </button>
                </li>
            ) }
        </ol>
    </div>)
}
export default TodoList