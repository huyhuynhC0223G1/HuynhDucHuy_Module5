import React, { useEffect, useState } from "react";
import { getListContracts, deleteContracts } from "../service/ContractService";

function Contract() {
  const [ContractList, setContractList] = useState([]);
  const [Contract, setContract] = useState("");
  const [deleteContract, setDeleteContract] = useState(null);

  const getContract = async () => {
    const data = await getListContracts();
    setContractList(data);
  }

  useEffect(() => {
    getContract();
  }, [Contract])
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
                    <a href="#addContractModal" className="btn" style={{ background: '#cda45e' }} data-toggle="modal"><span>Add New Sevice</span></a>
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
                <thead className="table-dark">
                  <tr>
                    <th style={{ width: '2%' }}>#</th>
                    <th style={{ width: '12%' }}>Contract Number</th>
                    <th style={{ width: '14%' }}>Name Customer</th>
                    <th style={{ width: '14%' }}>Name Employee</th>
                    <th style={{ width: '10%' }}>Type service</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Deposit</th>
                    <th>Total Payment</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {ContractList.map((contract) => (
                    <tr key={contract.id}>
                      <td>{contract.id}</td>
                      <td>{contract.Contract_Number}</td>
                      <td>{contract.Customer.Name_Customer}</td>
                      <td>{contract.Name_Employee}</td>
                      <td>{contract.Service.Type_Service}</td>
                      <td>{contract.Start_Date}</td>
                      <td>{contract.End_Date}</td>
                      <td>{contract.Deposit}</td>
                      <td>{contract.Total_Payment}</td>
                      <td>
                        <a href="#editModal" className="edit" title="Edit" data-toggle="modal"><i className="material-icons"></i></a>
                        <a href="#deleteModal" className="delete" title="Delete" data-toggle="modal"><i className="material-icons"></i></a>
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
      <div id="addContractModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <Formik
              initialValues={{ Contract_Number: "", Name_Customer: "", Name_Employee: "", Type_Service: "", Start_Date: "", End_Date: "", Deposit: "", Total_Payment: "" }}
              validationSchema={yup.object({
                Contract_Number: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(100, "at most 3 characters"),
                Name_Customer: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(20, "at most 3 characters"),
                Name_Employee: yup.string().required("Name cannot be left blank"),
                Type_Service: yup.string().required("Name cannot be left blank"),
                Start_Date: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(100, "at most 3 characters"),
                End_Date: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(100, "at most 3 characters"),
                Deposit: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(300, "at most 3 characters"),
                Total_Payment: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(300, "at most 3 characters"),
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
                        <td><label htmlFor="Contract_Number">Contract_Number</label></td>
                        <td><Field id="Contract_Number" type="text" name="Contract_Number" className="form-control" />
                          <ErrorMessage name="Contract_Number" component="div" className="text-red" /></td>
                      </tr>
                      <tr className="form-group">
                        <td><label htmlFor="Name_Customer">Name_Customer</label></td>
                        <td><Field id="Name_Customer" name="Name_Customer" type="date" className="form-control" />
                          <ErrorMessage name="Name_Customer" component="div" className="text-red" /></td>
                      </tr>
                      <tr className="form-group">
                        <td><label htmlFor="Name_Employee">Name_Employee</label></td>
                        <td> <Field id="Name_Employee" type="radio" name="Name_Employee" />Male
                          <Field style={{ marginLeft: '30px' }} id="Name_Employee" type="radio" name="gender" />Female</td>
                      </tr>
                      <tr className="form-group">
                        <td><label htmlFor="Type_Service">Type_Service</label></td>
                        <td><Field id="Type_Service" name="Type_Service" type="date" className="form-control" />
                          <ErrorMessage name="Type_Service" component="div" className="text-red" /></td>
                      </tr>
                      <tr className="form-group">
                        <td><label htmlFor="Start_Date">Start_Date</label></td>
                        <td><Field id="Start_Date" name="Start_Date" type="text" className="form-control" />
                          <ErrorMessage name="Start_Date" component="div" className="text-red" /></td>
                      </tr>
                      <tr className="form-group">
                        <td><label htmlFor="End_Date">End_Date</label></td>
                        <td><Field id="End_Date" name="End_Date" type="email" className="form-control" />
                          <ErrorMessage name="End_Date" component="div" className="text-red" /></td>
                      </tr>
                      <tr>
                        <td><label htmlFor="Deposit">Deposit</label></td>
                        <td><Field id="Deposit" name="Deposit" type="number" className="form-control" />
                          <ErrorMessage name="Deposit" component="div" className="text-red" /></td>
                      </tr>
                      <tr>
                        <td><label htmlFor="Total_Payment">Total_Payment</label></td>
                        <td> <Field id="Total_Payment" name="Total_Payment" type="text" className="form-control" />
                          <ErrorMessage name="Total_Payment" component="div" className="text-red" /></td>
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
      <div id="editModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
          <Formik
              initialValues={{ Contract_Number: "", Name_Customer: "", Name_Employee: "", Type_Service: "", Start_Date: "", End_Date: "", Deposit: "", Total_Payment: "" }}
              validationSchema={yup.object({
                Contract_Number: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(100, "at most 3 characters"),
                Name_Customer: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(20, "at most 3 characters"),
                Name_Employee: yup.string().required("Name cannot be left blank"),
                Type_Service: yup.string().required("Name cannot be left blank"),
                Start_Date: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(100, "at most 3 characters"),
                End_Date: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(100, "at most 3 characters"),
                Deposit: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(300, "at most 3 characters"),
                Total_Payment: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(300, "at most 3 characters"),
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
                        <td><label htmlFor="Contract_Number">Contract_Number</label></td>
                        <td><Field id="Contract_Number" type="text" name="Contract_Number" className="form-control" />
                          <ErrorMessage name="Contract_Number" component="div" className="text-red" /></td>
                      </tr>
                      <tr className="form-group">
                        <td><label htmlFor="Name_Customer">Name_Customer</label></td>
                        <td><Field id="Name_Customer" name="Name_Customer" type="date" className="form-control" />
                          <ErrorMessage name="Name_Customer" component="div" className="text-red" /></td>
                      </tr>
                      <tr className="form-group">
                        <td><label htmlFor="Name_Employee">Name_Employee</label></td>
                        <td> <Field id="Name_Employee" type="radio" name="Name_Employee" />Male
                          <Field style={{ marginLeft: '30px' }} id="Name_Employee" type="radio" name="gender" />Female</td>
                      </tr>
                      <tr className="form-group">
                        <td><label htmlFor="Type_Service">Type_Service</label></td>
                        <td><Field id="Type_Service" name="Type_Service" type="date" className="form-control" />
                          <ErrorMessage name="Type_Service" component="div" className="text-red" /></td>
                      </tr>
                      <tr className="form-group">
                        <td><label htmlFor="Start_Date">Start_Date</label></td>
                        <td><Field id="Start_Date" name="Start_Date" type="text" className="form-control" />
                          <ErrorMessage name="Start_Date" component="div" className="text-red" /></td>
                      </tr>
                      <tr className="form-group">
                        <td><label htmlFor="End_Date">End_Date</label></td>
                        <td><Field id="End_Date" name="End_Date" type="email" className="form-control" />
                          <ErrorMessage name="End_Date" component="div" className="text-red" /></td>
                      </tr>
                      <tr>
                        <td><label htmlFor="Deposit">Deposit</label></td>
                        <td><Field id="Deposit" name="Deposit" type="number" className="form-control" />
                          <ErrorMessage name="Deposit" component="div" className="text-red" /></td>
                      </tr>
                      <tr>
                        <td><label htmlFor="Total_Payment">Total_Payment</label></td>
                        <td> <Field id="Total_Payment" name="Total_Payment" type="text" className="form-control" />
                          <ErrorMessage name="Total_Payment" component="div" className="text-red" /></td>
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
      {/* Delete Modal HTML */}
      <div id="deleteModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form >
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
export default Contract;  