import React from 'react';

const Content: React.FC = () => {
  return (
    <div className="grid place-items-center min-h-screen bg-gray-200 text-gray-900 font-serif">
      <nav>
        <a
          className="fixed top-8 right-8 w-12 h-12 grid place-items-center opacity-80 hover:opacity-100 focus-visible:opacity-100"
          href="https://twitter.com/intent/follow?screen_name=jh3yy"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg className="w-3/4" viewBox="0 0 969 955" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="161.191" cy="320.191" r="133.191" stroke="currentColor" strokeWidth="20"></circle>
            <circle cx="806.809" cy="320.191" r="133.191" stroke="currentColor" strokeWidth="20"></circle>
            <circle cx="695.019" cy="587.733" r="31.4016" fill="currentColor"></circle>
            <circle cx="272.981" cy="587.733" r="31.4016" fill="currentColor"></circle>
            <path
              d="M564.388 712.083C564.388 743.994 526.035 779.911 483.372 779.911C440.709 779.911 402.356 743.994 402.356 712.083C402.356 680.173 440.709 664.353 483.372 664.353C526.035 664.353 564.388 680.173 564.388 712.083Z"
              fill="currentColor"
            ></path>
            <rect x="310.42" y="448.31" width="343.468" height="51.4986" fill="#FF1E1E"></rect>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M745.643 288.24C815.368 344.185 854.539 432.623 854.539 511.741H614.938V454.652C614.938 433.113 597.477 415.652 575.938 415.652H388.37C366.831 415.652 349.37 433.113 349.37 454.652V511.741L110.949 511.741C110.949 432.623 150.12 344.185 219.845 288.24C289.57 232.295 384.138 200.865 482.744 200.865C581.35 200.865 675.918 232.295 745.643 288.24Z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </nav>
      <header className="h-1/2-screen grid place-items-end">
        <h1 className="relative text-4xl sm:text-6xl md:text-8xl">
          The Details<span className="block text-center text-2xl font-small-caps">A CSS Cookbook</span>
        </h1>
      </header>
      <main>
        <div className="content grid grid-cols-1 md:grid-cols-2 gap-16 sticky top-0 py-8">
          <div className="tiles flex flex-col-reverse items-center translate-y-1/2 md:translate-y-0">
            <div style={{ "--r": "45deg" } as React.CSSProperties} className="tile relative h-[var(--gap)] after:absolute after:top-1/2 after:left-1/2 after:w-full after:aspect-[1160/521] after:bg-cover after:translate-x-[-50%] after:translate-y-[-50%] after:opacity-0 after:filter-hue-rotate-[var(--r)]"></div>
            <div style={{ "--r": "275deg" } as React.CSSProperties} className="tile relative h-[var(--gap)] after:absolute after:top-1/2 after:left-1/2 after:w-full after:aspect-[1160/521] after:bg-cover after:translate-x-[-50%] after:translate-y-[-50%] after:opacity-0 after:filter-hue-rotate-[var(--r)]"></div>
            <div style={{ "--r": "190deg" } as React.CSSProperties} className="tile relative h-[var(--gap)] after:absolute after:top-1/2 after:left-1/2 after:w-full after:aspect-[1160/521] after:bg-cover after:translate-x-[-50%] after:translate-y-[-50%] after:opacity-0 after:filter-hue-rotate-[var(--r)]"></div>
            <div style={{ "--r": "45deg" } as React.CSSProperties} className="tile relative h-[var(--gap)] after:absolute after:top-1/2 after:left-1/2 after:w-full after:aspect-[1160/521] after:bg-cover after:translate-x-[-50%] after:translate-y-[-50%] after:opacity-1 after:filter-hue-rotate-[var(--r)]"></div>
          </div>
          <section className="section--one relative w-full max-w-[40ch]">
            <article className="grid absolute h-full top-0 left-0 font-light">
              <div className="title-wrap self-end">
                <h2 className="text-4xl sm:text-6xl md:text-8xl">Level Up Your CSS.</h2>
              </div>
              <hr className="h-0.5 w-full md:w-[calc(100%+4rem)] md:translate-x-[-4rem]" />
              <div className="content-wrap self-start">
                <p className="text-gray-800">
                  Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Ab vel rem dicta. Aut quidem, sed fugiat
                  officiis inventore nostrum. Nam placeat porro, ea distinctio animi eius rerum, consequatur vero beatae.
                </p>
              </div>
            </article>
            <article className="grid absolute h-full top-0 left-0 font-light">
              <div className="title-wrap self-end">
                <h2 className="text-4xl sm:text-6xl md:text-8xl">Dissect Problems.</h2>
              </div>
              <hr className="h-0.5 w-full md:w-[calc(100%+4rem)] md:translate-x-[-4rem]" />
              <div className="content-wrap self-start">
                <p className="text-gray-800">
                  Obcaecati nam doloremque fugiat cum corporis eveniet atque, molestias molestiae quaerat nihil sint
                  nostrum cumque itaque commodi similique suscipit eos autem saepe velit enim voluptas eum quisquam,
                  facilis ipsum. Et!
                </p>
              </div>
            </article>
            <article className="grid absolute h-full top-0 left-0 font-light">
              <div className="title-wrap self-end">
                <h2 className="text-4xl sm:text-6xl md:text-8xl">Learn New Techniques.</h2>
              </div>
              <hr className="h-0.5 w-full md:w-[calc(100%+4rem)] md:translate-x-[-4rem]" />
              <div className="content-wrap self-start">
                <p className="text-gray-800">
                  Nulla atque voluptatum, a natus, ut illum voluptas incidunt ipsam reprehenderit illo perferendis.
                  Possimus dolorem tempora minima a mollitia aperiam aliquid voluptatibus fugiat aspernatur dignissimos,
                  ullam libero odit molestias eveniet?
                </p>
              </div>
            </article>
            <article className="grid absolute h-full top-0 left-0 font-light">
              <div className="title-wrap self-end">
                <h2 className="text-4xl sm:text-6xl md:text-8xl">Profit.</h2>
              </div>
              <hr className="h-0.5 w-full md:w-[calc(100%+4rem)] md:translate-x-[-4rem]" />
              <div className="content-wrap self-start">
                <p className="text-gray-800">
                  Similique expedita nihil beatae sunt adipisci deserunt culpa, nostrum, amet quis veritatis aperiam,
                  ducimus repellat, assumenda atque quia dicta excepturi sint accusantium voluptas architecto. Tempore
                  incidunt possimus aspernatur quidem, quasi!
                </p>
              </div>
            </article>
          </section>
        </div>
        <section className="section--two"></section>
        <section className="section--three"></section>
        <section className="section--four"></section>
        <section className="section--five grid place-items-center h-1/2">
          <h2 className="text-4xl sm:text-6xl md:text-8xl">fin.</h2>
        </section>
      </main>
      <footer className="p-4 text-center">ʕ •ᴥ•ʔ jhey &copy; 2024</footer>
    </div>
  );
}

export default Content;
