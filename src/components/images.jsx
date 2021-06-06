import React, {Component} from 'react';
//import images from './images.jpeg'; 
class Image extends Component {
    constructor(props) {
	super(props);
    }
    render() {
	const imagewidth = <Image w='100'/>;
	const imageheight = <Image h='200'/>
	const imagesrc = <Image url='https://images.app.goo.gl/nsw5hzacEvGJa52Z8'/>
	const imagealt = <Image alter='Butterflies'/>
	return(
	    <React.Fragment>
		<h1>A React image project</h1>
		<img alt="Butterflies" />
	    </React.Fragment>
	)

    }
}

export default Image;
