import React from "react";
import { StepsCards } from "./StepsHIW.styles";
const StepsHIW = ( ) => {
    return (
        <>
            <div className="row steps d-flex justify-content-center align-items-center w-100 my-5">
                <div className="col-3 bg-primary " style={{height: "300px"}}></div>
                <div className="col-3 " style={{height: "300px"}}></div>
                <div className="col-3 bg-primary" style={{height: "300px"}}></div>
                <div className="col-3 " style={{height: "300px"}}></div>
                <div className="col-3 " style={{height: "300px"}}></div>
                <div className="col-3 bg-primary" style={{height: "300px"}}></div>
                <div className="col-3 " style={{height: "300px"}}></div>
                <div className="col-3 bg-primary" style={{height: "300px"}}></div>
            </div>

            <StepsCards>
                <div className="box">df</div>
                <div className="box">dsfg</div>
                <div className="box">sdfg</div>
                <div className="box">sfdg</div>
                <div className="box">sdfg</div>
                <div className="box">sdfg</div>
                <div className="box">sdfg</div>
                <div className="box">sfdg</div>
            </StepsCards>

        </>
    )
}

export default StepsHIW;

