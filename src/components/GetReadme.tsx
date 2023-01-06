import React, {useEffect, useState} from 'react';
import {marked} from 'marked';
import styles from "../../styles/Home.module.css";

interface Props {
    owner: string;
    repo: string;
}

function GetReadme({owner, repo}: Props) {
    const [readme, setReadme] = useState('');

    useEffect(() => {
        async function fetchReadme() {
            try {
                const API_README = 'https://api.github.com/repos/${owner}/${repo}/readme'
                const response = await fetch(
                    API_README.replace('${owner}', owner).replace('${repo}', repo),
                );
                const data = await response.json();
                const readmeContent = atob(data.content);
                const readmeHtml = marked(readmeContent);
                setReadme(readmeHtml);
            } catch (error) {
                // handle error
            }
        }

        fetchReadme();
    }, []);

    return (
        <div className={styles.mystyle}>
            {readme ? (
                <div dangerouslySetInnerHTML={{__html: readme}}/>
            ) : (
                <p>Loading README file...</p>
            )}
        </div>
    );
}

export default GetReadme;