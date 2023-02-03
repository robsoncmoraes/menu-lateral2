import styles from "./Menu.module.css";
import Component from "next";


type ContentProps = {
  children: any;
};

export default function Content({ children }: ContentProps) {
  return <div className="page">{children}</div>;
}
