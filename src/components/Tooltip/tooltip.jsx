import "./tooltip.css";

const Tooltip = ({ children, tooltipStyle, position, content }) => {
  if(!tooltipStyle){
    tooltipStyle = "tooltip--primary";
  }
  return (
    <div>
      <div className={`${tooltipStyle} ${position}`} content={content}>
        {children}
      </div>
    </div>
  );
};

export default Tooltip;