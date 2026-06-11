import './skill-card.css';

const SkillCard = ({ skill }) => {
  const proficiency = skill.proficiency ? skill.proficiency * 10 : 0;
  const filled = Math.round(proficiency / 10);
  const empty = 10 - filled;
  const bar = '█'.repeat(filled) + '░'.repeat(empty);

  return (
    <div className="skill-row">
      <span className="skill-icon">{skill.icon}</span>
      <span className="skill-name">{skill.name}</span>
      <span className="skill-bar">{bar}</span>
      <span className="skill-pct">{proficiency}%</span>
    </div>
  );
};

export default SkillCard;
