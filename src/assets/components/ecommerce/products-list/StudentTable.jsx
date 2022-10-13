import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const StudentTable = () => {
  let [students, setStudents] = useState([]);

  //Fetch Data from Server
  const fetchData = async () => {
    // get the data from the api
    const result = await axios.get(
      "https://jobick.com/demo_api/students?sort_by=id&sort_type=desc"
    );
    setStudents(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  //===============================================
  // Set up some additional local state
  //   const [id, setId] = useState(null);
  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);

  // Handle the displaying of the modal based on type and id
  const showDeleteModal = (ids) => {
    setDeleteMessage(`Are you sure you want to delete ?`);
    console.log(displayConfirmationModal,deleteMessage);
    setDisplayConfirmationModal(true);
  };

  return (
    <React.Fragment>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Fees</th>
            <th>Class</th>
            <th>Created Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.fees}</td>
              <td>{student.class}</td>
              <td>{student.create_date}</td>
              <td>{student.status}</td>
              <td>
                <Link
                  to={`/students/edit/${student.id}`}
                  className="btn btn-warning me-2"
                >
                  Edit
                </Link>
                <button
                  onClick={() => {
                    showDeleteModal(student.id);
                  }}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default StudentTable;
