import "../../index.css";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";

export default function Component(): JSX.Element
{
    return (
        <div className={"w-[100%] min-h-[100%] overflow-hidden"}>
            <h1 className="text-center mx-auto text-3xl font-bold underline">
                Hello Vite! Hello ChatGPT! Hello React! Hello TailwindCSS!
            </h1>
        </div>
    )
}