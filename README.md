[![npm](https://img.shields.io/npm/v/grootie.api.svg)](https://www.npmjs.com/package/grootie.api)
[![npm](https://img.shields.io/npm/dt/grootie.api.svg?maxAge=3600)](https://www.npmjs.com/package/grootie.api)
[![install size](https://packagephobia.now.sh/badge?p=grootie.api)](https://packagephobia.now.sh/result?p=grootie.api)

 
[![NPM](https://nodei.co/npm/grootie.api.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/grootie.api/)


# Grootie.api

## Installation
```
npm i grootie.api
```
Official wrapper for grootie.api. Very small install size with no external dependencies.


 

### Endpoints

| Function | Description |
| -------- | ----------- |
| `waifu` | Gives you a waifu image (NSFW) |
| `neko` | Gives you an neko image (NSFW) |
| `trap` | Gives you an image of nsfw but boy to boy (NSFW) |
| `blowjob` | Gives you an blowjob image (NSFW) |
| `anal` | Gives you an anal image (NSFW) |
| `boobs`  | Gives you an image of boobies 👀 (NSFW) |
| `doujin` | Gives you an doujin image (NSFW) |
| `feet` | Gives you an image of feet (NSFW) |
| `glasses` | Gives you an image of girls with glasses (NSFW) |
| `hentai` | Gives you an image of hentai (NSFW) |
| `hentaiass` | Gives you an image of hentai ass (NSFW) |
| `milf`  | Gives you an image of a milf (NSFW) |
| `maid` | Gives you an image of maid (NSFW) |
| `netorare` | Gives you an image of netorare (NSFW) |
| `paizuri` | Gives you an image of paizuri (NSFW) |
| `panties` | Gives you an image of panties (NSFW) |
| `rpgif` | Gives you an image/gif of random nsfw (NSFW) |
| `cumsluts` | Gives an image of cumsluts (NSFW) |
| `facts` | Gives you a random fact (GOTTEN FROM GOOGLE SO IDK) |
| `memes` | Gives you a random meme (SFW/NSFW) |

All of the endpoints use url (example: waifu.url)  except memes and facts, facts uses (facts.message) and memes has multiple (memes.title, memes.image, memes.url, memes.comments, memes.upvotes)`.




## Examples

Await/Async example
```js
const client = require('grootie.api');
const api = new client();

async function test() {
  console.log(await api.waifu());
}

test();
```
returns: 
```js
{"Authors":"LuxuryDev","url":"(IMAGE LINK)"}
```


