import cn from "classnames";
import type { PostRecord, PropsWithRecord } from "@/interfaces";
import {
  CardActions,
  CardContent,
  CardMedia,
  CardView,
  Divider,
  LikeView,
  LinkBtnView,
  MetadataView,
  Stack,
} from "@/ui-kit";
import styles from "./post-card-view.module.css";

/**
 * Отображение поста в виде карточки
 */
export const PostCardView = ({ record, className }: PostCardViewProps) => {
  return (
    <CardView className={cn(className, styles["post-card"])}>
      <CardMedia src={record.image} />
      <CardContent>
        <div className={styles["content-header"]}>
          <Stack divider={<Divider className="color-black-20" />}>
            <MetadataView className="color-black-30">
              {record.topic}
            </MetadataView>
            <MetadataView>{record.publicTime}</MetadataView>
          </Stack>
          <LikeView count={record.likeCount} />
        </div>
        <h2 className={styles["content-title"]}>{record.title}</h2>
        <p className={styles["content-body"]}>{record.body}</p>
      </CardContent>
      <CardActions>
        <MetadataView>{record.readTime}</MetadataView>
        <LinkBtnView href="#">Читать</LinkBtnView>
      </CardActions>
    </CardView>
  );
};

export interface PostCardViewProps extends PropsWithRecord<PostRecord> {
  className?: string;
}
