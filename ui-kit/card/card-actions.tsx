import { type PropsWithChildren } from "react";
import cn from "classnames";
import styles from "./card-actions.module.css";

export const CardActions = ({ children, className }: CardActionsProps) => {
  return <div className={cn(className, styles.actions)}>{children}</div>;
};

export interface CardActionsProps extends PropsWithChildren {
  className?: string;
}
