---
pagetitle: Using JBang to build Java Scripts
author: Christoph Müller
keywords: [Scripting, Java, JBang, JShell]
---

I have been trying to find a great solution for writing scripts for at least 5 years now. The latest addition was [deno](https://deno.land/) and typescript that I use to build the blog post overview for this site. In the past I tried [ammonite](https://ammonite.io/) with scala, since I am quite heavily invested in the JVM eco system. 

But honestly nothing really stuck. I still use python or deno the most. And while python is great as an interactive calculator (though the lack of static typing bothers me -- mypy exists, but still feels like a bit of a bandaid) I do not like to write larger programs with it. Deno is better in this regard but still has a quite immature eco system. Since I use a lot of Java in my professional life I wanted to explore if it would be a viable option. In the past Java was a bit too unwieldly as a scripting language, but since Java released versions 7 (new IO API), 8 (Lambdas + Streams) and 11 (var -- local type inference) I wondered if this changed and Java could be used for scripting? 

Since Java 9 there is JShell which is a REPL like environment. A great first step in the right direction, but it is still missing an important ingredient: dependency management. Another point of critisicm would be missing or incomplete IDE integration.

After doing some more research I found [JBang](https://jbang.dev/). It tickes most of my boxes:

- Shebang support via `//` instead of `#!`
- Dependency managment via `//DEPS` or `@Grab` annotations
- Editor integration by temporarily creating a gradle project
- REPL like usage via `jbang --interactive` (uses JShell internally)

Now I can finally use my favorite [tech stack](./2020-12-30_my_favorite_tech_stack.html) to build scripts that start a web server.

You can get started by installing JBang (e.g. via `brew`) and initializing a small example:

```bash
jbang init HelloServer.java
```

Now for the more interesting part the content of `HelloServer.java`:

```java
///usr/bin/env jbang "$0" "$@" ; exit $?
//DEPS io.javalin:javalin:4.1.1
//DEPS org.slf4j:slf4j-api:1.8.0-beta4
//DEPS org.slf4j:slf4j-simple:1.8.0-beta4

import io.javalin.Javalin;

public class HelloServer {

    public static void main(String... args) {
        var app = Javalin.create().start(7777);
        app.get("/", ctx -> ctx.result("Hello World"));
    }
}
```

The first line is the shebang (while still being valid java). The next three lines declare dependencies (Javalin as a webservice + SLF4j-simple for logging -- no log4j necessary ;) ). What follows next is just a regular Java program to start a webserver on port 7777. To have proper IDE support the java file name needs to match the class name, though JBang itself does not care about that. Editing works via `jbang edit --open=code  HelloServer.java` in case of VS Code. That creates a temp directory with a gradle project for the IDE. While this works great I would still prefer to edit the file directly.

```
[main] INFO io.javalin.Javalin -
       __                      __ _            __ __
      / /____ _ _   __ ____ _ / /(_)____      / // /
 __  / // __ `/| | / // __ `// // // __ \    / // /_
/ /_/ // /_/ / | |/ // /_/ // // // / / /   /__  __/
\____/ \__,_/  |___/ \__,_//_//_//_/ /_/      /_/

          https://javalin.io/documentation

[main] INFO org.eclipse.jetty.util.log - Logging initialized @179ms to org.eclipse.jetty.util.log.Slf4jLog
[main] INFO io.javalin.Javalin - Starting Javalin ...
[main] INFO io.javalin.Javalin - You are running Javalin 4.1.1 (released October 10, 2021. Your Javalin version is 72 days old. Consider upgrading!).
[main] INFO io.javalin.Javalin - Listening on http://localhost:7777/
[main] INFO io.javalin.Javalin - Javalin started in 115ms \o/
```

