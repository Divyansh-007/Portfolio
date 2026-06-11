import './work-card.css';

const WorkCard = ({ work, location }) => {
  return (
    <div className="work-entry">
      <div className="work-entry-header">
        <span className="work-entry-prompt">{'> '}</span>
        <span className="work-entry-title">{work.designation}</span>
        {!work.endDate && (
          <span className="work-entry-active">{' [ACTIVE]'}</span>
        )}
      </div>
      <div className="work-entry-meta">
        {'  '}
        {work.joinDate} → {work.endDate ? work.endDate : 'Present'} | {location}
      </div>
      <div className="work-entry-divider">
        {'  ─────────────────────────────'}
      </div>
      <ul className="work-entry-desc">
        {work.description.map((point, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
        ))}
      </ul>
      <div className="work-entry-tags">
        {'  tags: '}
        {work.tags.map((tag, index) => (
          <span key={index} className="work-tag">
            [{tag}]
          </span>
        ))}
      </div>
    </div>
  );
};

export default WorkCard;
