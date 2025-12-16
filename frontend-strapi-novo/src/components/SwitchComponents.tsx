import Link from "next/link";
import Hero from "./Hero";
import ContentBlock from "./ContentBlock";

export default function SwitchComponents({ component }: { component: any }) {
  console.log('component', component);
  switch (component.__component) {
    case "components.hero":
      return <Hero component={component} />;

    case "components.content-block":
      return <ContentBlock component={component} />;

    case "components.carousel":
      return (
        <section>
          <h1>{component.title}</h1>
        </section>
      );

    default:
      console.error("Unknown component:", component);
      return <section></section>;
  }
}
