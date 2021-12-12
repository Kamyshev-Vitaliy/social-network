import {FC} from "react";
import style from './Container.module.css';


export const Container: FC = ({children}) => {
  return (
    <div className={style.wrapper_container}>
      {children}
    </div>
  );
};