import React from "react";
import {Col, Row} from "react-bootstrap";
import {
    DiReact,
    DiNodejs,
    DiGit, DiJava,
} from "react-icons/di";
import {SiSpring, SiTypescript, SiAngular, SiPostgresql, SiJavascript} from "react-icons/si";

function Techstack(): JSX.Element {
    return (
        <Row style={{justifyContent: "center"}}>
            <DiJava/>
            <>{' '}</>
            <SiSpring/>
            <>{' '}</>
            <SiJavascript/>
            <>{' '}</>
            <DiNodejs/>
            <>{' '}</>
            <SiTypescript/>
            <>{' '}</>
            <DiReact/>
            <>{' '}</>
            <SiAngular/>
            <>{' '}</>
            <SiPostgresql/>
            <>{' '}</>
            <DiGit/>
        </Row>
    );
}

export default Techstack;

