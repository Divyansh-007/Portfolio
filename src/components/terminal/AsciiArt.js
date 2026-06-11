import './ascii-art.css';

const asciiName = `
 ____  _                            _
|  _ \\(_)_   __  _   _  __ _ _ __ | |__
| | | | \\ \\ / / / | | |/ _\` | '_ \\| '_ \\
| |_| | |\\ V /| |_| | (_| | | | | | | |
|____/|_| \\_/  \\__, |\\__,_|_| |_|_| |_|
               |___/
     _       _                   _
    | | __ _(_)_____      ____ _| |
 _  | |/ _\` | / __\\ \\ /\\ / / _\` | |
| |_| | (_| | \\__ \\\\ V  V / (_| | |
 \\___/ \\__,_|_|___/ \\_/\\_/ \\__,_|_|
`;

const AsciiArt = () => {
  return (
    <div className="ascii-art">
      <pre className="ascii-name">{asciiName}</pre>
      <div className="ascii-motd">
        <span className="motd-line">
          Welcome to my portfolio. Scroll to explore.
        </span>
        <span className="motd-line motd-sub">
          Backend Engineer | Node.js | Python | AWS | Docker
        </span>
      </div>
    </div>
  );
};

export default AsciiArt;
