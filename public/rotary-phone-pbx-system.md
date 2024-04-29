---
title: 'Using a rotary phone in 2024 + Building a PBX and VoIP system.'
layout: ../../../../layouts/Blog.astro
pubDate: 2024-01-10
description: 'A journey to get a rotary phone from goodwill to place and recieve phone calls in 2024. I ended up with my own enterprise-level phone system.'
author: 'falsefox'
tags: ["phone", "tech", "sysadmin"]
image: "/images/DSC07730.jpg"
---
# Origins

<img src="/images/PXL_20221023_003608416.MP.jpg" alt="my red rotary phone" max-height="200"/>

<img src="/images/PXL_20221023_201136168.MP.jpg" alt="my yellow-beige rotary phone" max-height="200"/>

About 7 months ago, I visited a goodwill and made an incredible find. Two pristine condition, 1979 model 500 telephones made under license by ITT, a biege-yellow and a red one, for $25. No way I was leaving without them, so i purchased both and put them in the back of my car.

I wanted to eventually connect my phones to a VOIP number, but never had the time until recently to figure it out, until a few days ago where I got a sudden urge to set them up.

### Part 1. Obtaining the equipment
<hr>

My first step was purchasing an analog telephone adaptor (ATA), a LAN accessible electronic device that you plug your phone into, it mimics functions you'd get from using an actual telephone network like a dial tone, and allows your phone to be interfaced by some other software we'll need.

<img src="/images/methods-call-number-rotary-dial-digit-pulses-series.gif">

I already knew the difference between pulse and touch tone dialing, and I knew that pulse-dialing had been replaced by touch-tone dialing a long time ago, so i'd need a compatible ATA.

A quick search engine query for pulse-dialing ATAs brought up [a post on classicrotaryphones.com](http://www.classicrotaryphones.com/forum/index.php?topic=20386.0) containing a list of compatible ATAs. I picked the Grandsteam HT502 because it's the first thing I found on ebay that was for around $20, had a listing that wasn't marked as untested (broken), and would be shipped soon.


Alternatively, I could've purchased a pulse to tone converter for my phone, but it costs upwards of $60, and you might need to modify your phone! The $20 HT502 was the cheapest option.
### Part 2. I needed a PBX.
<hr>
<img src="/images/DSC07728.JPG" alt="my HT502" max-height="200"/>

My pulse-dialing capable Grandsteam HT502 finally arrived from ebay. At this point, I naively expected the ATA to be capable of connecting to an online VoIP provider by itself and get my own phone number. 

This was not the case, I needed to have a private branch exchange (PBX) system which kinda acts like a phone system manager, providing tons of features like:
- Interactive menus/IVRs, which are those menus you get when calling a business where you dial one for opening hours, two for information and three for whatever.
- Multiple ATAs running multiple phones all with their own extensions
- Hotel style wakeup calls
- Voicemail
- Statistics and call logging
- [The telemarketer troll Lenny](https://www.youtube.com/watch?v=RRhRImp6kKQ)

It's possible I completely misunderstood how ATA/VoIP gateways work and could've directly connected it, i literally only have this experience as experience, but ultimately setting up the PBX was the right decision because it's COOL AS FUCK!

Yeah, this is something I wanted to do. So, I sought out to do so.
#### Part 3. Figuring out the PBX
<hr>

First of, HUGE shoutout to mike over at famicoman.com. [This series of blog posts saved my life](https://famicoman.com/2018/07/18/building-a-pbx-part-1-pbx-hardware/), I was honestly shocked to see someone else was in the exact same situation as me, had a spare raspberry pi 3, the exact same HT502 ATA i had purchased, and the same touch-tone and rotary phone models i have, and wanted to get it working with VoIP. 

I won't be repeating exact configuration steps in this blog post, as it would just be plagerism and i believe Famicoman deserves the honor (and the traffic to their site), so please follow their series if you want exact details.

So, my first step was to get my RPi3B up and running so i could flash Incredible PBX. Scouring my house for the outdated micro-usb power supply, I eventually found it and started flashing IncrediblePBX. 

<img src="/images/DSC07727.JPG" alt="my Raspberry Pi 3" max-height="200"/>

IncrediblePBX runs two very important pieces of software, [Asterisk](https://www.asterisk.org/) and [FreePBX](https://www.freepbx.org/). Aestrisk is an open source server for phone communications purposes, that runs the core of our PBX. FreePBX is an open source program that improves upon Aestrisk and adds a web-based GUI among other user experience improvements. Finally, IncrediblePBX packages all this software together, among other features, to be more convenient, so i'll be using that.

I installed the system and went into the CLI for the raspberry pi, used the default credentials of ``root`` and ``password``, and configured the raspberry pi and changed the passwords according to the [nerdvittles blog](https://nerdvittles.com/a-new-incredible-pbx-2027-image-for-the-raspberry-pi/).

After some hassling and following [mike's guide on configuring the pbx](https://famicoman.com/2018/07/28/building-a-pbx-part-2-configuring-incoming-outgoing-calls/) and [mike's guide on configuring the HT502 gateway](https://famicoman.com/2018/07/29/building-a-pbx-part-4-hooking-up-a-rotary-phone/), I got it mostly setup. I used Voip.MS like Mike aswell and loaded up $15 and got a cool phone number. 

### Part 4. Success!
<hr>

<img data-pagefind-meta="image[src]" src="/images/DSC07730.jpg" alt="drawing" max-height="200"/>

After getting everything setup, messing around with settings, enabling E911, making sure my CallerID is set up, i made my first phonecall to my own phone and called up some of my friends! It made me so happy to finally see it up and working, and I immediately got to screwing around. 

Because I have a full PBX, I can set up an IVR menu with a greating and a few extensions. 

we gotta humiliate the user and play some audio if they use an extension/menu option that doesn't exist:

<audio src="/images/foxivr_wrong.mp3" controls></audio>

and here's what that sounds like through 8KB/s compression (with a little bit of my greeting message as a treat)

<audio src="/images/s.wav" controls></audio>

and I also have some very high bitrate music. This one is 3334447733 (FIRE)

<audio src="/images/fireflies.wav" controls></audio>

literally hours of entertainment lie in configuring this PBX system.

in conclusion, this was a really fun project and I'm glad I went through with it. I hope I can expand my phone system in the future, maybe have a house-wide intercom system? I can dream. if you have any questions or comments, my email is **me@** then the domain of my website.