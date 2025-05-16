import cn from "classnames";
import styles from "./divider.module.css";

export const Divider = ({ className }: DividerProps) => {
  return <span className={cn(className, styles.divider)}>·</span>;
};

interface DividerProps {
  className?: string;
}
