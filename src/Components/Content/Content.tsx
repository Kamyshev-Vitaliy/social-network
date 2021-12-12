import React, {FC} from "react";
import style from './Content.module.css';


export const Content: FC = () => {
  return (
    <div className={style.main_content}>
      <img src="https://technolift.com.ua/wp-content/uploads/2020/03/razrabotka.png" alt=""/>
      <div>
        <h3>Фото пользователя + описание</h3>
      </div>
      <div className={style.user}>
        <h3>Посты пользователя</h3>
        <div>
          <h4>New posts</h4>
        </div>
        <div>
          <p>пост 1</p>
        </div>
        <div>
          <p>пост 2</p>
        </div>
      </div>
    </div>
  );
}