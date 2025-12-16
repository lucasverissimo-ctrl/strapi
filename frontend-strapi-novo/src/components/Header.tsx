import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 h-16 w-full transition-[background,color,height] duration-300 lg:h-24 lg:duration-500 lg:ease-out bg-gradient-to-b from-black/30 to-black/0 text-white shadow-none">
      <div className="container flex h-full items-center justify-end gap-6">
        <Link
          aria-label="Home"
          className="mr-auto flex-1 transition-opacity hover:opacity-80 control-active:invert"
          target=""
          href="/"
        >
          <img
            src="https://patriawebsitesassets.blob.core.windows.net/patria//logo_09c3aa4269_2c7412efb0.svg?sv=2024-11-04&amp;ss=bf&amp;srt=o&amp;sp=rl&amp;se=2025-12-31T05:08:39Z&amp;st=2025-05-09T22:08:39Z&amp;spr=https&amp;sig=J9h%2BL0bV%2BSLOatd7%2FUzRWSg35hQiP0veIcmnkJX6LMk%3D"
            width="110"
            height="22"
            alt="Image without alt"
            loading="eager"
            className="h-auto max-h-10 w-auto"
          />
        </Link>
        <nav className="header-nav hidden h-full items-center gap-4 1.5lg:flex xl:gap-6">
          <div className="group flex h-full items-center">
            <p className="cms-link flex cursor-pointer items-center gap-1">
              <span className="group-hover:after:w-full">Our Firm</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 16 16"
                className="h-5 w-5"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M5.413 6.193 8 8.78l2.587-2.587a.664.664 0 1 1 .94.94l-3.06 3.06c-.26.26-.68.26-.94 0l-3.06-3.06a.664.664 0 0 1 0-.94.68.68 0 0 1 .946 0"
                  clipRule="evenodd"
                ></path>
              </svg>
            </p>
            <div className="header-submenu pointer-events-none absolute left-0 top-16 z-50 min-h-[25rem] w-full bg-white py-10 text-blue opacity-0 shadow-card transition-[opacity,top] duration-300 ease-out group-hover:pointer-events-auto group-hover:top-20 group-hover:opacity-100 xl:py-14">
              <div className="container grid grid-flow-col-dense grid-cols-[repeat(auto-fill,minmax(auto,19.375rem))] gap-5">
                <div className="flex flex-col gap-4">
                  <div className="pb-4">
                    <p className="pb-4 text-xl">About us</p>
                  </div>
                  <div className="grid gap-5 grid-cols-1">
                    <Link
                      className="flex items-center text-balance py-1 text-base leading-tight transition-[color,transform] duration-300 ease-out hover:translate-x-2 active:translate-x-1"
                      target=""
                      href="/about-us/"
                    >
                      Overview
                    </Link>
                    <Link
                      className="flex items-center text-balance py-1 text-base leading-tight transition-[color,transform] duration-300 ease-out hover:translate-x-2 active:translate-x-1"
                      target=""
                      href="/about-us/#who-we-are"
                    >
                      Who we are
                    </Link>
                    <Link
                      className="flex items-center text-balance py-1 text-base leading-tight transition-[color,transform] duration-300 ease-out hover:translate-x-2 active:translate-x-1"
                      target=""
                      href="/about-us/#our-timeline"
                    >
                      Our History
                    </Link>
                    <Link
                      className="flex items-center text-balance py-1 text-base leading-tight transition-[color,transform] duration-300 ease-out hover:translate-x-2 active:translate-x-1"
                      target=""
                      href="/about-us/#global-presence"
                    >
                      Global presence
                    </Link>
                    <Link
                      className="flex items-center text-balance py-1 text-base leading-tight transition-[color,transform] duration-300 ease-out hover:translate-x-2 active:translate-x-1"
                      target=""
                      href="/about-us/#leadership"
                    >
                      Leadership
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="pb-4">
                    <p className="pb-4 text-xl">Careers</p>
                  </div>
                  <div className="grid gap-5 grid-cols-1">
                    <Link
                      className="flex items-center text-balance py-1 text-base leading-tight transition-[color,transform] duration-300 ease-out hover:translate-x-2 active:translate-x-1"
                      target=""
                      href="/careers/"
                    >
                      Overview
                    </Link>
                    <Link
                      className="flex items-center text-balance py-1 text-base leading-tight transition-[color,transform] duration-300 ease-out hover:translate-x-2 active:translate-x-1"
                      target=""
                      href="/careers/#culture"
                    >
                      Culture
                    </Link>
                    <Link
                      className="flex items-center text-balance py-1 text-base leading-tight transition-[color,transform] duration-300 ease-out hover:translate-x-2 active:translate-x-1"
                      target=""
                      href="/careers/#people-we-look-for"
                    >
                      People we look for
                    </Link>
                    <Link
                      className="flex items-center text-balance py-1 text-base leading-tight transition-[color,transform] duration-300 ease-out hover:translate-x-2 active:translate-x-1"
                      target=""
                      href="/careers/#opportunities"
                    >
                      Opportunities
                    </Link>
                    <Link
                      className="flex items-center text-balance py-1 text-base leading-tight transition-[color,transform] duration-300 ease-out hover:translate-x-2 active:translate-x-1"
                      target=""
                      href="/careers/#opportunities"
                    >
                      Patria Academy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group flex h-full items-center">
            <p className="cms-link flex cursor-pointer items-center gap-1">
              <span className="group-hover:after:w-full">
                Knowledge &amp; Insights
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 16 16"
                className="h-5 w-5"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M5.413 6.193 8 8.78l2.587-2.587a.664.664 0 1 1 .94.94l-3.06 3.06c-.26.26-.68.26-.94 0l-3.06-3.06a.664.664 0 0 1 0-.94.68.68 0 0 1 .946 0"
                  clipRule="evenodd"
                ></path>
              </svg>
            </p>
            <div className="header-submenu pointer-events-none absolute left-0 top-16 z-50 min-h-[25rem] w-full bg-white py-10 text-blue opacity-0 shadow-card transition-[opacity,top] duration-300 ease-out group-hover:pointer-events-auto group-hover:top-20 group-hover:opacity-100 xl:py-14">
              <div className="container grid grid-flow-col-dense grid-cols-[repeat(auto-fill,minmax(auto,19.375rem))] gap-5">
                <div className="flex flex-col gap-4">
                  <div className="pb-4">
                    <p className="pb-4 text-xl">Knowledge &amp; Insights</p>
                  </div>
                  <div className="grid gap-5 grid-cols-1">
                    <Link
                      className="flex items-center text-balance py-1 text-base leading-tight transition-[color,transform] duration-300 ease-out hover:translate-x-2 active:translate-x-1"
                      target=""
                      href="/knowledge-and-insights/"
                    >
                      Overview
                    </Link>
                    <Link
                      className="flex items-center text-balance py-1 text-base leading-tight transition-[color,transform] duration-300 ease-out hover:translate-x-2 active:translate-x-1"
                      target=""
                      href="/clippings/"
                    >
                      Clippings
                    </Link>
                  </div>
                </div>
                <article className="col-[span_2/-1] grid grid-cols-2 gap-5">
                  <img
                    alt="Image without alt"
                    loading="lazy"
                    width="1536"
                    height="1024"
                    decoding="async"
                    data-nimg="1"
                    srcSet="/_next/image/?url=https%3A%2F%2Fpatriawebsitesassets.blob.core.windows.net%2Fpatria%2F%2FPatria_Image_30578810e6.jpg&amp;w=1920&amp;q=85 1x"
                    src="/_next/image/?url=https%3A%2F%2Fpatriawebsitesassets.blob.core.windows.net%2Fpatria%2F%2FPatria_Image_30578810e6.jpg&amp;w=1920&amp;q=85"
                    style={{ color: "transparent" }}
                  />
                  <div className="flex flex-col gap-4">
                    <h2 className="text-3xl leading-tight">
                      Credit Suisse sells REIT business in Brazil to Patria for
                      around $130 mln
                    </h2>
                    <p className="text-xs">
                      Credit Suisse said on Wednesday it reached a deal to sell
                      its real estate fund management business in Brazil to
                      asset manager Patria Investments for up to 650 million
                      reais (around $130 million).
                    </p>
                    <Link
                      className="cms-link group/link py-4"
                      target=""
                      href="/knowledge/credit-suisse-sells-reit-business-in-brazil-to-patria-for-around-130mln/"
                    >
                      <span className="group-hover/link:after:w-full">
                        Read more
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="none"
                        viewBox="0 0 12 12"
                        className="icon"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M1.333 6.667H8.78L5.527 9.92a.67.67 0 0 0 0 .947c.26.26.68.26.94 0l4.393-4.394c.26-.26.26-.68 0-.94l-4.387-4.4a.664.664 0 1 0-.94.94l3.247 3.26H1.333c-.366 0-.666.3-.666.667s.3.667.666.667"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="group flex h-full items-center">
            <p className="cms-link flex cursor-pointer items-center gap-1">
              <span className="group-hover:after:w-full">Business</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 16 16"
                className="h-5 w-5"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M5.413 6.193 8 8.78l2.587-2.587a.664.664 0 1 1 .94.94l-3.06 3.06c-.26.26-.68.26-.94 0l-3.06-3.06a.664.664 0 0 1 0-.94.68.68 0 0 1 .946 0"
                  clipRule="evenodd"
                ></path>
              </svg>
            </p>
            <div className="header-submenu pointer-events-none absolute left-0 top-16 z-50 min-h-[25rem] w-full bg-white py-10 text-blue opacity-0 shadow-card transition-[opacity,top] duration-300 ease-out group-hover:pointer-events-auto group-hover:top-20 group-hover:opacity-100 xl:py-14">
              <div className="container grid grid-flow-col-dense grid-cols-[repeat(auto-fill,minmax(auto,19.375rem))] gap-5">
                <div className="flex flex-col gap-4">
                  <div className="pb-4">
                    <p className="pb-4 text-xl">Our business</p>
                  </div>
                  <div className="grid gap-5 grid-cols-1">
                    <Link
                      className="flex items-center text-balance py-1 text-base leading-tight transition-[color,transform] duration-300 ease-out hover:translate-x-2 active:translate-x-1"
                      target=""
                      href="/private-equity/"
                    >
                      Private Equity
                    </Link>
                    <Link
                      className="flex items-center text-balance py-1 text-base leading-tight transition-[color,transform] duration-300 ease-out hover:translate-x-2 active:translate-x-1"
                      target=""
                      href="/public-equities/"
                    >
                      Public Equities
                    </Link>
                    <Link
                      className="flex items-center text-balance py-1 text-base leading-tight transition-[color,transform] duration-300 ease-out hover:translate-x-2 active:translate-x-1"
                      target=""
                      href="/global-private-market-solutions/"
                    >
                      {" "}
                      Global Private Market Solutions
                    </Link>
                    <Link
                      className="flex items-center text-balance py-1 text-base leading-tight transition-[color,transform] duration-300 ease-out hover:translate-x-2 active:translate-x-1"
                      target=""
                      href="/infraestructure/"
                    >
                      Infrastructure
                    </Link>
                    <Link
                      className="flex items-center text-balance py-1 text-base leading-tight transition-[color,transform] duration-300 ease-out hover:translate-x-2 active:translate-x-1"
                      target=""
                      href="/real-estate/"
                    >
                      Real Estate
                    </Link>
                    <Link
                      className="flex items-center text-balance py-1 text-base leading-tight transition-[color,transform] duration-300 ease-out hover:translate-x-2 active:translate-x-1"
                      target=""
                      href="/credit/"
                    >
                      Credit
                    </Link>
                    <Link
                      className="flex items-center text-balance py-1 text-base leading-tight transition-[color,transform] duration-300 ease-out hover:translate-x-2 active:translate-x-1"
                      target=""
                      href="/wealth-management/"
                    >
                      Wealth Management
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link
            className="header-link cms-link leading-none text-current lg:py-1"
            target=""
            href="/responsible-investments/"
          >
            <span className="group-hover:after:w-full">
              Responsible Investments
            </span>
          </Link>
        </nav>
        <div className="header-buttons ml-4 hidden h-full items-center gap-6 1.5lg:flex">
          <Link
            className="link-button button header-button"
            data-size="tiny"
            data-color="dark"
            target="_blank"
            href="https://ir.patria.com/"
          >
            <span>Shareholders</span>
          </Link>
        </div>
        <button
          className="hamburger hamburger--spin relative z-50 flex -translate-y-[2px] text-current 1.5lg:hidden"
          type="button"
          aria-label="Menu"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <div className="fixed left-0 top-0 h-full w-full transition-transform duration-300 ease-out 1.5lg:static 1.5lg:w-auto pointer-events-none translate-x-[110%] 1.5lg:pointer-events-auto 1.5lg:transform-none">
          <div className="absolute left-0 top-0 z-[60] flex h-16 w-full items-center gap-6 px-8 1.5lg:static 1.5lg:h-full 1.5lg:px-0">
            <div className="header-search-button group flex h-full items-center">
              <button
                className="relative z-[60] flex cursor-pointer items-center text-current hover:text-current-primary"
                tabIndex={-1}
                type="button"
                aria-label="Search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0s.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div className="fixed left-0 top-0 z-50 h-full w-full 1.5lg:absolute 1.5lg:top-16 overflow-y-auto bg-white text-blue 1.5lg:min-h-[25rem] transition-[opacity,top,transform] duration-300 ease-out 1.5lg:group-hover:top-20 1.5lg:pointer-events-none 1.5lg:opacity-0 1.5lg:shadow-card 1.5lg:group-hover:pointer-events-auto 1.5lg:group-hover:opacity-100 pointer-events-none translate-x-[110%] 1.5lg:transform-none 1.5lg:group-hover:pointer-events-auto">
                <div className="flex h-full w-full flex-col py-[4.375rem]">
                  <div className="container relative flex h-full flex-col items-start px-8 pt-4 1.5lg:py-10 xl:py-14">
                    <button
                      className="left-2 flex items-center justify-between text-left text-lg 1.5lg:hidden"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="none"
                        viewBox="0 0 12 12"
                        className="h-3 w-3 rotate-180"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M1.333 6.667H8.78L5.527 9.92a.67.67 0 0 0 0 .947c.26.26.68.26.94 0l4.393-4.394c.26-.26.26-.68 0-.94l-4.387-4.4a.664.664 0 1 0-.94.94l3.247 3.26H1.333c-.366 0-.666.3-.666.667s.3.667.666.667"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <p className="ml-2 text-base">Voltar</p>
                    </button>
                    <div className="flex h-full w-full flex-auto items-center">
                      <div className="container-small flex flex-col items-center gap-8">
                        <form className="flex w-full max-w-[40rem] flex-col items-center gap-6">
                          <div className="text-center">
                            <label
                              htmlFor="HeaderSearch"
                              className="font-haido text-3xl !leading-none"
                            >
                              What are do you looking for?
                            </label>
                          </div>
                          <div className="flex w-full flex-col items-center gap-4">
                            <fieldset className="form-field input">
                              <legend></legend>
                              <div className="input-container">
                                <input
                                  id="header-search"
                                  className="h-full w-full"
                                  placeholder="search"
                                  required={true}
                                  defaultValue=""
                                  name="search-term"
                                />
                              </div>
                            </fieldset>
                            <button
                              className="button button !h-12 flex-none"
                              data-size="default"
                              data-color="dark"
                              type="submit"
                              tabIndex={-1}
                            >
                              <span className="group-disabled:!text-white">
                                Search
                              </span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative flex h-full items-center">
              <div className="relative z-[60] flex cursor-pointer items-center text-current">
                <p className="cms-link flex cursor-pointer items-center gap-1">
                  <span className="text-sm uppercase group-hover:after:w-full">
                    en
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 16 16"
                    className="h-5 w-5"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M5.413 6.193 8 8.78l2.587-2.587a.664.664 0 1 1 .94.94l-3.06 3.06c-.26.26-.68.26-.94 0l-3.06-3.06a.664.664 0 0 1 0-.94.68.68 0 0 1 .946 0"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </p>
              </div>
              <div className="pointer-events-none absolute left-1/2 top-[calc(50%+2rem)] z-50 flex w-max -translate-x-1/2 flex-col bg-white py-0 opacity-0 shadow-card transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="absolute left-1/2 top-[-0.25rem] -z-10 h-0 w-0 -translate-x-1/2 border-b-[0.375rem] border-l-[0.375rem] border-r-[0.375rem] border-transparent border-b-white"></div>
                <div className="flex flex-col">
                  <Link
                    hrefLang="pt-BR"
                    className="cms-link group/link header-link header-localization-link px-4 py-3 text-blue hover:text-blue"
                    target=""
                    href="/pt-BR/"
                  >
                    <span className="group-hover/link:after:w-full">
                      Português
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="none"
                      viewBox="0 0 12 12"
                      className="icon"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M1.333 6.667H8.78L5.527 9.92a.67.67 0 0 0 0 .947c.26.26.68.26.94 0l4.393-4.394c.26-.26.26-.68 0-.94l-4.387-4.4a.664.664 0 1 0-.94.94l3.247 3.26H1.333c-.366 0-.666.3-.666.667s.3.667.666.667"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                  <Link
                    hrefLang="es"
                    className="cms-link group/link header-link header-localization-link px-4 py-3 text-blue hover:text-blue"
                    target=""
                    href="/es/"
                  >
                    <span className="group-hover/link:after:w-full">
                      Español
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="none"
                      viewBox="0 0 12 12"
                      className="icon"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M1.333 6.667H8.78L5.527 9.92a.67.67 0 0 0 0 .947c.26.26.68.26.94 0l4.393-4.394c.26-.26.26-.68 0-.94l-4.387-4.4a.664.664 0 1 0-.94.94l3.247 3.26H1.333c-.366 0-.666.3-.666.667s.3.667.666.667"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-30 flex h-full w-full flex-col overflow-y-auto bg-white pt-[4.375rem] text-blue 1.5lg:hidden">
            <nav className="mobile-menu-nav flex flex-auto flex-col items-start gap-2 px-4 pb-8 pt-4">
              <button className="mobile-menu-button" type="button">
                Our Firm
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 16 16"
                  className="ml-2 h-5 w-5 -rotate-90"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M5.413 6.193 8 8.78l2.587-2.587a.664.664 0 1 1 .94.94l-3.06 3.06c-.26.26-.68.26-.94 0l-3.06-3.06a.664.664 0 0 1 0-.94.68.68 0 0 1 .946 0"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div className="fixed left-0 top-0 z-50 h-full w-full overflow-y-auto bg-white transition-transform duration-300 ease-out pointer-events-none translate-x-[110%]">
                <div className="flex flex-col pt-[4.375rem]">
                  <div className="container relative flex flex-col items-start px-8 pt-4">
                    <button
                      className="left-2 flex items-center justify-between text-left text-lg"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="none"
                        viewBox="0 0 12 12"
                        className="h-3 w-3 rotate-180"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M1.333 6.667H8.78L5.527 9.92a.67.67 0 0 0 0 .947c.26.26.68.26.94 0l4.393-4.394c.26-.26.26-.68 0-.94l-4.387-4.4a.664.664 0 1 0-.94.94l3.247 3.26H1.333c-.366 0-.666.3-.666.667s.3.667.666.667"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <p className="ml-2 text-base">Back</p>
                    </button>
                    <h3 className="text-neutral-white mt-5 text-2xl font-medium">
                      Our Firm
                    </h3>
                    <div className="mt-4 flex flex-col gap-5 pl-2">
                      <Link
                        className="menu-link submenu-link text-neutral-white hover:text-red-600 flex w-full items-center py-2 text-base uppercase"
                        target=""
                        href="/about-us/"
                      >
                        Overview
                      </Link>
                      <Link
                        className="menu-link submenu-link text-neutral-white hover:text-red-600 flex w-full items-center py-2 text-base uppercase"
                        target=""
                        href="/about-us/#who-we-are"
                      >
                        Who we are
                      </Link>
                      <Link
                        className="menu-link submenu-link text-neutral-white hover:text-red-600 flex w-full items-center py-2 text-base uppercase"
                        target=""
                        href="/about-us/#our-timeline"
                      >
                        Our History
                      </Link>
                      <Link
                        className="menu-link submenu-link text-neutral-white hover:text-red-600 flex w-full items-center py-2 text-base uppercase"
                        target=""
                        href="/about-us/#global-presence"
                      >
                        Global presence
                      </Link>
                      <Link
                        className="menu-link submenu-link text-neutral-white hover:text-red-600 flex w-full items-center py-2 text-base uppercase"
                        target=""
                        href="/about-us/#leadership"
                      >
                        Leadership
                      </Link>
                      <Link
                        className="menu-link submenu-link text-neutral-white hover:text-red-600 flex w-full items-center py-2 text-base uppercase"
                        target=""
                        href="/careers/"
                      >
                        Overview
                      </Link>
                      <Link
                        className="menu-link submenu-link text-neutral-white hover:text-red-600 flex w-full items-center py-2 text-base uppercase"
                        target=""
                        href="/careers/#culture"
                      >
                        Culture
                      </Link>
                      <Link
                        className="menu-link submenu-link text-neutral-white hover:text-red-600 flex w-full items-center py-2 text-base uppercase"
                        target=""
                        href="/careers/#people-we-look-for"
                      >
                        People we look for
                      </Link>
                      <Link
                        className="menu-link submenu-link text-neutral-white hover:text-red-600 flex w-full items-center py-2 text-base uppercase"
                        target=""
                        href="/careers/#opportunities"
                      >
                        Opportunities
                      </Link>
                      <Link
                        className="menu-link submenu-link text-neutral-white hover:text-red-600 flex w-full items-center py-2 text-base uppercase"
                        target=""
                        href="/careers/#opportunities"
                      >
                        Patria Academy
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <button className="mobile-menu-button" type="button">
                Knowledge &amp; Insights
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 16 16"
                  className="ml-2 h-5 w-5 -rotate-90"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M5.413 6.193 8 8.78l2.587-2.587a.664.664 0 1 1 .94.94l-3.06 3.06c-.26.26-.68.26-.94 0l-3.06-3.06a.664.664 0 0 1 0-.94.68.68 0 0 1 .946 0"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div className="fixed left-0 top-0 z-50 h-full w-full overflow-y-auto bg-white transition-transform duration-300 ease-out pointer-events-none translate-x-[110%]">
                <div className="flex flex-col pt-[4.375rem]">
                  <div className="container relative flex flex-col items-start px-8 pt-4">
                    <button
                      className="left-2 flex items-center justify-between text-left text-lg"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="none"
                        viewBox="0 0 12 12"
                        className="h-3 w-3 rotate-180"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M1.333 6.667H8.78L5.527 9.92a.67.67 0 0 0 0 .947c.26.26.68.26.94 0l4.393-4.394c.26-.26.26-.68 0-.94l-4.387-4.4a.664.664 0 1 0-.94.94l3.247 3.26H1.333c-.366 0-.666.3-.666.667s.3.667.666.667"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <p className="ml-2 text-base">Back</p>
                    </button>
                    <h3 className="text-neutral-white mt-5 text-2xl font-medium">
                      Knowledge &amp; Insights
                    </h3>
                    <div className="mt-4 flex flex-col gap-5 pl-2">
                      <Link
                        className="menu-link submenu-link text-neutral-white hover:text-red-600 flex w-full items-center py-2 text-base uppercase"
                        target=""
                        href="/knowledge-and-insights/"
                      >
                        Overview
                      </Link>
                      <Link
                        className="menu-link submenu-link text-neutral-white hover:text-red-600 flex w-full items-center py-2 text-base uppercase"
                        target=""
                        href="/clippings/"
                      >
                        Clippings
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <button className="mobile-menu-button" type="button">
                Business
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 16 16"
                  className="ml-2 h-5 w-5 -rotate-90"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M5.413 6.193 8 8.78l2.587-2.587a.664.664 0 1 1 .94.94l-3.06 3.06c-.26.26-.68.26-.94 0l-3.06-3.06a.664.664 0 0 1 0-.94.68.68 0 0 1 .946 0"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div className="fixed left-0 top-0 z-50 h-full w-full overflow-y-auto bg-white transition-transform duration-300 ease-out pointer-events-none translate-x-[110%]">
                <div className="flex flex-col pt-[4.375rem]">
                  <div className="container relative flex flex-col items-start px-8 pt-4">
                    <button
                      className="left-2 flex items-center justify-between text-left text-lg"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="none"
                        viewBox="0 0 12 12"
                        className="h-3 w-3 rotate-180"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M1.333 6.667H8.78L5.527 9.92a.67.67 0 0 0 0 .947c.26.26.68.26.94 0l4.393-4.394c.26-.26.26-.68 0-.94l-4.387-4.4a.664.664 0 1 0-.94.94l3.247 3.26H1.333c-.366 0-.666.3-.666.667s.3.667.666.667"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <p className="ml-2 text-base">Back</p>
                    </button>
                    <h3 className="text-neutral-white mt-5 text-2xl font-medium">
                      Business
                    </h3>
                    <div className="mt-4 flex flex-col gap-5 pl-2">
                      <Link
                        className="menu-link submenu-link text-neutral-white hover:text-red-600 flex w-full items-center py-2 text-base uppercase"
                        target=""
                        href="/private-equity/"
                      >
                        Private Equity
                      </Link>
                      <Link
                        className="menu-link submenu-link text-neutral-white hover:text-red-600 flex w-full items-center py-2 text-base uppercase"
                        target=""
                        href="/public-equities/"
                      >
                        Public Equities
                      </Link>
                      <Link
                        className="menu-link submenu-link text-neutral-white hover:text-red-600 flex w-full items-center py-2 text-base uppercase"
                        target=""
                        href="/global-private-market-solutions/"
                      >
                        {" "}
                        Global Private Market Solutions
                      </Link>
                      <Link
                        className="menu-link submenu-link text-neutral-white hover:text-red-600 flex w-full items-center py-2 text-base uppercase"
                        target=""
                        href="/infraestructure/"
                      >
                        Infrastructure
                      </Link>
                      <Link
                        className="menu-link submenu-link text-neutral-white hover:text-red-600 flex w-full items-center py-2 text-base uppercase"
                        target=""
                        href="/real-estate/"
                      >
                        Real Estate
                      </Link>
                      <Link
                        className="menu-link submenu-link text-neutral-white hover:text-red-600 flex w-full items-center py-2 text-base uppercase"
                        target=""
                        href="/credit/"
                      >
                        Credit
                      </Link>
                      <Link
                        className="menu-link submenu-link text-neutral-white hover:text-red-600 flex w-full items-center py-2 text-base uppercase"
                        target=""
                        href="/wealth-management/"
                      >
                        Wealth Management
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                className="mobile-menu-link"
                target=""
                href="/responsible-investments/"
              >
                Responsible Investments
              </Link>
            </nav>
            <div className="mt-auto flex w-full flex-col gap-4 p-7">
              <Link
                className="link-button button justify-center text-center"
                data-size="default"
                data-color="dark"
                target="_blank"
                href="https://ir.patria.com/"
              >
                <span>Shareholders</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
