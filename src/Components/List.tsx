import Input from './Input'
import React,{FC} from 'react'

type List = {
    doList : string[] ,
    setDoList : React.Dispatch<React.SetStateAction<string[]>>;
    doneList : string[] ,
    setDoneList : React.Dispatch<React.SetStateAction<string[]>>;
    checked: boolean,
    text: string
}




const DoList: FC<List> = ({doList,setDoList,doneList,setDoneList,checked,text}) => {
  const handleChange = (check: boolean, text: string) => {    
    if (check) {
      const index = doList.indexOf(text);
      if (index !== -1) {
        const newDoList = [...doList];
        const newDoneList = [...doneList, doList[index]];

        newDoList.splice(index, 1);

        setDoList(newDoList);
        setDoneList(newDoneList);
      }
    }
    else{
      const index = doneList.indexOf(text);
      if (index !== -1) {
        const newDoneList = [...doneList];
        const newDoList = [...doList, doneList[index]];

        newDoneList.splice(index, 1);

        setDoneList(newDoneList);
        setDoList(newDoList);
      }
    }
  };
  return (
    <div className="flex gap-4">
        <Input type="checkbox" checked={checked} onChange={(event) => handleChange(event.target.checked, text) } />
        <p>{text}</p>
    </div>
  )
}

export default DoList;