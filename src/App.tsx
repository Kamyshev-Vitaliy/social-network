import React, {FC} from 'react';
import style from './App.module.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Content} from "./Components/Content/Content";
import {Container} from "./Components/Container/Container";


export const App: FC = () => {
  return (
    <div className={style.wrapper_app}>
      <Container>
        <Header/>
        <Navbar/>
        <Content/>
      </Container>
    </div>
  );
}

