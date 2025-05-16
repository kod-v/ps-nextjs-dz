import { type PropsWithChildren } from "react";
import cn from "classnames";
import styles from "./card-content.module.css";

export const CardContent = ({ children, className }: CardContentProps) => {
  return <div className={cn(className, styles.content)}>{children}</div>;
};

export interface CardContentProps extends PropsWithChildren {
  className?: string;
}
