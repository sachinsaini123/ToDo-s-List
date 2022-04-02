import logo from "./logo.svg";
import "./App.css";
import { Header } from "./MyComponents/header";
import { Footer } from "./MyComponents/footer";
import { Todos } from "./MyComponents/todos";
import React, { useEffect, useState } from "react";
import { AddTodo } from "./MyComponents/AddTodo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { About } from "./MyComponents/About";
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    // console.log("This my onDelete function: ", todo);
    //// Here deleting this way in react doesn't work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    setTodos(
      todos.filter((todoItem) => {
        return todoItem.sno !== todo.sno;
      })
    );
  };

  const addTodo = (title, desc) => {
    let sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="My ToDo's List" searchBar={false} />
        <Switch>
          <Route
            exact
            path='/'
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path='/about'>
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
