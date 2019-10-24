console.log("코드 시작!");
const user = getUser(1);
const userCallback = getUserCallback(1, user => {
    getRepo(user.github, repo => {
        console.log(repo);
    })
})
console.log(user);
console.log("코드 종료!");

function getUser(id) {
    const users = [
        { id: 1, github: "kim" },
        { id: 2, github: "shin" },
    ];
    let user;
    setTimeout(() => {
        user = users.find(user => user.id === id);
    })
    return user;
}

function getUserCallback(id, callback) {
    setTimeout(() => {
        const user = users.find(user => user.id === id);
        callback(user);
    }, 2000);
}
function getRepo(github, callback) {
    const commits = [
        { commitID: 1, github: "kim" },
        { commitID: 2, github: "shin" },
    ];
    setTimeout(() => {
        const repo = users.find(user => user.github === github);
        callback(repo);
    }, 2000);
}
function getCommits(commitID, callback) {
    setTimeout(() => {
        const commit = commits.find(commit => commit.commitID === commitID)
        callback(commit);
    }, 2000);
}