import { LikeIcon } from "./like-icon";
import styles from "./like-view.module.css";

export const LikeView = ({ count }: LikeViewProps) => {
  return (
    <div className={styles.like}>
      <span className={styles.text}>{count}</span>
      <LikeIcon className={styles.icon} />
    </div>
  );
};

interface LikeViewProps {
  count: number;
}
