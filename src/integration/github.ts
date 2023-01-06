import * as jsyaml from 'js-yaml';

const API_NAME = 'https://api.github.com/users/{username}';

export async function fetchNameData(username: string) {
    const endpoint = API_NAME.replace('{username}', username);
    const res = await fetch(endpoint
    );
    const dataName = await res.json();
    return dataName;
}

export async function fetchAllUserRepos(username: string) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await response.json();
    return data;
}

export async function findReposWithYmlFile(username: string, ymlFilename: string) {
    const repos = await fetchAllUserRepos(username);
    const result = [];
    for (const repo of repos) {
        const response = await fetch(`https://api.github.com/repos/${username}/${repo.name}/contents`);
        const data = await response.json();
        for (const file of data) {
            if (file.name === 'portfolio.yml') {
                result.push(repo);
            }
        }
    }
    return result;
}

export async function fetchYmlFile(username: string, repoName: string, filePath: string) {
    const response = await fetch(`https://api.github.com/repos/${username}/${repoName}/contents/${filePath}`);
    const data = await response.json();
    return data;
}

export async function parseYml(ymlString: string) {
    return jsyaml.load(ymlString);
}


export async function fetchYmlDataForRepos(username: string, repos: Array<{ name: string }>, ymlFilename: string) {
    const result = [];
    const ymlFiles = await findReposWithYmlFile(username, ymlFilename);

    for (const repo of ymlFiles) {
        if (ymlFiles.length > 0) {
            const ymlFile = await fetchYmlFile(username, repo.name, ymlFilename);
            const ymlContent = atob(ymlFile.content);
            const ymlData = await parseYml(ymlContent) as { title: string, description: string, project_url: string, repo: string, owner: string, image_list: string[] };
            result.push(ymlData);
        }
    }
    return result;
}