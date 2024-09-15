import React from "react";
import Separator from "../../common/separator";
import { LicenseData } from "../../data/certificates";
import LicenseCard from "./license-card";
import "./license.css";

const Licenses = () => {
  const data = LicenseData;
  return (
    <div className="certificates">
      <Separator />
      <label className="section-title">Licenses & Certificates </label>
      <div>
        {data.map((license) => {
          return <LicenseCard license={license} key={license.id} />;
        })}
      </div>
    </div>
  );
};

export default Licenses;
