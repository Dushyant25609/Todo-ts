import { useState } from "react";
import Button from "./Button"
import DoList from "./List";
import NewTodo from "./NewTodo";



const Todo = () => {
    let [doList, setDoList] = useState<string[]>(["Clean my computer","buy a keyboard"]);
    let [doneList, setDoneList] = useState<string[]>(["Write an article about @xstate/test"]);
    let [showList, setShowList] = useState(false);
    
    const handleShow = () => {
        setShowList(!showList);
    }

    const handleRefresh = () => {
        let newDoneList = [...doneList, "Todo created by another user"];
        setDoneList(newDoneList);
    }

  return (
    <div className="md:self-center md:w-11/12 py-12 px-2 flex flex-col gap-4">

      <div className="flex flex-col items-start gap-4 md:flex-row justify-between">
        <h1 className="font-bold text-3xl lg:text-4xl" >Things to get Done</h1>
        <Button onClick={handleRefresh} >Refresh</Button>
      </div>

      <p>Things to Do</p>

      {doList.map( (item,index)=>{
        return <DoList
        doList={doList}
        setDoList={setDoList}
        doneList={doneList}
        setDoneList={setDoneList}
        checked={false}  
        text ={item}
        key={index}      
      />
      } )}
      
      {!showList && <Button onClick={handleShow} theme="Rounded" className="self-start" >+ Add a todo</Button>}
      
      {showList && <NewTodo doList={doList} setDoList={setDoList} setShowList={setShowList} />}
      
      <p>Things Done</p>

      {doneList.map( (item,index)=>{
        return <DoList
        doList={doList}
        setDoList={setDoList}
        doneList={doneList}
        setDoneList={setDoneList}
        checked={true}  
        text ={item}
        key={index}      
      />
      } )}
    </div>
  )
}

export default Todo;