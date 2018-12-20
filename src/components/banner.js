import React from 'react';

import image2 from '../images/2.jpg'
import image3 from '../images/3.png'
import image4 from '../images/4.gif'
import image5 from '../images/5.jpg'
import './styles/bannerStyle.css'

const image=[image2,image3,image4,image5]

const Arrow = ({ direction, clickFunction, glyph }) => (
	<div className={ `slide-arrow ${direction}` } onClick={ clickFunction }>{ glyph } </div>
);

const ImageSlide = ({ url }) => {
	const styles = {
		backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        height:'400px',
        width:'100%',
		backgroundPosition: 'center'
	};
	
	return (
		<div className="image-slide" style={styles}></div>
	);
}


class Carousel extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
			currentImage: 0
		};
		
  this.previousSlide=this.previousSlide.bind(this);
  this.nextSlide=this.nextSlide.bind(this);
    }
    
	previousSlide () {
		const lastIndex = image.length - 1;
		const { currentImage } = this.state;
		const shouldResetIndex = currentImage === 0;
		const index =  shouldResetIndex ? lastIndex : currentImage - 1;
		
		this.setState({
			currentImage: index
		});
	}
	
	nextSlide () {
		const lastIndex = image.length - 1;
		const { currentImage } = this.state;
		const shouldResetIndex = currentImage === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImage + 1;

		this.setState({
			currentImage: index
		});
	}
	
    render()
    {
        return (

            <div className="carousel">
            <Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
            <ImageSlide url={ image[this.state.currentImage] } />
            <Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
        </div>
        )
    }


}

export default Carousel; 