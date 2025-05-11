import Image from "next/image";
import styles from "./card-media.module.css";

export const CardMedia = ({
  className,
  src = "/card-media-default.png",
}: CardMediaProps) => {
  return (
    <div className={styles.media}>
      <Image className={className} src={src} alt="" width={300} height={200} />
    </div>
  );
};

interface CardMediaProps {
  className?: string;
  src?: string;
}
