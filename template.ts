export const template = (content: string, metadata: any, github: string) => `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <meta name="author" content="Christoph Müller" />
  <meta name="keywords" content="${metadata.keywords && metadata.keywords.join ? metadata.keywords.join(", ") : ""}" />
  <title>${metadata.pagetitle}</title>
  <link rel="stylesheet" href="/mvp.css" />
</head>
<body>
    <header>
        <nav>
            <h3>raytracer.me</h3>
            <ul>
                <li><a href="/">Home</a><li>
                <li><a href="/blog">Blog</a><li>
            </ul>
        </nav>
        <h1 class="title">${metadata.pagetitle}</h1>
    </header>
<main>
${content}
</main>
<footer>
    <section>
        <a href="${github}">Edit on GitHub</a>
    </section>
    <section>
        <a href="/impressum.html">Impressum und Datenschutz</a>
    </section>
    <section>
        Copyright © Christoph Müller 2021.
    </section>
</footer>
</body>
</html>
`;
