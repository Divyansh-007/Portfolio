import './terminal-prompt.css';

const TerminalPrompt = ({ command }) => {
  return (
    <div className="terminal-prompt">
      <span className="prompt-user">visitor</span>
      <span className="prompt-at">@</span>
      <span className="prompt-host">portfolio</span>
      <span className="prompt-separator">:~$ </span>
      <span className="prompt-command">{command}</span>
    </div>
  );
};

export default TerminalPrompt;
