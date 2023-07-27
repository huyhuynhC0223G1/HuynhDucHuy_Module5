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
      <div style={{ background: '#1a1814', height: '1000px' }}>
        <div className="container-fluid">
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-3">
                    <h2>LIST CONTRACT</h2>
                  </div>
                  <div className="col-sm-6">
                    <a href="#addContractModal" className="btn" style={{ background: '#cda45e' }} data-toggle="modal"><span>Add New Contract</span></a>
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
                        <a href="#editContractModal" className="edit" title="Edit" data-toggle="modal"><i className="material-icons"></i></a>
                        <a href="#deleteContractModal" className="delete" title="Delete" data-toggle="modal"><i className="material-icons"></i></a>
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
      <div id="addContractModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header" style={{ background: '#575041', color: 'white' }}>
                <h4 className="modal-title">Add Contract</h4>
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
              </div>
              <div className="modal-body " style={{ color: 'black' }}>
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
                  <input style={{ background: '#82817f' }} type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                  <input style={{ background: '#cda45e' }} type="submit" className="btn btn-success" defaultValue="Add" />
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
              <div className="modal-header" style={{ background: '#575041', color: 'white' }}>
                <h4 className="modal-title">Edit Contract</h4>
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
              </div>
              <div className="modal-body" style={{ color: 'black' }}>
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
                  <input style={{ background: '#82817f' }} type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                  <input style={{ background: '#cda45e' }} type="submit" className="btn btn-info" defaultValue="Save" />
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
              <div className="modal-header" style={{ background: '#575041', color: 'white' }}>
                <h4 className="modal-title">Delete Contract</h4>
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
export default Contract;