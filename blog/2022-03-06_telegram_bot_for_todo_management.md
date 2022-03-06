---
pagetitle: Building a Telegram bot for Todo management
author: Christoph Müller
keywords: [Telegram, Java, Bot]
---

For the longest time I have looked for a solution to manage todos. I have tried out a lot of different solutions from services like [Todoist](https://todoist.com/) and [Any.do](https://www.any.do/) to low tech solutions like [Todo.txt](http://todotxt.org/). Nothing really stuck for a long time. I have a couple of requirements for a todo system:

- Multi Platform (at least on android, iOS and desktop/web)
- Intuitive UI (it must be easy and low friction to create a new todo)
- Some kind of automatic management/organization/scheduling of todos

Thats basically it. I don't really need tags or projects or file upload or anything like that. For a long time Any.do was the closest contender, but it always had some weird pricing with some kind of perpetual 50% discount going on (*but it will end next week! yeah this time for real!*). I also was not to fond of the web version the UI could have used a bit more love. On the other hand the Any.do moment feature and their new grocery list feature I quite liked. The Any.do moment basically helps you to periodically review todos and sort them into buckets (**done**, **today**, **tomorrow**, **later**).

Since I was not really interested in purchasing the commercial version of Any.do (I was afraid I was not going to stick with it and wasting the yearly subscription) I went ahead and built my own minimal solution based on a telegram bot written in Java using this excellent [library](https://github.com/pengrad/java-telegram-bot-api) by pengrad. It fulfills my most important criteria:

- Telegram is cross platform
- It uses basic natural (german) language commands (e.g. "morgen", "heute", "nächste Woche")
- If a task has no deadline yet it will be scheduled for the next day at 10am

I can describe my todo using natural language and keywords (german only). This is robust to a certain degree. I can leave out the time or date or only use a weekday. A task without any recognized keyword will receive a deadline for the next day at 10am. If the deadline of a task is met I get a reminder message from the bot and I can easily postpone it or mark it as done. It does not work that well for lists (like shopping lists), but it is great for one off tasks. So I only really miss the grocery shopping list from Any.do.

![A basic interaction with the bot (excuse the german buttons meaning *done*, *tomorrow*, *later*)](./2022-03-06_telegram_bot_for_todo_management.assets/telegram-bot.png)


You can find the bot [here](https://t.me/todo_task_reminder_bot). There is no guarantee that this bot will work forever. I included the source code in a gist:

<script src="https://gist.github.com/raytracer/d334543fecc446232c8a45c1087a51b6.js"></script>
