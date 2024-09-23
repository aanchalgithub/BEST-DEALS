import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

export default function AdminAddMainCategory() {
  return (
    <>
      {/* <!-- breadcrumb-section --> */}
      <div class="breadcrumb-section breadcrumb-bg pb-4">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 text-center">
              <div class="breadcrumb-text">
                <h1>Admin Section</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end breadcrumb section --> */}
      <div className="container-fluid my-2">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <h5 className="bg-primary p-3 text-light text-center rounded">
              Main Category
            </h5>
            <form>
              <div className="mb-3">
                <label>Name</label>
                <input
                  type="text"
                  name=""
                  placeholder="Enter Maincategory Name"
                  className="form-control"
                />
              </div>
              <div className="mb-3 btn-group w-100">
                <button
                  type="reset"
                  className="btn btn-secondary text-light w-50"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="btn btn-primary text-light w-50 "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
