import React, { useEffect, useState } from "react";
import { getListService, deleteServiceById } from "../service/ServiceService";

function Service() {
  const [serviceList, setServiceList] = useState([]);
  const [service, setService] = useState("");
  const [deleteService, setDeleteService] = useState(null);

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
      <div style={{ background: '#1a1814', height: '1000px' }}>

        <div className="container-fluid">
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title" >
                <div className="row">
                  <div className="col-sm-3">
                    <h2>LIST SERVICE</h2>
                  </div>
                  <div className="col-sm-6">
                    <a href="#addEmployeeModal" className="btn" style={{ background: '#cda45e' }} data-toggle="modal"><span>Add New Sevice</span></a>
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
                    <th>#</th>
                    <th>Name</th>
                    <th>Acreage</th>
                    <th>Costs</th>
                    <th>Max people</th>
                    <th>Type</th>
                    <th>Standard</th>
                    <th>Description</th>
                    <th>Pool</th>
                    <th>Floor</th>
                    <th>Free</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {serviceList.map((service) => (
                    <tr key={service.id}>
                      <td>{service.id}</td>
                      <td>{service.Name_Service}</td>
                      <td>{service.Acreage}</td>
                      <td>{service.Costs}</td>
                      <td>{service.MaxPeople}</td>
                      <td>{service.Type_Service}</td>
                      <td>{service.Standard}</td>
                      <td>{service.Description}</td>
                      <td>{service.Pool}</td>
                      <td>{service.Floor}</td>
                      <td>{service.Free}</td>
                      <td>
                        <a href="#editEmployeeModal" className="edit" title="Edit" data-toggle="modal"><i className="material-icons"></i></a>
                        <a href="#deleteEmployeeModal" className="delete" title="Delete" data-toggle="modal"><i className="material-icons"></i></a>
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
      <div id="addEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header" style={{ background: '#3a2918', color: 'white' }}>
                <h4 className="modal-title">Add Employee</h4>
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
                  <input className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Type service</label>
                  <input type="text" className="form-control" required />
                </div>
              </div>
              <div className="modal-footer">
                <input style={{ background: '#82817f' }} type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                <input style={{ background: '#cda45e' }} type="submit" className="btn btn-success" defaultValue="Add" />
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
              <div className="modal-header" style={{ background: '#3a2918', color: 'white' }}>
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
      <div id="deleteEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header" style={{ background: '#3a2918', color: 'white' }}>
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
export default Service;