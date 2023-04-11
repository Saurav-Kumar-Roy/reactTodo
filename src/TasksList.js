import { useState } from "react";
import Edit from "./edit";

function TasksList({data,HandelDelete,HandelUpdate,CreateData}){
    const [isEdit,setIsEdit] = useState(false);

    return(
        <div>
            {data.map(task => (
                <div key={task.id} style={{ display: "flex" }}>
                    <div style={{ backgroundColor: "red", width: "50%"}}>
                        <h2>{task.name}</h2>
                        <p>{task.detals}</p>
                        {task.isDone}<p>done</p>
                        <button onClick={()=>{HandelDelete(task.id)}}>delete</button>
                        <button onClick={()=>{useIsEdit(!data.isEdit)}}>edit</button> 
                    </div>
                    <div style={{ backgroundColor: "blue", width: "50%" }}>
                        { isEdit && <Edit data={data} HandelUpdate={HandelUpdate}/>}
                    </div>
                    
                    
                </div>
            ))}
        </div>
    )


}

export default TasksList;