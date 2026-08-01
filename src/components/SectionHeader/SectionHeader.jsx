import './SectionHeader.css';

function SectionHeader({ eyebrow, title, children, align = 'center', className = '' }) {
  return (
    <div className={`section-header section-header-${align} ${className}`.trim()}>
      {eyebrow && <p className="section-header-eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {children && <div className="section-header-copy">{children}</div>}
    </div>
  );
}

export default SectionHeader;
