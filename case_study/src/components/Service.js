import React, { useEffect, useState } from "react";
import { getListService, deleteServiceById, createService } from "../service/ServiceService";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";

function Service() {
  const [serviceList, setServiceList] = useState([]);
  const [service, setService] = useState("");
  const [deleteService, setDeleteService] = useState(null);
  const navigate = useNavigate;

  const getService = async () => {
    const data = await getListService();
    setServiceList(data);
  }

  useEffect(() => {
    getService();
  }, [service])

  // const handleDelete = async () =>{
  //   await deleteServiceById(deleteService);
  //   setDeleteService(serviceList.filter(service => service.id !== deleteService));
  //   setDeleteService(null);
  // }

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
                    <a href="#addModal" className="btn" style={{ background: '#cda45e' }} data-toggle="modal"><span>Add New Sevice</span></a>
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
              <div class="card-group">
                {serviceList.map((service) => {
                  return (
                    <div class="card mb-3 ml-1 " style={{ minWidth: '530px' }}>
                      <div class="row g-0">
                        <div class="col-md-7">
                          <img src={service.image} class="img-fluid rounded-start" alt="..." style={{ height: '100%', width: '100%' }} />
                        </div>
                        <div class="col-md-5">
                          <div class="card-body">
                            <h5 class="card-title">Name Service: {service.Name_Service}</h5>
                            <p class="card-text">Acreage: {service.Acreage}m2</p>
                            {/* <p class="card-text">{service.Costs}</p> */}
                            {/* <p class="card-text">{service.MaxPeople}</p> */}
                            <p class="card-text">Type Service: {service.Type_Service}</p>
                            {/* <p class="card-text">{service.Standard}</p> */}
                            <p class="card-text">Description: {service.Description}</p>
                            <button style={{ background: '#cda45e' }} href="#editModal" className="edit" title="Edit" data-toggle="modal">EDIT</button>
                            <button style={{ background: '#0f0e1b', color:'white' }} href="#deleteModal" className="delete" title="Delete" data-toggle="modal">DELETE</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/*add*/}
      <div id="addModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <Formik
              initialValues={{ Name_Service: "", Acreage: "", Costs: "", MaxPeople: "", Type_Service: "", Standard: "", Description: "" }}
              validationSchema={yup.object({
                Name_Service: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(100, "at most 3 characters"),
                Acreage: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(20, "at most 3 characters"),
                Costs: yup.number().typeError("Enter number").required("Name cannot be left blank"),
                MaxPeople: yup.number().typeError("Enter number").required("Name cannot be left blank"),
                Type_Service: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(100, "at most 3 characters"),
                Standard: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(100, "at most 3 characters"),
                Description: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(300, "at most 3 characters"),
              })}

              onSubmit={async (value) => {
                await createService(value);
                alert("add in successfully!!!");
                navigate("/");
              }}>

              <Form>
                <div className="modal-header" style={{ background: '#260246', color: 'white' }}>
                  <h4 className="modal-title">Add Employee</h4>
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div className="modal-body" style={{ color: 'black' }}>
                  <table>
                    <tbody>
                      <tr className="form-group">
                        <td><label htmlFor="Name_Service">Name Service</label></td>
                        <td><Field id="Name_Service" type="text" name="Name_Service" className="form-control" />
                          <ErrorMessage name="Name_Service" component="div" className="text-red" /></td>
                      </tr>
                      <tr className="form-group">
                        <td><label htmlFor="Acreage">Acreage</label></td>
                        <td><Field id="Acreage" name="Acreage" type="number" className="form-control" />
                          <ErrorMessage name="Acreage" component="div" className="text-red" /></td>
                      </tr>
                      <tr className="form-group">
                        <td><label htmlFor="Costs">Costs</label></td>
                        <td><Field id="Costs" name="Costs" className="form-control" />
                          <ErrorMessage name="Costs" component="div" className="text-red" /></td>
                      </tr>
                      <tr className="form-group">
                        <td><label htmlFor="MaxPeople">MaxPeople</label></td>
                        <td><Field id="MaxPeople" name="MaxPeople" type="text" className="form-control" />
                          <ErrorMessage name="MaxPeople" component="div" className="text-red" /></td>
                      </tr>
                      <tr className="form-group">
                        <td><label htmlFor="Type_Service">Type_Service</label></td>
                        <td><Field id="Type_Service" name="Type_Service" type="text" className="form-control" />
                          <ErrorMessage name="Type_Service" component="div" className="text-red" /></td>
                      </tr>
                      <tr>
                        <td><label htmlFor="Standard">Standard</label></td>
                        <td><Field id="Standard" name="Standard" type="number" className="form-control" />
                          <ErrorMessage name="Standard" component="div" className="text-red" /></td>
                      </tr>
                      <tr>
                        <td><label htmlFor="Description">Description</label></td>
                        <td> <Field id="Description" name="Description" type="text" className="form-control" />
                          <ErrorMessage name="Description" component="div" className="text-red" /></td>
                      </tr>
                      <tr>
                        <td><label htmlFor="Pool">Accompanied service:</label></td>
                        <td><label> <Field type="checkbox" name="Pool" value={service.Pool} /> Pool </label>
                          <label> <Field type="checkbox" name="Pool" value={service.Floor} /> Floor </label>
                          <label> <Field type="checkbox" name="Pool" value={service.Free} /> Free </label></td>
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
            <form>
              <div className="modal-header" style={{ background: '#260246', color: 'white' }}>
                <h4 className="modal-title">Edit Employee</h4>
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
              </div>
              <div className="modal-body" style={{ color: 'black' }}>
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
                <input style={{ background: '#82817f' }} type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                <input style={{ background: '#cda45e' }} type="submit" className="btn btn-info" defaultValue="Save" />
              </div>
            </form>
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
export default Service;