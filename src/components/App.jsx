import { useMediaQuery } from "@uidotdev/usehooks";
import { useLocalList, useDarkMode } from "../hooks";
import { useState, useRef } from "react";

import desktopBannerDark from '../assets/background-dark/bg-desktop-dark.jpg';
import desktopBannerLight from "../assets/background-light/bg-desktop-light.jpg";
import mobileBannerDark from "../assets/background-dark/bg-mobile-dark.jpg";
import mobileBannerLight from "../assets/background-light/bg-mobile-light.jpg";

import Header from './Header';
import TodoForm from './TodoForm';
import TodoInputSection from './TodoInputSection';
import TodoOutputSection from './TodoOutputSection';
import TodoMenuSection from "./TodoMenuSection";
import Footer from "./Footer";

import demoTodoList from "../demo/demoTodoList";

export default function App() {
  const [todoList, { set, pushHead, removeAt, updateAt }] = useLocalList('Todo List', demoTodoList);
  const [isThemeDark, setIsThemeDark] = useDarkMode(true);
  const isScreenSmall = useMediaQuery('(max-width: 576px)');
  const inputRef = useRef(null);
  const [whatItemsToDisplay, setWhatItemsToDisplay] = useState('all');

  const applyBannerImage = () => {
    if (isScreenSmall) {
      return isThemeDark ? mobileBannerDark : mobileBannerLight;
    }
    return isThemeDark ? desktopBannerDark : desktopBannerLight;
  }

  return (
    <div id="App" className="bg-neutral-light-veryLightGray dark:bg-neutral-dark-veryDarkBlue pt-20 mobileBig:pt-12" style={{backgroundImage: `url(${applyBannerImage()})`}}>
      <Header isThemeDark={isThemeDark} setIsThemeDark={setIsThemeDark}/>
      <TodoForm inputRef={inputRef} pushHead={pushHead}>
        <TodoInputSection
          inputRef={inputRef}
          isThemeDark={isThemeDark}
        />
        <TodoOutputSection 
          todoList={todoList} 
          whatItemsToDisplay={whatItemsToDisplay} 
          replaceListWith={set}
          updateItemAt={updateAt}
          removeItemAt={removeAt}
          isThemeDark={isThemeDark}
        />
        <TodoMenuSection
          todoList={todoList}
          replaceListWith={set} 
          whatItemsToDisplay={whatItemsToDisplay} 
          setWhatItemsToDisplay={setWhatItemsToDisplay}
          isScreenSmall={isScreenSmall}
        />
      </TodoForm>
      <Footer/>
    </div>
  )
}