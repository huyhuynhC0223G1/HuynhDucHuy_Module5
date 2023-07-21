import React from "react";

function Contract(){
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
                <div className="table-title" style={{background: '#575041'}}>
                  <div className="row">
                    <div className="col-sm-3">
                      <h2>LIST CONTRACT</h2>
                    </div>
                    <div className="col-sm-6">
                      <a href="#addContractModal" className="btn" style={{background: '#cda45e'}} data-toggle="modal"><span>Add New Contract</span></a>
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
                      {/*    Contract Number, Start Date, End Date, Deposit, Total Payment.*/}
                      <th style={{width: '2%'}}>#</th>
                      <th style={{width: '10%'}}>Contract Number</th>
                      <th style={{width: '14%'}}>Name Customer</th>
                      <th style={{width: '14%'}}>Name Employee</th>
                      <th style={{width: '10%'}}>Type service</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Deposit</th>
                      <th>Total Payment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>HD001</td>
                      <td>Nguyen Van A</td>
                      <td>Nguyen Van B</td>
                      <td>Villa</td>
                      <td>22/02/2023</td>
                      <td>28/02/2023</td>
                      <td>500$</td>
                      <td>2200$</td>
                      <td>
                        <a href="#editContractModal" className="edit" title="Edit" data-toggle="modal"><i className="material-icons"></i></a>
                        <a href="#deleteContractModal" className="delete" title="Delete" data-toggle="modal"><i className="material-icons"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>HD002</td>
                      <td>Nguyen Van A</td>
                      <td>Nguyen Van B</td>
                      <td>Villa</td>
                      <td>22/02/2023</td>
                      <td>28/02/2023</td>
                      <td>500$</td>
                      <td>2200$</td>
                      <td>
                        <a href="#editContractModal" className="edit" title="Edit" data-toggle="modal"><i className="material-icons"></i></a>
                        <a href="#deleteContractModal" className="delete" title="Delete" data-toggle="modal"><i className="material-icons"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>HD003</td>
                      <td>Nguyen Van A</td>
                      <td>Nguyen Van B</td>
                      <td>Villa</td>
                      <td>22/02/2023</td>
                      <td>28/02/2023</td>
                      <td>500$</td>
                      <td>2200$</td>
                      <td>
                        <a href="#editContractModal" className="edit" title="Edit" data-toggle="modal"><i className="material-icons"></i></a>
                        <a href="#deleteContractModal" className="delete" title="Delete" data-toggle="modal"><i className="material-icons"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>HD004</td>
                      <td>Nguyen Van A</td>
                      <td>Nguyen Van B</td>
                      <td>Villa</td>
                      <td>22/02/2023</td>
                      <td>28/02/2023</td>
                      <td>500$</td>
                      <td>2200$</td>
                      <td>
                        <a href="#editContractModal" className="edit" title="Edit" data-toggle="modal"><i className="material-icons"></i></a>
                        <a href="#deleteContractModal" className="delete" title="Delete" data-toggle="modal"><i className="material-icons"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>HD005</td>
                      <td>Nguyen Van A</td>
                      <td>Nguyen Van B</td>
                      <td>Villa</td>
                      <td>22/02/2023</td>
                      <td>28/02/2023</td>
                      <td>500$</td>
                      <td>2200$</td>
                      <td>
                        <a href="#editContractModal" className="edit" title="Edit" data-toggle="modal"><i className="material-icons"></i></a>
                        <a href="#deleteContractModal" className="delete" title="Delete" data-toggle="modal"><i className="material-icons"></i></a>
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
        <div id="addContractModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header" style={{background: '#575041', color: 'white'}}>
                  <h4 className="modal-title">Add Contract</h4>
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div className="modal-body " style={{color: 'black'}}>
                  <table>
                    <tbody className="form-group">
                      <tr>
                        <td><label>Contract Number</label></td>
                        <td><input type="text" className="form-control" required /></td>
                      </tr>
                      <tr>
                        <td><label>Name Customer</label></td>
                        <td><input type="text" className="form-control" required /></td>
                      </tr>
                      <tr>
                        <td><label>Name Employee</label></td>
                        <td><input className="form-control" required /></td>
                      </tr>
                      <tr>
                        <td><label>Type service</label></td>
                        <td><input type="text" className="form-control" required /></td>
                      </tr>
                      <tr>
                        <td><label>Start Date</label></td>
                        <td><input type="text" className="form-control" required /></td>
                      </tr>
                      <tr>
                        <td><label>End Date</label></td>
                        <td><input type="text" className="form-control" required /></td>
                      </tr>
                      <tr>
                        <td><label>Deposit</label></td>
                        <td><input type="text" className="form-control" required /></td>
                      </tr>
                      <tr>
                        <td><label>Total Payment</label></td>
                        <td><input type="text" className="form-control" required /></td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="modal-footer">
                    <input style={{background: '#82817f'}} type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                    <input style={{background: '#cda45e'}} type="submit" className="btn btn-success" defaultValue="Add" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/*edit*/}
        <div id="editContractModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header" style={{background: '#575041', color: 'white'}}>
                  <h4 className="modal-title">Edit Contract</h4>
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div className="modal-body" style={{color: 'black'}}>
                  <table>
                    <tbody className="form-group">
                      <tr>
                        <td><label>Contract Number</label></td>
                        <td><input type="text" className="form-control" required /></td>
                      </tr>
                      <tr>
                        <td><label>Name Customer</label></td>
                        <td><input type="text" className="form-control" required /></td>
                      </tr>
                      <tr>
                        <td><label>Name Employee</label></td>
                        <td><input className="form-control" required /></td>
                      </tr>
                      <tr>
                        <td><label>Type service</label></td>
                        <td><input type="text" className="form-control" required /></td>
                      </tr>
                      <tr>
                        <td><label>Start Date</label></td>
                        <td><input type="text" className="form-control" required /></td>
                      </tr>
                      <tr>
                        <td><label>End Date</label></td>
                        <td><input type="text" className="form-control" required /></td>
                      </tr>
                      <tr>
                        <td><label>Deposit</label></td>
                        <td><input type="text" className="form-control" required /></td>
                      </tr>
                      <tr>
                        <td><label>Total Payment</label></td>
                        <td><input type="text" className="form-control" required /></td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="modal-footer">
                    <input style={{background: '#82817f'}} type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                    <input style={{background: '#cda45e'}} type="submit" className="btn btn-info" defaultValue="Save" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Delete Modal HTML */}
        <div id="deleteContractModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header" style={{background: '#575041', color: 'white'}}>
                  <h4 className="modal-title">Delete Contract</h4>
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
export default Contract;