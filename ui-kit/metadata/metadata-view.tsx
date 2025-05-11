import { type ReactNode } from "react";
import cn from "classnames";
import styles from "./metadata-view.module.css";

/**
 * Отображение темы, даты публикации и т.п.
 */
export const MetadataView = ({ children, className }: MetadataViewProps) => {
  return <span className={cn(className, styles.metadata)}>{children}</span>;
};

interface MetadataViewProps {
  children: ReactNode;
  className?: string;
}
