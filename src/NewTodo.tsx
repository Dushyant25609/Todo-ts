import { FC, useState } from "react";
import Button from "./Components/Button";
import Input from "./Components/Input";

type listProps = {
    doList : string[],
    setDoList : React.Dispatch<React.SetStateAction<string[]>>;
    setShowList: React.Dispatch<React.SetStateAction<boolean>>;
}


const NewTodo: FC<listProps> = ({doList,setDoList,setShowList}) =>{
    let [todo , setTodo] = useState<string>("");

    const handleTextChange = (input: string) => {
        let new_value = input;
        setTodo(new_value)
    }

    const saveTodo = (text:string) => {
        if( text.length <= 0) return;
        let newDoList = [...doList,text];
        setDoList(newDoList);
        setShowList(false);
    }

    const cancelTodo = () => {
        setShowList(false);
    }

    return (
        <div className="flex flex-col shadow-lg px-8 py-6 gap-4">
            <h1 className="text-lg font-semibold">Create a todo</h1>
            <Input type="text"  onChange={ (event) => handleTextChange(event.target.value) } placeholder="Write an article about XState" className="p-3 border border-slate-300 rounded-md" />
            <div className="flex gap-4">
                <Button onClick={() => saveTodo(todo)} >Save</Button>
                <Button onClick={cancelTodo} theme="secondary" >Cancel</Button>
            </div>
        </div>
    )
}

export default NewTodo;