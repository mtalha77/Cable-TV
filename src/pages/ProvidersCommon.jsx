import React from "react";
import "../styles/ProvidersCommon.css";

const ProvidersCommon = ({ title, heading, description, imageSrc }) => {
  return (
    <div className="ProvidersCommon-provider">
      <div className="provider-content">
        <div className="row-provider" >
          {/* <div className="col-6"> */}
          <div className="provider-LeftSide">
            <img  className='provider-leftSide-img'src={imageSrc} alt="" />
          </div>
          {/* </div> */}
          {/* <div className="col-6"> */}
          <div className="provider-RightSide">
            <h2 className="title-provider-common">{title}</h2>
            <h2 className="heading-provider">{heading}</h2>
            <p className="description-provider">{description}</p>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvidersCommon;
