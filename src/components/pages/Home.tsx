import "../../index.css";
import Axios from "axios";
import Container from "../layout/Container";
import Icons from "../icons/ReactIcons";
import NavBar from "../sections/NavBar";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import Section from "../layout/Section";
import dbConfig, { generateAuthHeaders, getAuthToken } from "../../../mongodb.config";
import { navigate } from "../../router";

export default function Component(): JSX.Element
{
    const buttonNavigate = useRef(new Object as HTMLButtonElement);
    const formSubmit = useRef(new Object as HTMLButtonElement);
    const formEmail = useRef(new Object as HTMLInputElement);

    const goto = (there:string) => navigate(there);

    const saveEmail = async (): Promise<any> => {

        const submitElem = formSubmit.current;
        const emailElem = formEmail.current;

        console.log("Trying to save " + emailElem.value + " to database...");
        const authToken = await getAuthToken();

        const query = "emails/create/0";
        const data = {
            "email": emailElem.value,
            "contacted": false,
            "timestamp": Date.now(),
        };
        const endpoint = dbConfig.api.endpoints.data[0];

        const result = await Axios.post(dbConfig.host + endpoint.path + query, data, { headers: generateAuthHeaders(authToken), })
        .then(response => {

            emailElem.value = "";
            emailElem.innerHTML = "";
            emailElem.innerText = "";

            console.log(response.data);
            return JSON.parse(JSON.stringify(response.data));
        }).catch(e => {

            console.error(e)
            return false;
        });


        return result;
    };

    return (<>

        <NavBar/>

        <Section id={"PageHero"} className={"bg-gradient bg-blend-hue text-white dark:text-white bg-white dark:bg-black min-h-[600px]"}>

            <Container>

                <h1 className={"font-bold font-fat text-center"} style={{
                        fontSize: "6rem",
                    }}>

                    AI

                    <span className={"font-extralight uppercase"} style={{
                        fontSize: "1.4rem",
                    }}>

                        <br />

                        <div className={"flex flex-row justify-center items-evenly bg-black text-white rounded-full p-0 my-6 mx-auto"}>
                            <input ref={formEmail} type="email" name="form-email" className={"w-[80%] m-0 p-0 bg-transparent border-none focus-within:border-none focus:border-none"}
                            placeholder={"ai@google.com"}>
                            </input>

                            <button ref={formSubmit} className={"border-none focus-within:border-none focus:border-none bg-transparent m-0 p-0w-[20%] transform transition-all rotate-90 hover:translate-x-4"} name={"form-submit"} onClick={saveEmail}>
                                <Icons.Actions.Send strokeColor={"currentColor"} strokeWidth={2} iconSize={"32"} fillColor={"transparent"} />
                            </button>
                        </div>

                    </span>

                </h1>

            </Container>

        </Section>

        <Section id={"ProductShowcase"} className={"bg-[#1e1e1e] h-[80vh]"}>

            <Container>

                <h2 className={"font-school text-center"}>Kickstarter Promotion</h2>

            </Container>

            <Container>

                <h2 className={"font-fancy text-center"}>Kickstarter Promotion</h2>

            </Container>

            <Container>

                <h2 className={"font-simple text-center"}>Kickstarter Promotion</h2>

            </Container>

            <Container>

                <h2 className={"font-fat text-center"}>Kickstarter Promotion</h2>

            </Container>

            <Container>

                <h2 className={"font-default text-center"}>Kickstarter Promotion</h2>
                <br></br>
                <p className={" font-default text-center"}>Lorem ipsum dipsum of a lotta pancakes.</p>

            </Container>

        </Section>
    </>);
}