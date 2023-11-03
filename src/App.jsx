import "./App.css";
import { AddStudent, EditStudent, StudentDetail, Studentlist } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <h1>React JS CRUD Operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Studentlist />}></Route>
          <Route path="/student/create" element={<AddStudent />}></Route>
          <Route path="/student/edit/:id" element={<EditStudent />}></Route>
          <Route path="/student/detail/:id" element={<StudentDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
