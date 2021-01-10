---
pagetitle: My favorite technology stack
author: Christoph Müller
keywords: [tech stack, java, javalin, typescript, blog]
---

At [Olyro](https://olyro.de) we built a lot of web applications. Usally consisting of a backend service and a SPA frontend. Over the years we went through quite a few technologies, but only a few really stuck with us:

- Postgres
- JVM - Java (>= 8)
- [Javalin](https://javalin.io/)
- [typescript-generator](https://github.com/vojtechhabarta/typescript-generator)
- TypeScript
- React

# Postgres

Postgres is a rock solid open-source database. Especially with the introduction of the json(b) types for columns it really expanded its range of possible use cases. The enum types are a great addition to reduce illegal states. Features like CTE (Common Table Expressions) make it a lot easier to query graph like structures. When it comes to connecting Postgres to the backend programming language there are of course the possibilities to use an ORM or a special Query-DSL. But after a few years of working with these technologies they usually fall apart at some time, they usually develop bad performance issues or do not support some Postgres feature that requires you to drop back to plain SQL in a normal String.

So I usually stick to plain SQL with prepared statements even if compile time checking and IDE support is lacking. A well written java DSL with support for a wide range of Postgres-SQL that composes well (e.g. can multiple queries/inserts be wrapped in a single transaction) and has a great API would be something that I am really interested in. So if someone has a suggestion, hit me up!

# JVM - Java (>=8)

While there are some properties of the JVM that I do not like (mostly its handling of the default maximum heap size and general memory consumption) I have really come to enjoy its great ecosystem from debuggers to profilers and the great garbage collector. Java as a language has also evolved to a point where I can really recommend using it. Sure the type system is still very OOP-heavy and could use some further inspiration from functional languages, but with features like lambdas, the Stream-API and records (14+ preview feature) it can really develop a nice flow when programming. Combine that with a great IDE experience (thanks to LSP now also in VS Code and (n)vim) and you got yourself a nice productive language with a static type system. A bonus point is that the hiring process is significantly simpler than say for a language like Scala even if that means that the range of java proficiency for applicants is of course much wider than that of Scala applicants and the filtering process needs to be a tad more sophisticated.

# Javalin

Javalin is finally a web "framework" to my test. It has very little overhead and magic behavior. You don't need annotations or inheritance. You just pass a lambda or a static method reference to the router. The method receives a context and returns a context. Now that is not perfect of course, separate request and response types would be preferable from a type safety standpoint, but it makes chaining these handlers to create middleware components really easy.

```java
app.get("/", ctx -> ctx.result("Hello World"));
```

What I like about it is that it does never stand in your way. It has convenience methods (e.g. ` ctx.bodyAsClass(class) `) to make your life easier, but you can always drop back to the bare-bones body (as a string) and headers (as a hashmap) if you need to. I like this so much more than all the old java enterprise technologies maybe because it reminds me of languages like go.

# typescript-generator

This little gem automatically generates typescript type definitions from your java classes. I more or less found it by accident once and have been a big fan of it ever since. It supports a wildcard syntax for classes and inner classes that you define in your `pom.xml` file. That makes it really easy to e.g. translate all classes in the `model` package. The classes should of course mostly be POJO classes, but I highly recommend checking it out.

# TypeScript

This goes without saying from the previous point, but I am a big TypeScript advocate. I think it hits the sweet spot between productivity, familiarity and type safety just perfectly. Sure languages like e.g. [elm](https://elm-lang.org/) may be better languages and support type features typescript never will (like code generation based on types, it is all just JS after all), but these other languages usually come with their own baggage and problems, small ecosystem and are difficult to hire for. Now I don't think I will be using it 20 years from now, but until web assembly really takes off and makes compile-to-JS unnecessary I see no reason to switch to a different frontend language (meanwhile [assembly script](https://www.assemblyscript.org/) makes life easier for high performance applications).

# React

After trying dozens of frontend libraries I have settled on react (or [preact](https://preactjs.com/) if I need something lighter). I had been using angular and knockout.js for a long time and was very skeptical of the jsx-format in the beginning. I just always preferred template languages and writing pure HTML. But after a while I have really come to like it especially the typed .tsx version of it, it is very close to actual HTML, but typed. The advent of hooks then cemented the "reign" of react for me. It just feels lighter and easier than libraries like angular in almost all cases now. You do not have to fight change detection and hooks are still quite light weight to write and read that the missing two-way binding is not a problem anymore.



This concludes the stack I hope I could show some of the advantages of these particular technologies.

