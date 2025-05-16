# Домашнее задание "Мой блог"

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Сначала запустите сервер разработки:

```bash
# перейти в папку
cd ./ci
# если ранее не копировали файл, то сделайте это
cp .next-blog-app.env.example .next-blog-app.env
# запустить контейнер
docker compose up -d --build
```

Откройте [http://localhost:3000](http://localhost:3000) в своём браузере, чтобы увидеть результат.

Вы можете начать редактировать страницу, изменив файл `app/page.tsx`. Страница автоматически обновляется по мере редактирования файла.

В этом проекте используется [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) для автоматической оптимизации и загрузки [Geist](https://vercel.com/font), нового семейства шрифтов для Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
