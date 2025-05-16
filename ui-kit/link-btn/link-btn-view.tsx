import type { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import cn from "classnames";
import Image from "next/image";
import styles from "./link-btn-view.module.css";

export const LinkBtnView = ({
  children,
  href,
  className,
  color = "primary",
}: LinkBtnViewProps) => {
  return (
    <a className={cn(className, styles["link"], styles[color])} href={href}>
      <span>{children}</span>
      <LinkBtnIcon />
    </a>
  );
};

const LinkBtnIcon = () => {
  return <Image src="/arrow.svg" alt="" width={20} height={20} />;
};

export interface LinkBtnViewProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  color?: "primary";
}
