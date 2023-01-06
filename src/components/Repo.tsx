import React, {useEffect, useState} from 'react';
import {Button, Card, Modal} from "antd";
import GetReadme from "./GetReadme";

const {Meta} = Card;

interface Props {
    repoTitle: string;
    repoDescription: string;
    repoProjectUrl: string;
    repoName: string;
    repoOwner: string;
    repoImageList: string[];
}

function Repo({repoTitle, repoDescription, repoProjectUrl, repoImageList, repoName, repoOwner}: Props) {
    const [visible, setVisible] = useState(false);
    repoImageList = repoImageList || [];

    return (<>
            <Card
                hoverable
                style={{width: 240, height: 350}}
                cover={<img alt="example" src={repoImageList[0]}/>}
                onClick={() => setVisible(true)}
            >
                <Meta title={repoTitle} description={repoDescription}/>
            </Card>
            <Modal
                title={repoTitle}
                width={1200}
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
            ><p>
                {repoImageList.map((image, index) => (
                    <img key={index} src={image} alt="example" width="320" height="180"/>
                ))}
            </p>
                <p><GetReadme owner={repoOwner} repo={repoName}/></p>
                <Button type="primary" onClick={() => window.location.assign(repoProjectUrl)}>Project page</Button>
            </Modal>
        </>
    );
}

export default Repo;