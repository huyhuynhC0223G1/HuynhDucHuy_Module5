import React, { useEffect, useState } from "react";
import { getListCustomer, deleteCustomerById, createCustomer, updateCustomer, getCustomerById } from "../service/CustomerService";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from 'yup';
import { useNavigate, useParams } from "react-router-dom";

export default function Customer() {
    const [customerList, setCustomerList] = useState([]);
    const [id, setId] = useState(null);

    const [customer, setCustomer] = useState("");
    const [deleteCustomer, setDeleteCustomer] = useState(null);
    const navigate = useNavigate();

    const getCustomer = async () => {
        const data = await getListCustomer();
        setCustomerList(data);
    }
    const fetchCustomer = async () => {
        const data = await getCustomerById(id);
        console.log(data);
        setCustomer(data);

    }
    useEffect(() => {
        getCustomer();
        if (id) {
            fetchCustomer();
        }

    }, [id])

    const handleUpdate = async (value) => {
        await updateCustomer(id, value);
        alert("updated successfully!");
        setCustomer("");
        navigate("/");
    }

    const handleDeleteCustomer = async () => {
        await deleteCustomerById(deleteCustomer)
        setCustomerList(customerList.filter(customer => customer.id !== deleteCustomer));
        setDeleteCustomer(null);
    }

    return (

        <div>
            <div style={{ background: '#41403f', height: '100%' }}>
                <div className="container-fluid">
                    <div className="table">
                        <div className="table-wrapper">
                            <div className="table-title" >
                                <div className="row" style={{ background: '#41403f', color: 'white' }}>
                                    <div className="col-sm-3" >
                                        <h2>LIST SERVICE</h2>
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
                            <table className="table table-striped table-bordered">
                                <thead className="table-dark">
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
                                        <th>EDIT</th>
                                        <th>DELETE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {customerList.map((customer) => (
                                        <tr key={customer.id}>
                                            <td>{customer.id}</td>
                                            <td>{customer.Name_Customer}</td>
                                            <td>{customer.Birthday}</td>
                                            <td>{customer.Gender}</td>
                                            <td>{customer.Id_card}</td>
                                            <td>{customer.Phone_number}</td>
                                            <td>{customer.Email}</td>
                                            <td>{customer.Customer_type}</td>
                                            <td>{customer.Address}</td>
                                            <td style={{ textAlign: 'center' }}>
                                                <a href="#editCustomerModal" type="submit" onClick={() => setId(customer.id)} className="edit" title="Edit" data-toggle="modal" ><i className="material-icons"></i></a>
                                            </td>
                                            <td style={{ textAlign: 'center' }}>
                                                <a type="submit" onClick={() => setDeleteCustomer(customer.id)} data-toggle="modal" data-target="#deleteModal"><i className="material-icons"></i></a>
                                            </td>

                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                            <div className="clearfix">
                                <ul className="pagination" style={{ background: '#41403f', color: 'white' }}>
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
                        <Formik
                            initialValues={{ Name_Customer: "", Birthday: "", Gender: "", Id_card: "", Phone_number: "", Email: "", Customer_type: "", Address: "" }}
                            validationSchema={yup.object({
                                Name_Customer: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(100, "at most 3 characters"),
                                Birthday: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(20, "at most 3 characters"),
                                Gender: yup.string().required("Name cannot be left blank"),
                                Id_card: yup.string().required("Name cannot be left blank"),
                                Phone_number: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(100, "at most 3 characters"),
                                Email: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(100, "at most 3 characters"),
                                Customer_type: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(300, "at most 3 characters"),
                                Address: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(300, "at most 3 characters"),
                            })}

                            onSubmit={async (value) => {
                                await createCustomer(value);
                                alert("Add in successfully!!!");
                                navigate("/");
                            }}>

                            <Form>
                                <div className="modal-header" style={{ background: '#260246', color: 'white' }}>
                                    <h4 className="modal-title">Add Costomer</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                </div>
                                <div className="modal-body" style={{ color: 'black' }}>
                                    <table>
                                        <tbody>
                                            <tr className="form-group">
                                                <td><label htmlFor="Name_Customer">Name Customer</label></td>
                                                <td><Field id="Name_Customer" type="text" name="Name_Customer" className="form-control" />
                                                    <ErrorMessage name="Name_Customer" component="div" className="text-red" /></td>
                                            </tr>
                                            <tr className="form-group">
                                                <td><label htmlFor="Birthday">Birthday</label></td>
                                                <td><Field id="Birthday" name="Birthday" type="date" className="form-control" />
                                                    <ErrorMessage name="Birthday" component="div" className="text-red" /></td>
                                            </tr>
                                            <tr className="form-group">
                                                <td><label htmlFor="Gender">Gender</label></td>
                                                <td> <Field id="gender" type="radio" name="gender" />Male
                                                    <Field style={{ marginLeft: '30px' }} id="gender" type="radio" name="gender" />Female</td>
                                            </tr>
                                            <tr className="form-group">
                                                <td><label htmlFor="Id_card">Id card</label></td>
                                                <td><Field id="Id_card" name="Id_card" type="text" className="form-control" />
                                                    <ErrorMessage name="Id_card" component="div" className="text-red" /></td>
                                            </tr>
                                            <tr className="form-group">
                                                <td><label htmlFor="Email">Phone number</label></td>
                                                <td><Field id="Email" name="Email" type="email" className="form-control" />
                                                    <ErrorMessage name="Email" component="div" className="text-red" /></td>
                                            </tr>
                                            <tr>
                                                <td><label htmlFor="Customer_type">Customer type</label></td>
                                                <td><Field id="Customer_type" name="Customer_type" type="number" className="form-control" />
                                                    <ErrorMessage name="Customer_type" component="div" className="text-red" /></td>
                                            </tr>
                                            <tr>
                                                <td><label htmlFor="Address">Address</label></td>
                                                <td> <Field id="Address" name="Address" type="text" className="form-control" />
                                                    <ErrorMessage name="Address" component="div" className="text-red" /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <input style={{ background: '#82817f' }} type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                                    <input style={{ background: '#cda45e' }} type="submit" className="btn btn-success" defaultValue="Add" />
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
            {/*edit*/}
            <div id="editCustomerModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <Formik
                            initialValues={{
                                Name_Customer: customer.Name_Customer, Birthday: customer.Birthday, Gender: customer.Gender,
                                Id_card: customer.Id_card, Phone_number: customer.Phone_number, Email: customer.Email,
                                Customer_type: customer.Customer_type, Address: customer.Address
                            }}
                            validationSchema={yup.object({
                                Name_Customer: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(100, "at most 3 characters"),
                                Birthday: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(20, "at most 3 characters"),
                                Gender: yup.string().required("Name cannot be left blank"),
                                Id_card: yup.string().required("Name cannot be left blank"),
                                Phone_number: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(100, "at most 3 characters"),
                                Email: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(100, "at most 3 characters"),
                                Customer_type: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(300, "at most 3 characters"),
                                Address: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(300, "at most 3 characters"),
                            })}
                            onSubmit={handleUpdate}
                            enableReinitialize
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <div className="modal-header" style={{ background: '#260246', color: 'white' }}>
                                        <h4 className="modal-title">Edit Costomer</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    </div>
                                    <div className="modal-body" style={{ color: 'black' }}>
                                        <table>
                                            <tbody>
                                                <tr className="form-group">
                                                    <td><label htmlFor="Name_Customer">Name Customer</label></td>
                                                    <td><Field id="Name_Customer" type="text" name="Name_Customer" className="form-control" /></td>
                                                    <td><ErrorMessage name="Name_Customer" component="div" className="text-red" /></td>
                                                </tr>
                                                <tr className="form-group">
                                                    <td><label htmlFor="Birthday">Birthday</label></td>
                                                    <td><Field id="Birthday" name="Birthday" type="date" className="form-control" /></td>
                                                    <td><ErrorMessage name="Birthday" component="div" className="text-red" /></td>
                                                </tr>
                                                <tr className="form-group">
                                                    <td><label htmlFor="Gender">Gender</label></td>
                                                    <td> <Field id="gender" type="radio" name="gender" />Male
                                                        <Field style={{ marginLeft: '30px' }} id="gender" type="radio" name="gender" />Female</td>
                                                </tr>
                                                <tr className="form-group">
                                                    <td><label htmlFor="Id_card">Id card</label></td>
                                                    <td><Field id="Id_card" name="Id_card" type="text" className="form-control" /></td>
                                                    <td><ErrorMessage name="Id_card" component="div" className="text-red" /></td>
                                                </tr>
                                                <tr className="form-group">
                                                    <td><label htmlFor="Email">Phone number</label></td>
                                                    <td><Field id="Email" name="Email" type="email" className="form-control" /></td>
                                                    <td><ErrorMessage name="Email" component="div" className="text-red" /></td>
                                                </tr>
                                                <tr>
                                                    <td><label htmlFor="Customer_type">Customer type</label></td>
                                                    <td><Field id="Customer_type" name="Customer_type" type="text" className="form-control" /></td>
                                                    <td><ErrorMessage name="Customer_type" component="div" className="text-red" /></td>
                                                </tr>
                                                <tr>
                                                    <td><label htmlFor="Address">Address</label></td>
                                                    <td> <Field id="Address" name="Address" type="text" className="form-control" /></td>
                                                    <td><ErrorMessage name="Address" component="div" className="text-red" /></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="modal-footer">
                                        <input style={{ background: '#82817f' }} type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                                        <input style={{ background: '#cda45e' }} type="submit" className="btn btn-success" defaultValue="Add" disabled={isSubmitting} />
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            {/* Delete Modal HTML */}
            <div id="deleteModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleDeleteCustomer}>
                            <div className="modal-header" style={{ background: '#260246', color: 'white' }}>
                                <h4 className="modal-title">Delete Customer</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body" style={{ color: 'black' }}>
                                <p>Are you sure you want to delete these Records?</p>
                                <p className="text-danger"><small>This action cannot be undone.</small></p>
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
