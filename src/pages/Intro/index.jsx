import React from "react";
import Game from "../../components/Game";
import TyppingPoint from "../../scripts/typingPoint";
import TypeText from "../../scripts/typpingEffect";
import Button from "../../components/Button";
import { useWindowWidth } from "../../hooks/useWindowWidth";

const Intro = (page, setPage) => {
    const windowWidth = useWindowWidth();
    return (
      <div className="intro">
        <div className="intro__wrapper wrapper">
          <div className="intro__content">
            <p className="intro__title">Hi, my name is<TyppingPoint/></p>
            <h1 className="intro__container">
              <span className="intro__name">Kurdyukov Alexey</span>
              <span className="intro__subtitle">
                <TypeText speed={400} words = {`I create solution with coding`}/>
              </span>
            </h1>
            <p className="intro__description">
              <TypeText words={`I am very curious and a self-driven person with a big passion for
              development in general. I'm a very positive and ego-free in approach
              to all aspect of my life, and I carry a strong work ethics with me
              every place I go. I'm the happiest when I am creating, learning,
              exploring and thinking on how to make things better.`} speed={35 }/>
            </p>
            <Button
              className="intro__button"
              onClick={() => {
                setPage("contacts");
              }}
            >
              Say Hello
            </Button>
          </div>
          {windowWidth && windowWidth>1200 && <Game/>}
        </div>
      </div>
    );
  };
export {Intro}