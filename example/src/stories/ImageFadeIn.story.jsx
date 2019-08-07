import React from "react";
import { storiesOf, forceReRender } from "@storybook/react";
import { text, boolean, object, number } from "@storybook/addon-knobs";
import "./styles.css";

import ImageFadeIn from "react-image-fade-in";

const withReRender = component => {
  const reRender = () => {
    forceReRender();
  };

  return (
    <React.Fragment>
      <strong>
        Click on the 'Knobs' tab below, make changes, and click the 're-render'
        button!
      </strong>
      <br /> <br />
      <button onClick={reRender}>Click me to re-render</button>
      <br /> <br />
      {component}
    </React.Fragment>
  );
};

storiesOf("ImageFadeIn", module)
  .addWithJSX("with image", () => {
    return withReRender(
      <ImageFadeIn
        width="350px"
        opacityTransition={number("opacityTransition (seconds)", 3)}
        src={text(
          "src",
          "https://raw.githubusercontent.com/patricktran/react-image-fade-in/master/nismo-dog.jpg"
        )}
      />
    );
  })
  .addWithJSX("load as background image", () => {
    return withReRender(
      <ImageFadeIn
        style={object("style", {
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: "350px",
          height: "440px"
        })}
        opacityTransition={number("opacityTransition (seconds)", 3)}
        loadAsBackgroundImage={boolean("loadAsBackgroundImage", true)}
        src={text(
          "src",
          "https://raw.githubusercontent.com/patricktran/react-image-fade-in/master/nismo-dog.jpg"
        )}
      />
    );
  })
  .addWithJSX("load as background image with children", () => {
    return withReRender(
      <ImageFadeIn
        style={object("style", {
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: "350px",
          height: "440px",
          display: "flex"
        })}
        opacityTransition={number("opacityTransition (seconds)", 3)}
        loadAsBackgroundImage={boolean("loadAsBackgroundImage", true)}
        src={text(
          "src",
          "https://raw.githubusercontent.com/patricktran/react-image-fade-in/master/nismo-dog.jpg"
        )}
      >
        <div
          style={{
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: "auto",
            fontWeight: "700"
          }}
        >
          <div>
            Hello there...
            <br />
            I'm a child!
          </div>
        </div>
      </ImageFadeIn>
    );
  });
