import {
  RiAncientGateFill,
  RiSendPlane2Fill,
  RiStackLine,
} from "react-icons/ri";

const Buttons = () => {
  const iconsList = ["RiAncientGateFill", "RiSendPlane2Fill", "RiStackLine"];
  const renderIcon = (icon: any, index: any) => {
    const Icon = icon;
    return (
      <div className="y" key={index}>
        <Icon />
      </div>
    );
  };

  return (
    <div className="d-flex align-items-center justify-content-end">
      {iconsList.map((icon, index) => renderIcon(icon, index))}
    </div>
  );
};

export default Buttons;
