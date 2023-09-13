---
pagetitle: Choosing Services and Tools for a new Company
author: Christoph Müller
keywords: [Business, Company, SaaS, Tools]
---

I sometimes wonder how my company would look like if I were to rebuild it today. With the advent of new SaaS products and the experience with existing tools I ask myself what would I choose to build a company.
When creating a company the focus should obviously be on talking to (potential) customers, creating an MVP and finding product market fit with as few iterations as possible. But tools can help with this and it is of course also fun to explore new tools even if this is endeavor not always 100% productive. So with this short disclaimer out of the way lets talk about the different areas where a company could use tools:

- Code Repository / Continuous Integration / Build Server
- Knowledge Exchange (something like a wiki)
- Project Management
- Todos
- Communication 
- Basic Hosting + Domain Management
- Password / Secret Management
- Ticket System / Support
- Accounting / Bookkeeping / Marketing


## Code Repository + Continuous Integration

We at [Olyro](https://olyro.de) have tried quite a few things in this space from GitLab, Phabricator and Gitea to [GitBucket](https://gitbucket.github.io/). I have to say GitLab was by far the worst experience. The feature set is fine, but the performance and ressource use is a desaster. Upgrading it to prevent potential security risks is a massive amount of work. All in all would not recommend. Phabricator is dead so that is out of the question. GitBucket was quite nice if you are active in the Scala/JVM commnunity, but the performance was also not the best. When self hosting is mandatory I would lean towards Gitea, since it is quite fast and supports basic features. Integrating with CI [drone](https://drone.io) is a bit of work, but probably not more than setting up a GitLab worker.
Personally I would choose GitHub. I have used it privately and also with some of our customers. It works great and it provides CI through GitHub actions. That saves time that can be used to build the product. Self hosting would be cheaper, but I would make that trade off in favor of GitHub.
At Olyro we use just bare bones git via ssh + post commit hooks for CI (secured via basic unix tools). Not the smoothest experience, but it is basically unbreakable.

**Update**
Lately I have heard about [OneDev](https://github.com/theonedev/onedev). It looks promising and I like that it is written in Java, but I could not evaluate it yet for further use.


## Knowledge Exchange

The choices here are of course endless ranging from Notion and Obsidian to Confluence etc. I liked the features of Notion (especially the embedded databases), but I have to say the performance killed it for me, we eventually cancelled our subscription. In a technical company I would probably just use the GitHub wiki. We have built our own small markdown based wiki for Olyro that is suited to our needs (to support released versions of documents meeting ISO 9001 criteria). In a non-technical company I would probably choose Confluence or self host something like [XWiki](https://www.xwiki.org/).

## Project Management

Project management depends hugely on the nature of the company that is being managed. From GitHubs own new Issue System (currently in Beta) to something like ZenHub or the (in)famous JIRA platform. These platforms are mostly suited to technical companies. I would probably just stick with GitHub. JIRA is hard to beat feature wise. Basically every workflow can be modeled with JIRA so it makes sense that it is the market leader.
For non technical companies the choices are endless. I like the approach of nocode/lowcode platforms like Airtable/Seatable/Baserow etc. a lot. Even notion can be used for project management. I am quite fond of [Seatable](https://seatable.io/) for this kind of use case.

## Todos

We tried a lot of different options here. It is probably the point on my list where we are too small to give a good recommendation. For a while we stuck with Todoist. I don't love it, but it works. For our small quite heterogenous company however it was not worth it. But this is not a general problem I think. For my own needs I hand rolled a telegram bot as outlined [here](./2022-03-06_telegram_bot_for_todo_management.html). We use an issue tracker (Gitea) to track recurrent tasks. That covers most use cases for todos. For smaller tasks (e.g. take out the trash in the office ...) something like Todoist would be better suited, but these kinds of tasks are not common enough in our small company.

## Communication

Tools for everyday communication are probably the most used tools in any company. For text communication we used Telegram for a long time. I think it is really reliable tool that has great native UI clients. We use [whereby](https://whereby.com) for video communication. It has public rooms which is a great if you meet with customers and you cannot or don't want to schedule individual appointments. When it comes to value for money I think Microsoft Teams is quite a great option. You can get E-Mail + Teams + Office365 for a reasonable price. I think Microsoft really created a killer product here, even though I personally am not the greatest fan of the chat feature of Teams.
Another tool I have on my list is [Zulip](https://zulip.com) which is thread based so it could replace E-Mail to a certain extend.
At Olyro we have switched to (self hosted) Matrix for data protection / regulation reasons. The chat feature works quite well. Video Chat is still pretty unstable not yet ready for prime time as it relies on Jitsi.
What I personally really like for scheduling meetings with clients is [calendly](https://calendly.com).

## Hosting + Domain Management

For hosting we rely on Hetzner here at Olyro and I can wholeheartedly recommend them. We use their cloud as well as their dedicated servers. The only thing I miss is a S3 alternative. I would try to stay away from the big cloud providers unless you have a need to scale quickly and/or you are backed by an investor. 
For domain and email hosting we use domain factory. The price is quite good, but the web interface is not the best. I would probably choose [fastmail](https://fastmail.com) for mail and and a separate DNS service like [namecheap](https://namecheap.com) when I would build a new company.

## Password / Secret Management 

At Olyro we have no uniform solution for password / secret management. I would recommend [Bitwarden](https://bitwarden.com/) as it can also be self hosted. But other options like 1Password are fine too. To share secrets we have hand rolled our own "one time link" system so we and our customers can share secrets without being worried. I played around with solutions from Hashicorp (e.g. Vault) for more elaborate setups, but they are only powerful when combined with bigger cloud setups and I would try to avoid them in the beginning.

## Ticket System / Support 

I think the market here is quite bleak to be honest. There are not many self hosted options. We tried a few cloud based solutions like Zoho Desk. But most of them are not really suited for E-Mail based communication and can get quite expensive. We currently self host [osTicket](https://osticket.com) which has a lot of features, but still looks and behaves as if it would be from 2003. I have my eye on the support feature from the earlier mentioned OneDev which has great E-Mail support.

## Accounting / Bookkeeping / Marketing

At Olyro we actually build our own custom solution for this problem. We have a mini CRM for customers and invoice creation which evolved from a bash script that generates a PDF from LaTeX. I would **not** recommend doing that. It is quiet nice for customization, but it will take focus away from more urgent problems. I think a great comprimise would be to build something with a low code tool like Seatable. Another option would be to use a SaaS especially if it has Datev Unternehmen Online support. We in Germany are unfortunately bound by our tax lawyers when it comes to choosing tools in this area. If you use a SaaS make sure it has great support for your jurisdiction.
