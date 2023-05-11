import "../../index.css";
import Container from "../layout/Container";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import Section from "../layout/Section";
import { navigate } from "../../router";

export default function NavBar(): JSX.Element
{
    return (<>
        <Section id={"navbar-top"} className={"bg-black h-[80px] w-full"}>
            <Container>

                <div className={"flex flex-row justify-center items-between"}>
                    <div className={"flex flex-col w-[50%]"}>
                        <h1 className={"uppercase font-fat"}>AI</h1>
                    </div>
                    <div className={"flex flex-col w-[50%] justify-center items-end"}>

                        <ul>
                            <li className={"inline-block"}>
                                <button className={"bg-transparent"} onClick={() => navigate("index")}>
                                    Home
                                </button>
                            </li>
                            <li className={"inline-block"}>
                                <button className={"bg-transparent"} onClick={() => navigate("funding")}>
                                    Funding
                                </button>
                            </li>
                            <li className={"inline-block"}>
                                <button className={"bg-transparent"} onClick={() => navigate("about")}>
                                    About
                                </button>
                            </li>
                            <li className={"inline-block"}>
                                <button className={"bg-transparent"} onClick={() => navigate("mission")}>
                                    Mission
                                </button>
                            </li>
                        </ul>

                    </div>
                </div>

            </Container>
        </Section>
    </>)
}