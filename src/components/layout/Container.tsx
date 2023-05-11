import "../../index.css";
import React from "react";

export default function Container(
    props: {
        children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
    }
): JSX.Element
{
    return (
        <div className={"xs:w-p[90%] sm:w-[90%] md:w-[1000px] lg:w-[1000px] xl:w-[1000px] min-h-[20px] mx-auto"}>
            {props.children}
        </div>
    );
}