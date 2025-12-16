import Link from "next/link";

export default function Hero({ component }: { component: any }) {
  return (
    <section>
      <div
        style={{
          backgroundImage: `url(http://localhost:1337${component?.background_image.url})`,
        }}
        className="h-screen bg-cover bg-center flex items-center"
      >
        <div className="container flex flex-col items-start gap-10">
          <h1 className="text-5xl max-w-[26.25rem] md:text-6xl animation-content delay-0 text-white">
            {component.title}
          </h1>
          <div className="flex flex-col gap-5 lg:flex-row animation-content delay-200">
            <Link
              className="link-button button"
              data-size="default"
              data-color="dark"
              href={component.button_URL}
            >
              <span>{component.button_label}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
