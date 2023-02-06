import item from "./Item";
//import {useState} from "react";

/*function Item() {
  const [isExpanded, setExpanded] = useState(false)
}*/
type SubmenuProps = {
  children: JSX.Element;
  title: string;
};

export function Submenu({ children, title }: SubmenuProps) {
  return (
    <div className="submenu">
      <div className="submenu-btn">{title}</div>
      <div className="submenu-content">{children}</div>
     </div>
    
  );
}

export default Submenu;
