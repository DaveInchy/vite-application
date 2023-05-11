import "../../index.css";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";

export default function Section(
    props: any | { children: JSX.Element[] }
): JSX.Element
{
    return (<div id={props.id} className={"w-[100%] flex flex-col justify-evenly items-center " + props.className?.toString()}>
        {props.children}
    </div>);
}