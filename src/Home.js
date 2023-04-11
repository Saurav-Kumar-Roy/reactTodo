import Form from "./Form";
import TaskList from './TaskList';
import { useState} from "react";

function Home(){
    var [data,setData] = useState([
        {id:1,title:'t1',body:'task1',isDone:true},
        {id:2,title:'t2',body:'task2',isDone:false},
        {id:3,title:'t3',body:'task3',isDone:true}
      ]);

  
      const [title, setTitle] = useState('');
      const [body, setBody] = useState('');
      var [isDone, setisDone] = useState(false);
      const [id,setId] =useState(4);
      const [edit,setEdit] = useState(false);
      const [index,setIndex] = useState(-1);
  
    const EditData = (id) => {
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

    const SetT = (value)=>setTitle(value);
    const SetB = (value)=>setBody(value);
    const SetD = (value)=>setisDone(value);
    
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
            <Form title={title} body={body} isDone={isDone} CreateData={CreateData} SetT={SetT} SetB={SetB} SetD={SetD}/>
            {data && <TaskList data={data} EditData ={EditData} HandelDelete={HandelDelete}/>}
        </div>
        
    );
}

export default Home;