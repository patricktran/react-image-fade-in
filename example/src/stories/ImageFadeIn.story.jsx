import React from 'react';
import { storiesOf, forceReRender } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, object, number } from '@storybook/addon-knobs';
import './styles.css';

import ImageFadeIn from 'react-image-fade-in';


const withReRender = (component) => {

    const reRender = () => {
        forceReRender();
    };

    return <React.Fragment>
        <strong>Click on the 'Knobs' tab below, make changes, and click the 're-render' button!</strong>
        <br /> <br />
        <button onClick={reRender}>Click me to re-render</button>
        <br /> <br />
        {component}
    </React.Fragment>
}

storiesOf('ImageFadeIn', module)
    .add('with image', () => {

        return withReRender(
            <ImageFadeIn
                width="350px"
                onClick={action('image clicked!')}
                opacityTransition={number('opacityTransition (seconds)', 3)}
                src={text('src', "https://raw.githubusercontent.com/patricktran/react-image-fade-in/master/nismo-dog.jpg")} />);
    })
    .add('load as background image', () => {

        return withReRender(<ImageFadeIn
            style={object('style', {
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: "350px",
                height: "440px"
            })}
            opacityTransition={number('opacityTransition (seconds)', 3)}
            loadAsBackgroundImage={boolean('loadAsBackgroundImage', true)}
            src={text('src', "https://raw.githubusercontent.com/patricktran/react-image-fade-in/master/nismo-dog.jpg")} />);
    })
