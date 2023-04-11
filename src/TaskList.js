function TaskList({data,EditData,HandelDelete}){
    return(
        <div>
            {data.map(task => (
            <div key={task.id}>
                <hr/>
                <h2>{task.title}</h2>
                <p>{task.body}</p>
                {task.isDone&& <p>done</p>}
                {!task.isDone&& <p>pending</p>}
                <button onClick={()=>{HandelDelete(task.id)}}>delete</button>
                <button onClick={()=>{EditData(task.id);}}>edit</button>
            </div>
            ))}
            <hr/>
        </div>
    );
}

export default TaskList;