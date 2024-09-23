import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

export default function AdminMainCategory() {
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
                    <h5 className='bg-primary p-3 text-light text-center rounded'>Main Category<Link to="/admin-add-maincategory"><i className='fa fa-plus text-light float-right'></i></Link></h5>
                    
                </div>
            </div>
        </div>
    </>
  )
}

