import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SimpleTodosList from "./components/simpletodolist5";
import CreateTask from "./components/createtask3";
import EditTask from "./components/edittask1";
import "./styles.css"



export default function App3() {
  return (
    <>

    <BrowserRouter>
    <Routes>
    {/* <Navbar /> */}

      {/* <div className="container"> */}
        <Route path="/" exact element={<SimpleTodosList />} />
        <Route path="/create" element={<CreateTask />} />
        <Route path="/update/:id" element={<EditTask />} />
      {/* </div> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}
