---
title: "A new website! And a loveletter to astro."
layout: ../../../layouts/Blog.astro
pubDate: 1714354964056
description: "With a new design and better functionality, falsefox.dev is BACK with a fresh coat of paint."
author: "falsefox"
tags: ["webdev", "blog", "astro"]
image: ""
---

i was never sastisfied with any of my personal websites. I've been through several, several itterations and designs over several years but never ended up with something i liked, until now.

## Motivation

I spent a lot of time troubleshooting and researching, for example my PBX project was hellish thanks to poor documentation and propreitary software. simply put, I want to document all my findings and exactly how I did it so no one has to suffer as I did.

I think in general the state of information on the internet sucks, we especially have discord and AI to blame. so much information is just inaccessible to search engines due to being on discord servers, and AI generated articles dominate search results as well. I just want to do my part and help a little.

but, in order to create a high quality articles with high-quality information, we need a high quality website.

## Design
what seperates good developers from 10x developers is the ability to shamelessly be "inspired" by other people's code, so that's what I did. [Taniarascia's website](https://www.taniarascia.com/) (she mades great content, check her out) was my main inspiration for layout, but I made it my own. 

I used Astro as my framework, MPLUS and Red Hat Mono as fonts, and Chicago 95 & Devicon for icons.

For comments, i used utterances. having comments available for blogs is great, but there's just so much to worry about, like
- security
- moderation
- the fact no one wants to make an account for a personal blog
- and storage

thankfully, utterances covers all these bases (I doubt anyone interested in an autistic trans furry's computer science blog wouldn't have a github account already) so we can have comments without any of the downsides.

I also put in some cool features, such as
```js
let mood = "code blocks like this"
```

## I love astro!
Hands down, [astro](https://astro.build/) is my favorite framework for static websites. From the perspective of classic HTML/CSS/JS, it's a huge upgrade, featuring components, layouts, inline css (with support for preprocessors), support for NPM modules, typesript support, markdown integration, and compatibility with all major javascript frameworks. and compared to React, it's super fast and a joy to write with.

The [markdown support](https://docs.astro.build/en/guides/markdown-content/) is what i like the most, and it's what makes this blog possible.

However.. if I need a little more power and really need the benefits of javascript, i'm still gonna go with NextJS, but for almost every project, astro is the go to.

## Conclusion
I'm excited to start writing on my fancy new blog. Hopefully I get to help some other autistic teenagers out and make some friends in the comment sections of my posts. I'll see you all later!

