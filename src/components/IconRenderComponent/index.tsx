import React from "react";
import Father from 'feather-icons';

// types
import { IconRenderComponentInterface } from "./types";

function IconRenderComponent (props: IconRenderComponentInterface) {
    return <i className={props.className}
        dangerouslySetInnerHTML={{
            __html: Father.icons[props.iconName].toSvg(),
        }}
    />
}

export default IconRenderComponent;
