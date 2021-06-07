import React from "react";
import Button from "Buttons.js";

function Image({source, w, h, alt = "Butterflies"}){
    return (
	<React.Fragment>
	    <img
	src={source}
	alt={alt}
	style={{
	    maxWidth: {w},
	    height: {h}

		}}
	    />
	    <Button value="Increase Size"/>
	    <Button value="Decrease Size"/>
	    </React.Fragment>
    );
}

export default Image;
