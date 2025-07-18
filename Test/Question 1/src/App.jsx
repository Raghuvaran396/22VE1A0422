import { useState } from 'react'
import './App.css'

function App() {
  const [url, setUrl] = useState('');
  const [customCode, setCustomCode] = useState('');
  const [shortened, setShortened] = useState([]);

  function handleShorten() {
    if (!url.trim()) return;
    let code = customCode.trim() ? customCode.trim() : Math.random().toString(36).substring(2, 8);
    const short = 'https://sho.rt/' + code;
    setShortened([{ original: url, short, code }, ...shortened]);
    setUrl('');
    setCustomCode('');
  }

  return (
    <div className="shortener-container" style={{ maxWidth: 500, margin: '40px auto', background: '#fff', padding: 32, borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
      <h2 style={{ textAlign: 'center' }}>URL Shortener</h2>
      <h3 style={{ textAlign: 'center' }}>Please Enter your URL</h3>
      <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
        <input
          type="text"
          value={url}
          onChange={e => setUrl(e.target.value)}
          placeholder="Paste your long URL here..."
          style={{ flex: 2, padding: 8, fontSize: 16, borderRadius: 4, border: '1px solid #ccc' }}
        />
        <input
          type="text"
          value={customCode}
          onChange={e => setCustomCode(e.target.value)}
          placeholder="Custom shortcode (optional)"
          style={{ flex: 1, padding: 8, fontSize: 16, borderRadius: 4, border: '1px solid #ccc' }}
        />
        <button
          onClick={handleShorten}
          style={{ padding: '8px 16px', fontSize: 16, background: '#27ae60', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }}
        >
          Shorten
        </button>
      </div>
      {shortened.length > 0 && (
        <div>
          <h4> Here is the Shortened URLs</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {shortened.slice(0, 5).map((item, idx) => (
              <li key={idx} style={{ marginBottom: 12, background: '#e9e9baff', padding: 12, borderRadius: 6 }}>
                <div><strong>Original:</strong> <a href={item.original} target="_blank" rel="noopener noreferrer">{item.original}</a></div>
                <div><strong>Short:</strong> <a href={item.short} target="_blank" rel="noopener noreferrer">{item.short}</a> <span style={{ color: '#888', fontSize: 12 }}>(code: {item.code})</span></div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App
