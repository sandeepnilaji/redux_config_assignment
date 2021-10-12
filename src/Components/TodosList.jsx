import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { geterr, getload, getsucess } from "../Allredux/todo/actions";

function TodosList() {
  const { isloading, iserror, data } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    gettodolist();
  }, []);

  async function gettodolist() {
    dispatch(getload());
    try {
      const res = await axios.get("http://localhost:3004/todo");
      dispatch(getsucess(res.data));
    } catch (err) {
      dispatch(geterr(err));
    }
  }

  async function ondeleteclick(e) {
    await axios.delete(`http://localhost:3004/todo/${e}`);
    gettodolist();
  }

  return isloading ? (
    "Loading..."
  ) : iserror ? (
    "Error 404"
  ) : (
    <div>
      {data.map((el) => {
        return (
          <div key={el.id}>
            <h3>{el.titel}</h3>
            <button
              onClick={() => {
                ondeleteclick(el.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TodosList;
