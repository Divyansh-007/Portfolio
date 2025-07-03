import './skills.css';
import { SkillData } from '../../data/skillData';

import SkillCard from './skillCard';

const Skills = () => {
  const data = SkillData;
  return (
    <div className="skills">
      <label className="section-title">Skills</label>
      <div className="skills-container">
        {data.map((item, index) => {
          return (
            <div className="skills-section" key={index}>
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill, index) => {
                  return <SkillCard skill={skill} key={index} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
