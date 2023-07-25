import React from "react";

function CreateContract() {
    return (
        <div>
            <div className="form-group">
                <label>Contract Number:</label>
                <input type="text" className="form-control" name="contractNumber" placeholder="Contract Number" required="required" />
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col">
                        <label>Start Date:</label>
                        <input type="date" className="form-control" name="startDate" placeholder="Start Date" required="required" /></div>
                    <div className="col">
                        <label>End Date:</label>
                        <input type="date" className="form-control" name="endDate" placeholder="End Date" required="required" /></div>
                </div>
            </div>
            <div className="form-group">
                <label>Deposit:</label>
                <input type="text" className="form-control" name="deposit" placeholder="Deposit" required="required" />
            </div>
            <div className="form-group">
                <label>Total Payment:</label>
                <input type="text" className="form-control" name="totalPayment" placeholder="Total Payment" required="required" />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-lg btn-block submit">Comfirm</button>
            </div>
        </div>
    );
}
