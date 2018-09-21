# react-image-fade-in

> Simple, no frills, component for fading in images. Just pass it a src prop.

[![NPM](https://img.shields.io/npm/v/react-image-fade-in.svg)](https://www.npmjs.com/package/react-image-fade-in) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-image-fade-in
```

## Usage

```jsx
import React, { Component } from 'react'

import ImageFadeIn from 'react-image-fade-in'

class Example extends Component {
  render () {
    return (
      <ImageFadeIn src={imageSrc} />
    )
  }
}
```

### Props

This a list of props that you can pass down to the component:

| Property | Description | Default value | Type | Required |
| -------- | ----------- | ------------- | ---- | -------- |
| `src`  |  image source url |  | string | yes
| `loadAsBackgroundImage`  | if false, renders as an IMG tag. If true, renders a DIV with image as the background-image (style css)  | false | bool | 
| `opacityTransition`  | Duration of the fade in, in seconds (s)  | 0.5s | number | 
| `onClick` | onClick handler |  | function |

## License

MIT © [patricktran](https://github.com/patricktran)
