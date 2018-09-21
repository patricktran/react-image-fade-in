import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';

import ImageFadeIn from 'react-image-fade-in';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome />);

storiesOf('ImageFadeIn', module)
    .add('with image', () => {

        return <ImageFadeIn 
        width="350px" 
        src="https://raw.githubusercontent.com/patricktran/react-image-fade-in/master/nismo-dog.jpg" />
    })
