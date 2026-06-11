import './terminal-window.css';

const TerminalWindow = ({ children }) => {
  return (
    <div className="terminal-window">
      <div className="terminal-titlebar">
        <div className="terminal-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="terminal-title">divyansh@portfolio:~ — zsh</div>
        <div className="terminal-dots-spacer"></div>
      </div>
      <div className="terminal-content">{children}</div>
    </div>
  );
};

export default TerminalWindow;
