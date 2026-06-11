import { SkillData } from '../../data/skillData';
import SkillCard from './skillCard';
import './skills.css';

const Skills = () => {
  return (
    <div className="skills">
      {SkillData.map((category, index) => (
        <div className="skills-category" key={index}>
          <div className="skills-category-header">
            {'// '}
            {category.type}
          </div>
          <div className="skills-list">
            {category.list.map((skill, skillIndex) => (
              <SkillCard skill={skill} key={skillIndex} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
