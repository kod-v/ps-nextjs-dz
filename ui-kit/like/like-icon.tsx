import Image from "next/image";

export const LikeIcon = ({ className }: LikeIconProps) => {
  return (
    <Image
      className={className}
      src="/like-icon.svg"
      alt="like-icon"
      width={12}
      height={12}
    />
  );
};

interface LikeIconProps {
  className?: string;
}
