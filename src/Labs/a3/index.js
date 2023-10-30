import Classes from "./Classes";
import Add from "./Add";
import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./todo/TodoList";
import { useSelector } from "react-redux"; 
function Assignment3() {
  const { todos } = useSelector((state) => state.todosReducer);
 return (
   <div>
     <h1>Assignment 3</h1>
     <TodoList/>
     <ConditionalOutput/>
     <Styles/>
     <Classes/>
     <JavaScript/>
     <PathParameters/>  
     <Add/>
     <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
   </div>
 );
}
export default Assignment3;