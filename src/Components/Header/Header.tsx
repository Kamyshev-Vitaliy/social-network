import React, {FC} from "react";
import style from './Header.module.css';


export const Header: FC = () => {
  return (
    <div className={style.wrapper_header}>
      <header className={style.header}>
        <img src="https://cryptologos.cc/logos/aave-aave-logo.png" alt="logo" className={style.logo}/>
      </header>
    </div>
  );
};