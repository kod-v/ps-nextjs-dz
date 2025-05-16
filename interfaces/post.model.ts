/**
 * TODO: перенести в другое место когда будет понятно какая модель используется
 */
export interface PostRecord {
  id: string | number;
  title: string;
  body: string;
  likeCount: number;
  readTime: string;
  publicTime: string;
  topic: string;
  image?: string;
}

/**
 * По умолчанию не всем нужна целиком вся модель
 */
export interface PropsWithRecord<T extends Partial<PostRecord>> {
  record: T;
}
