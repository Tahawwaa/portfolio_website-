export default function SectionHeading({ number, label, title, accent, children }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow mono"><span>{number} /</span> {label}</p>
        <h2>{title}<span className="muted-heading">{accent}</span></h2>
      </div>
      {children && <div className="section-heading-aside">{children}</div>}
    </div>
  )
}
