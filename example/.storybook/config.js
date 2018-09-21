
import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

//global decorator applied to every story
addDecorator(story => (
    <div style={{ margin: '30px 20px' }}>
        {story()}
    </div>
));

// Add the `withKnobs` decorator to add knobs support to your stories.
addDecorator(withKnobs);

const req = require.context(
    "../src",       // path where stories live
    true,           // recursive?
    /\.story.jsx$/, // story files match this pattern
);

function loadStories() {
    //optional - you can add additional stories using the require method
    //require('./static-story');
    req.keys().forEach(
        path => req(path)
    );
}

configure(loadStories, module);
