import React from "react";

function Image({source, w, h, alt = "Butterflies"}){
    return (
	    <img
	src={source}
	alt={alt}
	style={{
	    maxWidth: {w},
	    height: {h}

	}}
	/>
    );
}

export default Image;
