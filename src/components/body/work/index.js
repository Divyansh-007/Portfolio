import React from "react";
import "./work.css";
import Separator from "../../common/separator/index";
import { WorkData } from "../../data/workData";
import WorkCard from "./work-card";

const Work = () => {
  const data = WorkData;
  return (
    <div className="work">
      <Separator />
      <label className="section-title">Work Experience</label>
      <div className="work-list">
        {data.map((item, index) => {
          return <WorkCard work={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Work;
