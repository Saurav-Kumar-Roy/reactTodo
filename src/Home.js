import { useEffect, useState, memo } from "react";



function Home(){
    var [data,setData] = useState([
      {id:1,title:'t1',body:'task1',isDone:true},
      {id:2,title:'t2',body:'task2',isDone:false},
      {id:3,title:'t3',body:'task3',isDone:true}
    ]);

    useEffect(()=>{
      console.log(data)
    },[data]);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    var [isDone, setisDone] = useState(false);
    const [id,setId] =useState(4);
    const [edit,setEdit] = useState(false);
    const [index,setIndex] = useState(-1);

    const EditeData = (id) => {
      setEdit(true);
      var taskIndex = data.findIndex(obj => obj.id === id);
      setIndex(taskIndex);

      if (taskIndex !== -1) {
        // Update the title property of the object at the given index
        setTitle(data[taskIndex].title);
        setBody(data[taskIndex].body);
        setisDone(data[taskIndex].isDone);
      }
  }
  
  const HandelDelete = (id) =>{
      data = data.filter(obj => obj.id!==id);
      setData(data);
  } 
  
  const CreateData = (e)=>{
    e.preventDefault();
    if (isDone ==='true')isDone=true;
    else isDone=false;
    if (edit){
      data[index].title = title;
      data[index].body = body;
      data[index].isDone = isDone;
      setEdit(false);
      setIndex(-1); 
    }
    else{
      
      console.log(isDone);
      const newData = {id,title,body,isDone} ;
      setId(id+1);
      var data2 =[...data,newData];      
      setData(data2);
    }
    
    setTitle('');
    setBody('');
    setisDone(false);

  }

  return(
    <div>
      <form>
      <div>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
        />
      </div>
      <div>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="body"
        ></textarea>
      </div>
      <div>
        <select
          value={isDone}
          onChange={(e) => setisDone(e.target.value)}
        >
          <option value={false}>pending</option>
          <option value={true}>done</option>
        </select>
        <button onClick={CreateData}>Add</button>
      </div>
        
      </form>

      {data.map(task => (
        <div key={task.id}>
        <hr/>
        <h2>{task.title}</h2>
        <p>{task.body}</p>
        {task.isDone&& <p>done</p>}
        {!task.isDone&& <p>pending</p>}
        <button onClick={()=>{HandelDelete(task.id)}}>delete</button>
        <button onClick={()=>{EditeData(task.id);}}>edit</button>
        </div>
      ))}
      <hr/>
    </div>
    );
  

}

export default Home;