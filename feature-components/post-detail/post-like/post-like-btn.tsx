import { useCallback } from "react";
import { LikeView } from "@/ui-kit";

/**
 * TODO: еще не готов
 *
 * Бизнес логика:
 * 1. Загрузить с сервера кол-во лайков поста
 * 2. Понять можно ли нажать на иконку, чтобы поставить лайк
 * 3. При клике отправить лайк на сервер
 */
export const PostLikeBtn = () => {
  const clickHandler = useCallback(() => {
    alert("Клик сработал");
  }, []);

  return (
    <button onClick={clickHandler}>
      <LikeView count={0} />
    </button>
  );
};
