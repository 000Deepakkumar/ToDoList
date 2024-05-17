import React, { useState } from "react"
import "./ToDoList.css"
function ToDoList() {
    const [lists, setList] = useState(["Thanks for Checking my Project","Please like my Project","And You can also Share It"])
    const [newtask, setTask] = useState("")
    const todolist = lists.map((list, index) =>
        <li key={index}>
            <span className="text">{list}</span>
            <button className="delete-button" onClick={() => deleteList(index)}>Delete</button>
            <button className="move-button" onClick={()=>moveListUp(index)}>⬆️</button>
            <button className="move-button" onClick={()=>moveListDown(index)}>⬇️</button>
        </li>)

    function handleEventChange(event) {
        setTask(event.target.value)
    }
    function handleAddList() {
        if (newtask.trim() != "")
            setList(l => [...l, newtask]);
        setTask("");
    }
    function deleteList(index) {
        setList(lists.filter((_, i) => i !== index))
    }
    function moveListUp(index) {
        if (index > 0) {
            const update = [...lists];
            [update[index], update[index - 1]] =
                [update[index - 1], update[index]];
            setList(update)
        }
    }
    function moveListDown(index) {
        if (index < lists.length - 1) {
            const update = [...lists];
            [update[index], update[index + 1]] =
                [update[index + 1], update[index]];
            setList(update)
        }
    }

    return (
        <div className="container">
            <h1>ToDoList</h1>
            <input type="text" value={newtask} onChange={handleEventChange} placeholder="Enter Your Task" />
            <button onClick={handleAddList} className="add-button">Add</button>
            <ul>{todolist}</ul>
        </div>
    )
}
export default ToDoList