import React from "react";
import Separator from "../../common/separator";
import { LicenseData, GroupedLicenseData } from "../../data/certificates";
import LicenseCard from "./license-card";
import LicenseGroup from "./license-group";
import "./license.css";

const Licenses = () => {
  // You can switch between grouped and ungrouped view by changing this variable
  const useGroupedView = true;

  const data = LicenseData;
  const groupedData = GroupedLicenseData;

  return (
    <div className="certificates">
      <Separator />
      <label className="section-title">Licenses & Certificates </label>
      <div>
        {useGroupedView
          ? // Grouped view with headings
            groupedData.map((group) => {
              return <LicenseGroup group={group} key={group.groupTitle} />;
            })
          : // Original ungrouped view
            data.map((license) => {
              return <LicenseCard license={license} key={license.id} />;
            })}
      </div>
    </div>
  );
};

export default Licenses;
