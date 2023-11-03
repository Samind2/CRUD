import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Studentlist = () => {
  const [stdData, setStdData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000/students")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setStdData(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const loadEdit = (id) => {
    navigate("/student/edit/" + id);
  };
  const loadDetail = (id) => {
    navigate("/student/detail/" + id);
  };
  const removeStudent = (id) => {
   if(window.confirm("Do You Want To Remove")){
    fetch("http://localhost:8000/students/" + id,{
      method:"DELETE"
    }).then((res)=>{
      alert("remove successfuly");
      window.location.reload()
    }).catch((err)=>{
      console.log(err)
    });
   }
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Student List</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="/student/create" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <br />
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Major</td>
                <td>Admission Year</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {stdData &&
                stdData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.major}</td>
                    <td>{item.admissionYear}</td>
                    <td>
                      <a
                        className="btn btn-success"
                        onClick={() => {
                          loadEdit(item.id);
                        }}
                      >
                        Edit
                      </a>  
                      <a
                        className="btn btn-danger"
                        onClick={() => {
                          removeStudent(item.id);
                        }}
                      >
                        Delete
                      </a>  
                      <a
                        className="btn btn-primary"
                        onClick={() => {
                          loadDetail(item.id);
                        }}
                      >
                        Detail
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Studentlist;
