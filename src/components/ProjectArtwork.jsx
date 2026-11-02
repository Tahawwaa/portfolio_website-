import Icon from './Icon.jsx'

function MarketplaceArt() {
  return (
    <div className="market-art">
      <div className="mock-browser">
        <div className="mock-toolbar"><span /><span /><span /><span className="mock-address">marketplace / discover</span></div>
        <div className="market-nav"><b>m<span>arket.</span></b><span>Discover &nbsp; Collections</span><Icon name="layers" size={12} /></div>
        <div className="market-content"><div><span className="mock-kicker">LESS SEARCHING. MORE FINDING.</span><h4>Your next<br />great find.</h4><span className="mock-cta">Explore collection ↗</span></div><div className="product-sculpture"><span /><span /><span /></div></div>
        <div className="market-mini-grid"><div /><div /><div /></div>
      </div>
      <div className="recommendation-chip"><span>✧</span><div>Made for you<small>Smart recommendations</small></div></div>
    </div>
  )
}

function VestaArt() {
  return (
    <div className="vesta-art">
      <div className="vesta-window">
        <div className="vesta-nav"><b>VESTA</b><span>ESSENTIALS / COLLECTION 01</span><span>↗</span></div>
        <div className="vesta-layout"><div className="vesta-typography"><span>THE EVERYDAY, RECONSIDERED.</span><h4>Quiet<br /><i>by design.</i></h4><span className="vesta-rule" /><small>Less, but better.</small></div><div className="fashion-scene"><div className="fashion-arch" /><div className="garment"><span /></div><span className="fashion-caption">FORM / FUNCTION</span></div></div>
        <div className="vesta-bottom"><span>TIMELESS. THOUGHTFUL. YOURS.</span><span>01 — 04</span></div>
      </div>
    </div>
  )
}

function FitnessArt() {
  return (
    <div className="fitness-art">
      <div className="fitness-heading"><span className="fitness-logo">r<span>/</span>b.</span><span className="mono">PROGRESS IS PERSONAL.</span></div>
      <div className="fitness-layout"><div className="fitness-score"><span className="mock-kicker">YOUR ONLY COMPETITION</span><h4>Yesterday.</h4><div className="fitness-bars">{[25, 42, 36, 62, 51, 75, 92].map((height, index) => <span key={index} style={{ height: height + '%' }} />)}</div><span className="fitness-period mono">M &nbsp; T &nbsp; W &nbsp; T &nbsp; F &nbsp; S &nbsp; S</span></div><div className="fitness-ring"><span><Icon name="arrow-up-right" size={30} /><small>ONE REP<br />BETTER.</small></span></div></div>
    </div>
  )
}

function ApiArt() {
  return (
    <div className="api-art">
      <div className="api-terminal">
        <div className="api-terminal-top"><span className="terminal-dots">● ● ●</span><span>task-manager / api</span><Icon name="terminal" size={13} /></div>
        <div className="api-command"><span>GET</span> /api/tasks <b>200 OK</b></div>
        <pre><span className="code-muted">{'{'}</span>{'\n'}{'  '}<span className="code-key">"data"</span>: {'[\n    {\n      '}<span className="code-key">"id"</span>: <span className="code-number">1</span>,{'\n      '}<span className="code-key">"title"</span>: <span className="code-string">"Build something good"</span>,{'\n      '}<span className="code-key">"status"</span>: <span className="code-string">"in_progress"</span>{'\n    }\n  ]\n'}<span className="code-muted">{'}'}</span></pre>
        <div className="api-terminal-footer"><span className="status-dot" /> CLEAN CODE. CLEAR RESPONSES.</div>
      </div>
    </div>
  )
}

export default function ProjectArtwork({ type }) {
  return (
    <div className={'project-artwork artwork-' + type} aria-hidden="true">
      <span className="art-grid" />
      {type === 'marketplace' && <MarketplaceArt />}
      {type === 'vesta' && <VestaArt />}
      {type === 'fitness' && <FitnessArt />}
      {type === 'api' && <ApiArt />}
      <span className="art-caption mono">PROJECT VISUAL STUDY</span>
    </div>
  )
}
