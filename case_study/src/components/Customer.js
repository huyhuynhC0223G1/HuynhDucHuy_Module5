import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { getListCustomer, deleteCustomerById } from "../service/CustomerService";

export default function Customer() {
    const [customerList, setCustomerList] = useState([]);
    const [customer, setCustomer] = useState("");
    const [deleteService, setDeleteService] = useState(null);
  
    const getCustomer = async () => {
      const data = await getListCustomer();
      setCustomerList(data);
    }
  
    useEffect(() => {
      getCustomer();
    }, [customer])

    return (

        <div>
            <div style={{ background: '#1a1814', height: '1000px' }}>
            
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
                                        <th>ID Card</th>
                                        <th>Phone Number</th>
                                        <th style={{ width: '15%' }}>Email</th>
                                        <th>Guest type</th>
                                        <th>Address</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {customerList.map((customer) =>(
                                        <tr key={customer.id}>
                                            <td>{customer.Name}</td>
                                            <td>{customer.Birthday}</td>
                                            <td>{customer.Gender}</td>
                                            <td>{customer.Id_card}</td>
                                            <td>{customer.Phone_number}</td>
                                            <td>{customer.Email}</td>
                                            <td>{customer.Customer_type}</td>
                                            <td>{customer.Address}</td>
                                            <td>
                                            <a href="#editCustomerModal" className="edit" title="Edit" data-toggle="modal"><i className="material-icons"></i></a>
                                            <a href="#deleteCustomerModal" className="delete" title="Delete" data-toggle="modal"><i className="material-icons"></i></a>
                                        </td>
                                        </tr>
                                    ))}
                                    
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
