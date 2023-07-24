import React from "react";

function Customer() {
    return (
        <div>
            <div style={{ background: '#1a1814', height: '1000px' }}>
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
                            <div className="table-title" style={{ background: '#575041' }}>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h2>LIST CUSTOMER</h2>
                                    </div>
                                    <div className="col-sm-6">
                                        <a href="#addCustomerModal" className="btn" style={{ background: '#cda45e' }} data-toggle="modal"><span>Add New Customer</span></a>
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
                                        <th>Name</th>
                                        <th>Birthday</th>
                                        <th style={{ width: '6%' }}>Gender</th>
                                        <th>ID Number</th>
                                        <th>Phone Number</th>
                                        <th style={{ width: '15%' }}>Email</th>
                                        <th>Guest type</th>
                                        <th>Address</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Huynh</td>
                                        <td>25-02-1991</td>
                                        <td>Nam</td>
                                        <td>123456789</td>
                                        <td>0369852147</td>
                                        <td>huynh@gmail.com</td>
                                        <td>Diamond</td>
                                        {/*                        Diamond, Platinium, Gold, Silver, Member*/}
                                        <td>Gia Lai</td>
                                        <td>
                                            <a href="#editCustomerModal" className="edit" title="Edit" data-toggle="modal"><i className="material-icons"></i></a>
                                            <a href="#deleteCustomerModal" className="delete" title="Delete" data-toggle="modal"><i className="material-icons"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Huynh</td>
                                        <td>25-02-1991</td>
                                        <td>Nam</td>
                                        <td>123456789</td>
                                        <td>0369852147</td>
                                        <td>huynh@gmail.com</td>
                                        <td>Diamond</td>
                                        <td>Gia Lai</td>
                                        <td>
                                            <a href="#editCustomerModal" className="edit" title="Edit" data-toggle="modal"><i className="material-icons"></i></a>
                                            <a href="#deleteCustomerModal" className="delete" title="Delete" data-toggle="modal"><i className="material-icons"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Huynh</td>
                                        <td>25-02-1991</td>
                                        <td>Nam</td>
                                        <td>123456789</td>
                                        <td>0369852147</td>
                                        <td>huynh@gmail.com</td>
                                        <td>Diamond</td>
                                        <td>Gia Lai</td>
                                        <td>
                                            <a href="#editCustomerModal" className="edit" title="Edit" data-toggle="modal"><i className="material-icons"></i></a>
                                            <a href="#deleteCustomerModal" className="delete" title="Delete" data-toggle="modal"><i className="material-icons"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Huynh</td>
                                        <td>25-02-1991</td>
                                        <td>Nam</td>
                                        <td>123456789</td>
                                        <td>0369852147</td>
                                        <td>huynh@gmail.com</td>
                                        <td>Diamond</td>
                                        <td>Gia Lai</td>
                                        <td>
                                            <a href="#editCustomerModal" className="edit" title="Edit" data-toggle="modal"><i className="material-icons"></i></a>
                                            <a href="#deleteCustomerModal" className="delete" title="Delete" data-toggle="modal"><i className="material-icons"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Huynh</td>
                                        <td>25-02-1991</td>
                                        <td>Nam</td>
                                        <td>123456789</td>
                                        <td>0369852147</td>
                                        <td>huynh@gmail.com</td>
                                        <td>Diamond</td>
                                        <td>Gia Lai</td>
                                        <td>
                                            <a href="#editCustomerModal" className="edit" title="Edit" data-toggle="modal"><i className="material-icons"></i></a>
                                            <a href="#deleteCustomerModal" className="delete" title="Delete" data-toggle="modal"><i className="material-icons"></i></a>
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
            <div id="addCustomerModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header" style={{ background: '#575041', color: 'white' }}>
                                <h4 className="modal-title">Add Customer</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body " style={{ color: 'black' }}>
                                <table>
                                    <tbody className="form-group">
                                        <tr>
                                            <td><label>Name</label></td>
                                            <td><input type="text" className="form-control" required /></td>
                                        </tr>
                                        <tr>
                                            <td><label>Birthday</label></td>
                                            <td><input type="email" className="form-control" required /></td>
                                        </tr>
                                        <tr>
                                            <td><label>Gender</label></td>
                                            <td><input className="form-control" required /></td>
                                        </tr>
                                        <tr>
                                            <td><label>ID Number</label></td>
                                            <td><input type="text" className="form-control" required /></td>
                                        </tr>
                                        <tr>
                                            <td><label>Phone Number</label></td>
                                            <td><input type="text" className="form-control" required /></td>
                                        </tr>
                                        <tr>
                                            <td><label>Email</label></td>
                                            <td><input type="text" className="form-control" required /></td>
                                        </tr>
                                        <tr>
                                            <td><label>Guest type</label></td>
                                            <td><select>
                                                {/*                        Diamond, Platinium, Gold, Silver, Member*/}
                                                <option>Diamond</option>
                                                <option>Platinium</option>
                                                <option>Gold</option>
                                                <option>Silver</option>
                                                <option>Member</option>
                                            </select></td>
                                        </tr>
                                        <tr>
                                            <td><label>Address</label></td>
                                            <td><input type="text" className="form-control" required /></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="modal-footer">
                                    <input style={{ background: '#82817f' }} type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                                    <input style={{ background: '#cda45e' }} type="submit" className="btn btn-success" defaultValue="Add" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/*edit*/}
            <div id="editCustomerModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header" style={{ background: '#575041', color: 'white' }}>
                                <h4 className="modal-title">Edit Customer</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body" style={{ color: 'black' }}>
                                <table>
                                    <tbody className="form-group">
                                        <tr>
                                            <td><label>Name</label></td>
                                            <td><input type="text" className="form-control" required /></td>
                                        </tr>
                                        <tr>
                                            <td><label>Birthday</label></td>
                                            <td><input type="email" className="form-control" required /></td>
                                        </tr>
                                        <tr>
                                            <td><label>Gender</label></td>
                                            <td><input className="form-control" required /></td>
                                        </tr>
                                        <tr>
                                            <td><label>ID Number</label></td>
                                            <td><input type="text" className="form-control" required /></td>
                                        </tr>
                                        <tr>
                                            <td><label>Phone Number</label></td>
                                            <td><input type="text" className="form-control" required /></td>
                                        </tr>
                                        <tr>
                                            <td><label>Email</label></td>
                                            <td><input type="text" className="form-control" required /></td>
                                        </tr>
                                        <tr>
                                            <td><label>Guest type</label></td>
                                            <td><select>
                                                <option>Diamond</option>
                                                <option>Platinium</option>
                                                <option>Gold</option>
                                                <option>Silver</option>
                                                <option>Member</option>
                                            </select></td>
                                        </tr>
                                        <tr>
                                            <td><label>Address</label></td>
                                            <td><input type="text" className="form-control" required /></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="modal-footer">
                                    <input style={{ background: '#82817f' }} type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                                    <input style={{ background: '#cda45e' }} type="submit" className="btn btn-info" defaultValue="Save" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Delete Modal HTML */}
            <div id="deleteCustomerModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header" style={{ background: '#575041', color: 'white' }}>
                                <h4 className="modal-title">Delete Service</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete these Records?</p>
                                <p className="text-warning"><small>This action cannot be undone.</small></p>
                            </div>
                            <div className="modal-footer">
                                <input style={{ background: '#82817f' }} type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                                <input style={{ background: '#cda45e' }} type="submit" className="btn btn-danger" defaultValue="Delete" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
