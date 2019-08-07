import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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

        const { src, loadAsBackgroundImage, opacityTransition, style, ...rest } = this.props;
        //add transition style
        let imageStyle = {
            opacity: '0'
        };

        imageStyle.transition = `opacity ${opacityTransition}s ease 0s`;

        return (<React.Fragment>
            {!loadAsBackgroundImage && (<img
                src={src}
                {...rest}
                style={this.state.loaded ? { ...style, ...imageStyle, ...imageLoadedStyle } : imageStyle} />)
            }{loadAsBackgroundImage && (<div
                {...rest}
                style={this.state.loaded ? { backgroundImage: `url('${src}')`, ...style, ...imageStyle, ...imageLoadedStyle } : imageStyle}>
                {this.props.children}
            </div>)
            }</React.Fragment>)
    }
}

ImageFadeIn.propTypes = {
  /** image source url.   */
  src: PropTypes.string.isRequired,
  /** if false, renders as an IMG tag. If true, renders a DIV with image as the background-image (style css). */
  loadAsBackgroundImage: PropTypes.bool,
  /** Duration of the fade in, in seconds (s). */
  opacityTransition: PropTypes.number,
  /** OnClick handler. */
  onClick: PropTypes.func,
}

ImageFadeIn.defaultProps = {
    loadAsBackgroundImage: false,
    opacityTransition: .5
}