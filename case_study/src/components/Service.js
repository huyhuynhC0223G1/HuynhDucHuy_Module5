import React from "react";

function Service(){
    return(
    <div>
        <div style={{background: '#1a1814', height: '1000px'}}>
          <header id="header" className=" d-flex align-items-center">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
              <h1 className="logo me-auto me-lg-0"><a href="index.html">FURAMA</a></h1>
              {/* Uncomment below if you prefer to use an image logo */}
              {/* <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
              <nav id="navbar" className="navbar order-last order-lg-0">
                <ul>
                  <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                  <li><a className="nav-link scrollto" href="#about">About</a></li>
                  <li><a className="nav-link scrollto" href="#menu">Menu</a></li>
                  <li><a className="nav-link scrollto" href="#specials">Specials</a></li>
                  <li><a className="nav-link scrollto" href="#events">Events</a></li>
                  <li><a className="nav-link scrollto" href="#chefs">Chefs</a></li>
                  <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li>
                  <li className="dropdown"><a href="#"><span>Service</span> <i className="bi bi-chevron-down" /></a>
                    <ul>
                      <li><a href="#">Drop Down 1</a></li>
                      <li className="dropdown"><a href="#"><span>Accompanied service</span> <i className="bi bi-chevron-right" /></a>
                        <ul>
                          <li><a href="#">Pool</a></li>
                          <li><a href="#">Car rental</a></li>
                          <li><a href="#">Cuisine</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Room</a></li>
                      <li><a href="#">Villa</a></li>
                    </ul>
                  </li>
                  <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle" />
              </nav>{/* .navbar */}
              <a href="#book-a-table" className="book-a-table-btn scrollto d-none d-lg-flex">Book a table</a>
            </div>
          </header>
          <div className="container-lg">
            <div className="table-responsive">
              <div className="table-wrapper">
                <div className="table-title" style={{background: '#3a2918'}}>
                  <div className="row">
                    <div className="col-sm-2">
                      <h2>LIST SERVICE</h2>
                    </div>
                    <div className="col-sm-7">
                      <a href="#addEmployeeModal" className="btn" style={{background: '#cda45e'}} data-toggle="modal"><span>Add New Sevice</span></a>
                    </div>
                    <div className="col-sm-3">
                      <div className="search-box">
                        <div className="input-group">
                          <input type="text" id="search" className="form-control" placeholder="Search by Name" />
                          <span className="input-group-addon"><i className="material-icons"></i></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th style={{width: '22%'}}>Name</th>
                      <th style={{width: '22%'}}>
                        Kind of room
                      </th>
                      <th>Acreage</th>
                      <th>Price/Day</th>
                      <th>Type service</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>SR001</td>
                      <td>Normal</td>
                      <td>100m2</td>
                      <td>50$</td>
                      <td>Room</td>
                      <td>
                        <a href="#editEmployeeModal" className="edit" title="Edit" data-toggle="modal"><i className="material-icons"></i></a>
                        <a href="#deleteEmployeeModal" className="delete" title="Delete" data-toggle="modal"><i className="material-icons"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>SH001</td>
                      <td>Classy</td>
                      <td>200m2</td>
                      <td>200$</td>
                      <td>Apartment</td>
                      <td>
                        <a href="#editEmployeeModal" className="edit" title="Edit" data-toggle="modal"><i className="material-icons"></i></a>
                        <a href="#deleteEmployeeModal" className="delete" title="Delete" data-toggle="modal"><i className="material-icons"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>SV001</td>
                      <td>VIP</td>
                      <td>800m2</td>
                      <td>500$</td>
                      <td>Villa</td>
                      <td>
                        <a href="#editEmployeeModal" className="edit" title="Edit" data-toggle="modal"><i className="material-icons"></i></a>
                        <a href="#deleteEmployeeModal" className="delete" title="Delete" data-toggle="modal"><i className="material-icons"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>SV003</td>
                      <td>VIP</td>
                      <td>80m2</td>
                      <td>500$</td>
                      <td>Villa</td>
                      <td>
                        <a href="#editEmployeeModal" className="edit" title="Edit" data-toggle="modal"><i className="material-icons"></i></a>
                        <a href="#deleteEmployeeModal" className="delete" title="Delete" data-toggle="modal"><i className="material-icons"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>SH003</td>
                      <td>Classy</td>
                      <td>300m2</td>
                      <td>300$</td>
                      <td>Apartment</td>
                      <td>
                        <a href="#editEmployeeModal" className="edit" title="Edit" data-toggle="modal"><i className="material-icons"></i></a>
                        <a href="#deleteEmployeeModal" className="delete" title="Delete" data-toggle="modal"><i className="material-icons"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="clearfix">
                  <ul className="pagination">
                    <li className="page-item"><a href="#" className="page-link">Prev</a></li>
                    <li className="page-item active"><a href="#" className="page-link">1</a></li>
                    <li className="page-item"><a href="#" className="page-link">2</a></li>
                    <li className="page-item"><a href="#" className="page-link">3</a></li>
                    <li className="page-item"><a href="#" className="page-link">4</a></li>
                    <li className="page-item"><a href="#" className="page-link">5</a></li>
                    <li className="page-item"><a href="#" className="page-link">Next</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*add*/}
        <div id="addEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header" style={{background: '#3a2918', color: 'white'}}>
                  <h4 className="modal-title">Add Employee</h4>
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div className="modal-body" style={{color: 'black'}}>
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Kind of room</label>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Acreage</label>
                    <input className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Type service</label>
                    <input type="text" className="form-control" required />
                  </div>
                </div>
                <div className="modal-footer">
                  <input style={{background: '#82817f'}} type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                  <input style={{background: '#cda45e'}} type="submit" className="btn btn-success" defaultValue="Add" />
                </div>
              </form>
            </div>
          </div>
        </div>
        {/*edit*/}
        <div id="editEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header" style={{background: '#3a2918', color: 'white'}}>
                  <h4 className="modal-title">Edit Employee</h4>
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div className="modal-body" style={{color: 'black'}}>
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Kind of room</label>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Acreage</label>
                    <textarea className="form-control" required defaultValue={""} />
                  </div>
                  <div className="form-group">
                    <label>Type service</label>
                    <input type="text" className="form-control" required />
                  </div>
                </div>
                <div className="modal-footer">
                  <input style={{background: '#82817f'}} type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                  <input style={{background: '#cda45e'}} type="submit" className="btn btn-info" defaultValue="Save" />
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Delete Modal HTML */}
        <div id="deleteEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header" style={{background: '#3a2918', color: 'white'}}>
                  <h4 className="modal-title">Delete Service</h4>
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div className="modal-body">
                  <p>Are you sure you want to delete these Records?</p>
                  <p className="text-warning"><small>This action cannot be undone.</small></p>
                </div>
                <div className="modal-footer">
                  <input style={{background: '#82817f'}} type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                  <input style={{background: '#cda45e'}} type="submit" className="btn btn-danger" defaultValue="Delete" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
export default Service;