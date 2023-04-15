import { useState } from "react";
import styled from "styled-components";
import {BsTrash} from "react-icons/bs"
import "../styles/Home.module.css"

export default function Home() {
  const [task, setTask] = useState("");
  const [tasklist, setTaskList] = useState([]);
  
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  
  const AddTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 100),
        value: task,
        isCompleted: false,
      };
  
      setTaskList([...tasklist, taskDetails]);
    }
  };
  
  const deletetask = (e, id) => {
    e.preventDefault();
    setTaskList(tasklist.filter((t) => t.id != id));
  };
  
  const taskCompleted = (e, id) => {
    e.preventDefault();
    const element = tasklist.findIndex((elem) => elem.id == id);
    const newTaskList = [...tasklist];

    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: true,
    };
  
    setTaskList(newTaskList);
  };
  
  return (

      <Container>

        <div>
          
        </div>

        <div>
          <Input
            className='task-input All Active'
            type="text"
            name="text"
            id="text"
            onChange={(e) => handleChange(e)}
            placeholder="add details"
          />
          <Button onClick={AddTask}>Add</Button>
          <br />
          {tasklist !== [] ? (
            <ul>
              {tasklist.map((t) => (
                <Li className={t.isCompleted ? "crossText Completed All Active" : "listitem"}>
                  <input
                    style={{marginRight: 5}}
                    onClick={(e) => taskCompleted(e, t.id)}
                    Completed
                    type={'checkbox'}

                  />       
                  {t.value}
                  
                  <button className="Completed delete" onClick={(e) => deletetask(e, t.id)}>
                    <BsTrash />
                  </button>
                </Li>
                
              ))}
            </ul>
          ) : null}
        </div>
      </Container>
  )

}

const Container = styled.div`
  width: 400px;
  margin: auto
` ;

const Input = styled.input`
  padding: 10px;
  width: 300px;
  margin-right: 7px;
  border-radius: 10px;
  border: 1.5px solid rgb(180, 180, 180);
`;

const Button = styled.button`
  padding: 10px;
  background-color: rgb(0, 162, 255);
  width: 70px;
  border: 1.5px solid rgb(0, 162, 255);
  border-radius: 10px;
  color: white;
  cursor: pointer;
`

const Li = styled.li`
  margin-top: 15px;
  list-style: none;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
`