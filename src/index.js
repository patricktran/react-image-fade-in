import React, { PureComponent } from 'react';

const imageLoadedStyle = {
    opacity: '1'
};

export default class ImageFadeIn extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };

        this.componentMounted = false;
    }

    onImageLoad = () => {
        if (this.componentMounted) {
            this.setState({ loaded: true });
        }
    }

    componentDidMount() {
        const imgSrc = this.props.src;
        if (imgSrc) {
            //load image in a new window.Image and update local state when image is loaded
            let img = new window.Image();
            img.src = imgSrc;
            img.onload = this.onImageLoad;
            this.componentMounted = true;
        }
    }

    componentWillUnmount() {
        this.componentMounted = false;
    }

    render() {

        const { src, loadAsBackgroundImage, opacityTransition, ...rest } = this.props;
        //add transition style
        let imageStyle = {
            opacity: '0'
        };

        imageStyle.transition = `opacity ${opacityTransition} ease 0s`;

        return (<React.Fragment>
            {!loadAsBackgroundImage && (<img
                src={src}
                {...rest}
                style={this.state.loaded ? { ...imageStyle, ...imageLoadedStyle } : imageStyle} />)
            }{loadAsBackgroundImage && (<div
                {...rest}
                style={this.state.loaded ? { backgroundImage: `url('${src}')`, ...imageStyle, ...imageLoadedStyle } : imageStyle}>
            </div>)
            }</React.Fragment>)
    }
}

ImageFadeIn.defaultProps = {
    loadAsBackgroundImage: false,
    opacityTransition: ".5s"
}