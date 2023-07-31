import React, { useEffect, useState } from "react";
import { getListService, deleteServiceById, getServiceById, createService, getListTypeService, getTypeServiceById, updateService } from "../service/ServiceService";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function Service() {
  const [serviceList, setServiceList] = useState([]);
  const [service, setService] = useState("");
  const [deleteService, setDeleteService] = useState(null);
  const [id, setId] = useState(null);

  const [typeServers, setTypeServers] = useState([]);
  const navigate = useNavigate;

  const closeAddModal = () => {
    const modal = document.getElementById('addModal');
    modal.style.display = 'none';
  }

  const getService = async () => {
    const data = await getListService();
    setServiceList(data);
  }

  const getTypeServer = async () => {
    const data1 = await getListTypeService();
    setTypeServers(data1);
  }
  const fetchService = async () => {
    const data = await getServiceById(id);
    console.log(data);
    setService(data);
  } 

  useEffect(() => {
    getService();
    getTypeServer();
    if (id) {
      fetchService();
    }
  }, [id])

  const handleDeleteService = async (id) => {
    await deleteServiceById(deleteService);

    setServiceList(serviceList.filter(s => s.id !== id));

    // setServiceList(serviceList.filter(service => service.id !== deleteService));
    setDeleteService(null);
    await Swal.fire({
      icon: "success",
      title: "Delete Successful !!!",
      timer: 2000
    })
  }


  const handleUpdate = async (value) => {
    await updateService(id, value);
    setService("");

    await Swal.fire({
      icon: "success",
      title: "Update Successful !!!",
      timer: 2000
    })
  }

  if (!typeServers) {
    return null;
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
                            <p class="card-text">Type Service: {service.Type_Service.nameTypeService}</p>
                            {/* <p class="card-text">{service.Standard}</p> */}
                            <p class="card-text">Description: {service.Description}</p>
                            <button href="#editModal" type="submit" onClick={() => setId(service.id)} className="edit" title="Edit" data-toggle="modal" >EDIT</button>
                            <button onClick={() => setDeleteService(service.id)} style={{ background: '#0f0e1b', color: 'white' }} href="#deleteModal" className="delete" title="Delete" data-toggle="modal">DELETE</button>
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
              initialValues={{
                 Name_Service: "", 
                 Acreage: "", 
                 Costs: "", 
                 MaxPeople: "",
                  Type_Service: "",
                   Standard: "", 
                   Description: "", 
                   image: "" 
                  }}
              validationSchema={yup.object({
                Name_Service: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(100, "at most 3 characters"),
                Acreage: yup.string().required("Acreage cannot be left blank").min(3, "At least 3 characters").max(20, "at most 3 characters"),
                Costs: yup.number().typeError("Enter number").required("Costs cannot be left blank"),
                MaxPeople: yup.number().typeError("Enter number").required("MaxPeople cannot be left blank"),
                image: yup.string().required("Image cannot be left blank"),
                Type_Service: yup.string().required("Type Service cannot be left blank"),
                Standard: yup.string().required("Standard cannot be left blank").min(3, "At least 3 characters").max(100, "at most 3 characters"),
                Description: yup.string().required("Description cannot be left blank").min(3, "At least 3 characters").max(300, "at most 3 characters"),
              })}

              onSubmit={async (value) => {
                const typeServiceById = await getTypeServiceById(
                  value.Type_Service
                );
                console.log(value.Type_Service);
                const newService = {
                  ...value,
                  Type_Service: typeServiceById
                }
                console.log(newService);
                createService(newService).then(() => {
                
        
                  Swal.fire({
                    icon: "success",
                    title: "Create Successful !!!",
                    button: "Aww yiss!",
                  })
                })
                navigate("/")


              }}>
              {({ isSubmitting }) => (
                <Form>
                  <div className="modal-header" style={{ background: '#260246', color: 'white' }}>
                    <h4 className="modal-title">Add Service</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                  </div>
                  <div className="modal-body" style={{ color: 'black', width: '100%' }}>
                    <table>
                      <tbody>
                        <tr className="form-group">
                          <td className="col-4"><label htmlFor="Name_Service">Name Service:</label></td>
                          <td className="col-8"><Field id="Name_Service" type="text" name="Name_Service" className="form-control" placeholder="ex: Villa A " />
                            <ErrorMessage name="Name_Service" component="div" className="text-red" /></td>
                        </tr>
                        <tr className="form-group">
                          <td className="col-4"><label htmlFor="Acreage">Acreage:</label></td>
                          <td className="col-8"><Field id="Acreage" name="Acreage" type="number" className="form-control" placeholder="ex: 200m2" />
                            <ErrorMessage name="Acreage" component="div" className="text-red" /></td>
                        </tr>
                        <tr className="form-group">
                          <td className="col-4"><label htmlFor="image">Image:</label></td>
                          <td className="col-8"><Field id="image" name="image" type="text" className="form-control" placeholder="ex:https://www.croatialuxuryrent.com/storage.jpg " />
                            <ErrorMessage name="image" component="div" className="text-red" /></td>
                        </tr>
                        <tr className="form-group">
                          <td className="col-4"><label htmlFor="Costs">Costs:</label></td>
                          <td className="col-8"><Field id="Costs" name="Costs" className="form-control" placeholder="ex: 450000 " />
                            <ErrorMessage name="Costs" component="div" className="text-red" /></td>
                        </tr>
                        <tr className="form-group">
                          <td className="col-4"><label htmlFor="MaxPeople">MaxPeople:</label></td>
                          <td className="col-8"><Field id="MaxPeople" name="MaxPeople" type="text" className="form-control" placeholder="ex: 10" />
                            <ErrorMessage name="MaxPeople" component="div" className="text-red" /></td>
                        </tr>
                        <tr className="form-group">
                          <td className="col-4"><label htmlFor="Type_Service">Type_Service:</label></td>
                          <td className="col-8">
                            <Field as="select" id="Type_Service " className="form-select" aria-label="Default select example" name="Type_Service">
                              <option value=''>Select</option>
                              {typeServers.length > 0 && typeServers.map((t) => {
                                return (
                                  <option key={t.id} value={t.id}>
                                    {t.nameTypeService}
                                  </option>
                                );
                              })}
                            </Field>
                            <ErrorMessage name="Type_Service" component="div" className="text-red" /></td>
                        </tr>
                        <tr>
                          <td className="col-4"><label htmlFor="Standard">Standard:</label></td>
                          <td className="col-8"><Field id="Standard" name="Standard" type="text" className="form-control" placeholder="ex: Luxury" />
                            <ErrorMessage name="Standard" component="div" className="text-red" /></td>
                        </tr>
                        <tr>
                          <td className="col-4"><label htmlFor="Description">Description:</label></td>
                          <td className="col-8"> <Field id="Description" name="Description" type="text" className="form-control" placeholder="ex: A luxury room with double bed, sea view" />
                            <ErrorMessage name="Description" component="div" className="text-red" /></td>
                        </tr>
                        <tr>
                          <td className="col-5"><label htmlFor="Pool">Accompanied service:</label></td>
                          <td className="col-7"><label> <Field type="checkbox" name="Pool" value={service.Pool} /> Pool </label>
                            <label> <Field type="checkbox" name="Pool" value={service.Floor} /> Floor </label>
                            <label> <Field type="checkbox" name="Pool" value={service.Free} /> Free </label></td>
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
      {/*edit*/}
      <div id="editModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <Formik
              initialValues={{
                Name_Service: service.Name_Service, Acreage: service.Acreage, Costs: service.Costs, MaxPeople: service.MaxPeople,
                Type_Service: service.Type_Service.nameTypeService, Standard: service.Standard, Description: service.Description, image: service.image
              }}
              validationSchema={yup.object({
                Name_Service: yup.string().required("Name cannot be left blank").min(3, "At least 3 characters").max(100, "at most 3 characters"),
                Acreage: yup.string().required("Acreage cannot be left blank").min(3, "At least 3 characters").max(20, "at most 3 characters"),
                Costs: yup.number().typeError("Enter number").required("Costs cannot be left blank"),
                image: yup.number().typeError("Enter number").required("image cannot be left blank"),
                MaxPeople: yup.number().typeError("Enter number").required("Max People cannot be left blank"),
                Type_Service: yup.string().required("Type Service cannot be left blank").min(3, "At least 3 characters").max(100, "at most 3 characters"),
                Standard: yup.string().required("Standard cannot be left blank").min(3, "At least 3 characters").max(100, "at most 3 characters"),
                Description: yup.string().required("Description cannot be left blank").min(3, "At least 3 characters").max(300, "at most 3 characters"),
              })}


              onSubmit={handleUpdate}
              enableReinitialize

            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="modal-header" style={{ background: '#260246', color: 'white' }}>
                    <h4 className="modal-title">Add Employee</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                  </div>
                  <div className="modal-body" style={{ color: 'black', width: '100%' }}>
                    <table>
                      <tbody>
                        <tr className="form-group">
                          <td className="col-4"><label htmlFor="Name_Service">Name Service:</label></td>
                          <td className="col-8"><Field id="Name_Service" type="text" name="Name_Service" className="form-control" />
                            <ErrorMessage name="Name_Service" component="div" className="text-red" /></td>
                        </tr>
                        <tr className="form-group">
                          <td className="col-4"><label htmlFor="Acreage">Acreage:</label></td>
                          <td className="col-8"><Field id="Acreage" name="Acreage" type="number" className="form-control" />
                            <ErrorMessage name="Acreage" component="div" className="text-red" /></td>
                        </tr>
                        <tr className="form-group">
                          <td className="col-4"><label htmlFor="image">Image:</label></td>
                          <td className="col-8"><Field id="image" name="image" type="text" className="form-control" />
                            <ErrorMessage name="image" component="div" className="text-red" /></td>
                        </tr>
                        <tr className="form-group">
                          <td className="col-4"><label htmlFor="Costs">Costs:</label></td>
                          <td className="col-8"><Field id="Costs" name="Costs" className="form-control" />
                            <ErrorMessage name="Costs" component="div" className="text-red" /></td>
                        </tr>
                        <tr className="form-group">
                          <td className="col-4"><label htmlFor="MaxPeople">MaxPeople:</label></td>
                          <td className="col-8"><Field id="MaxPeople" name="MaxPeople" type="text" className="form-control" />
                            <ErrorMessage name="MaxPeople" component="div" className="text-red" /></td>
                        </tr>
                        <tr className="form-group">
                          <td className="col-4"><label htmlFor="Type_Service">Type_Service:</label></td>
                          <td className="col-8"><Field id="Type_Service" name="Type_Service" type="text" className="form-control" />
                            <ErrorMessage name="Type_Service" component="div" className="text-red" /></td>
                        </tr>
                        <tr>
                          <td className="col-4"><label htmlFor="Standard">Standard:</label></td>
                          <td className="col-8"><Field id="Standard" name="Standard" type="text" className="form-control" />
                            <ErrorMessage name="Standard" component="div" className="text-red" /></td>
                        </tr>
                        <tr>
                          <td className="col-4"><label htmlFor="Description">Description:</label></td>
                          <td className="col-8"> <Field id="Description" name="Description" type="text" className="form-control" />
                            <ErrorMessage name="Description" component="div" className="text-red" /></td>
                        </tr>
                        <tr>
                          <td className="col-5"><label htmlFor="Pool">Accompanied service:</label></td>
                          <td className="col-7"><label> <Field type="checkbox" name="Pool" value={service.Pool} /> Pool </label>
                            <label> <Field type="checkbox" name="Pool" value={service.Floor} /> Floor </label>
                            <label> <Field type="checkbox" name="Pool" value={service.Free} /> Free </label></td>
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
            <form onSubmit={handleDeleteService}>
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