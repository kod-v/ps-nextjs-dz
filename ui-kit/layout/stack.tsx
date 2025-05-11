import { Children, cloneElement, ReactElement, ReactNode } from "react";
import cn from "classnames";
import { Divider } from "../divider";
import styles from "./stack.module.css";

const defaultDivider = <Divider />;

/**
 * Список с разделителем
 * Сейчас это только горизонтальный список
 */
export const Stack = ({
  children,
  divider = defaultDivider,
  spacing = 0,
}: StackProps) => {
  return (
    <div className={cn(styles["stack"], styles[`spacing-${spacing}`])}>
      {divider ? joinChildren(children, divider) : children}
    </div>
  );
};

interface StackProps {
  children: ReactNode;
  divider?: false | ReactElement;
  spacing?: 0 | 1 | 2 | 3 | 4;
}

/**
 * Идея отсюда
 * https://github.com/mui/material-ui/blob/master/packages/mui-system/src/Stack/createStack.tsx#L53
 */
function joinChildren(children: ReactNode, separator: ReactElement<unknown>) {
  const childrenArray = Children.toArray(children).filter(Boolean);

  return childrenArray.reduce<ReactNode[]>((output, child, index) => {
    output.push(child);

    if (index < childrenArray.length - 1) {
      output.push(cloneElement(separator, { key: `separator-${index}` }));
    }

    return output;
  }, []);
}
