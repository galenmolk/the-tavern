import '../../css/shared/tooltip.css'

export default function Tooltip({text, children}) {
    return (
        <div className="tooltip-container">
            {children}
            <div className="tooltip-text">{text}</div>
        </div>
    );
}
