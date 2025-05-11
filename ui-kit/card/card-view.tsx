import { ReactNode } from "react";
import cn from "classnames";
import styles from "./card-view.module.css";

export const CardView = ({ children, className }: CardViewProps) => {
  return <div className={cn(className, styles.card)}>{children}</div>;
};

export interface CardViewProps {
  children: ReactNode;
  className?: string;
}
