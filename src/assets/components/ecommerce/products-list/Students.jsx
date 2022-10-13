import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import StudentTable from "./StudentTable";
import "react-toastify/dist/ReactToastify.css";

const Students = () => {
    return (
        <React.Fragment>
            <ToastContainer />
            <div className="row mt-5 mb-5">
                <div className="col">
                    <h4>Students</h4>
                </div>
                <div className="col text-end">
                    <Link to="/student/create" className="btn btn-primary">
                        Add Student
                    </Link>
                </div>
            </div>
            <StudentTable />
        </React.Fragment>
    );
};

export default Students;
