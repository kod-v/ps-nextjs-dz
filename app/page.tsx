import { type Metadata } from "next";
import type { PostRecord } from "@/interfaces";
import { PostCardView } from "@/feature-components";
import styles from "./page.module.css";
import { Stack } from "@/ui-kit";

export async function generateMetadata(): Promise<Metadata> {
  // Тут можно запросить данные из API

  return {
    title: "Главная страница",
  };
}

const mockRecordArray: PostRecord[] = [
  {
    id: 1,
    title: "Как работать с CSS Grid",
    body: "Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..",
    likeCount: 0,
    readTime: "3 минуты",
    publicTime: "1 месяц назад",
    topic: "Front-end",
  },
  {
    id: 2,
    title: "Как работать с CSS Flex",
    body: "Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..",
    likeCount: 2,
    readTime: "5 минут",
    publicTime: "2 месяца вперед",
    topic: "Front-end",
  },
  {
    id: 3,
    title: "Как работать с API",
    body: "Работа с API (Application Programming Interface) — это процесс взаимодействия с сервером или сервисом через специальные запросы. API позволяет программам обмениваться данными и функционалом.",
    likeCount: 9999,
    readTime: "3 часа",
    publicTime: "2 минуты 58 секунд назад",
    topic: "Back-end",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Stack data-name="list-of-post" divider={false} spacing={4}>
          {mockRecordArray.map((record) => (
            <PostCardView key={record.id} record={record} />
          ))}
        </Stack>
      </main>
    </div>
  );
}
