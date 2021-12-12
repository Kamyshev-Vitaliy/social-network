import React, {FC} from "react";
import style from './Navbar.module.css';

export const Navbar: FC = () => {
  return (
    <nav className={style.nav_panel}>
      <div>
        <a href="">Profile</a>
      </div>
      <div>
        <a href="">Messages</a>
      </div>
      <div>
        <a href="">News</a>
      </div>
      <div>
        <a href="">Posts</a>
      </div>
      <div>
        <a href="">Settings</a>
      </div>
    </nav>
  );
};