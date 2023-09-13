const MainTemplate = (props: React.PropsWithChildren<{ pagetitle?: string, path: string }>) => {
    return <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="generator" content="pandoc" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
            <meta name="author" content="$author-meta$" />
            <meta name="keywords" content="$for(keywords)$$keywords$$sep$, $endfor$" />
            <title>{props.pagetitle || 'raytracer.me'}</title>
            <link rel="stylesheet" href="/mvp.css" />
        </head>
        <body>
            <header>
                <nav>
                    <h3>raytracer.me</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/blog">Blog</a></li>
                    </ul>
                </nav>
                <h1 className="title">{props.pagetitle}</h1>
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                <section>
                    <a href={`https://github.com/raytracer/website/edit/main/${props.path}`}>Edit on GitHub</a>
                </section>
                <section>
                    <a href="/impressum.html">Impressum und Datenschutz</a>
                </section>
                <section>
                    Copyright © Christoph Müller {new Date().getFullYear()}.
                </section>
            </footer>
        </body>
    </html>
};

export default MainTemplate;
