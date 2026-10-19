const express = require('express')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 3000

const githubData = {
    "login": "utkarsh1757",
    "id": 173991340,
    "node_id": "U_kgDOCl7lrA",
    "avatar_url": "https://avatars.githubusercontent.com/u/173991340?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/utkarsh1757",
    "html_url": "https://github.com/utkarsh1757",
    "followers_url": "https://api.github.com/users/utkarsh1757/followers",
    "following_url": "https://api.github.com/users/utkarsh1757/following{/other_user}",
    "gists_url": "https://api.github.com/users/utkarsh1757/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/utkarsh1757/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/utkarsh1757/subscriptions",
    "organizations_url": "https://api.github.com/users/utkarsh1757/orgs",
    "repos_url": "https://api.github.com/users/utkarsh1757/repos",
    "events_url": "https://api.github.com/users/utkarsh1757/events{/privacy}",
    "received_events_url": "https://api.github.com/users/utkarsh1757/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Utkarsh Rathore",
    "company": null,
    "blog": "",
    "location": "Bangalore, India",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 2,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-06-27T06:47:42Z",
    "updated_at": "2026-10-19T10:34:45Z"
}

app.listen(PORT, () => { console.log(`Server running at ${PORT}`) })

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/github', (req, res) => {
    res.json(githubData)
    // res.send(JSON.stringify(githubData))
})

app.get('/login', (req, res) => {
    res.send(`<h1>Login Page</h1>`)
})