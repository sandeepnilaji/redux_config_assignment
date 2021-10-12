import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { addsucess, addload, adderr } from "../Allredux/todo/actions";

function Todos() {
  const [text, setText] = useState("");
  const { isloading, iserror } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  async function addtodo() {
    dispatch(addload());
    try {
      await axios.post("http://localhost:3004/todo", {
        titel: text,
        status: false,
      });
      dispatch(addsucess());
    } catch (err) {
      dispatch(adderr(err));
    }
  }

  return isloading ? (
    "Adding todo to list..."
  ) : iserror ? (
    "Error 404"
  ) : (
    <div>
      <div>TODO</div>
      <input
        type="text"
        placeholder="enter text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <button onClick={addtodo}>ADD</button>
      <Link to="/todo/list">
        <button>CHECK TODOS</button>
      </Link>
    </div>
  );
}

export default Todos;
