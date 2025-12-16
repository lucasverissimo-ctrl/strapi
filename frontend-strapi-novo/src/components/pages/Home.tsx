import SwitchComponents from "@/components/SwitchComponents";
import { fetchStrapi } from "@/lib/strapi";
import { draftMode } from "next/headers";
import { dataItem } from "@/types";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function HomeComponent({
  locale = "en",
  site,
}: {
  locale?: string;
  site: string;
}) {
  const { isEnabled: isDraft } = await draftMode();
  let homeData: dataItem | null = null;
  try {
    homeData = await fetchStrapi(locale, isDraft, site);

    // const params: Record<string, string> = { locale };
    // if (isDraft) params.status = "draft";
    // params["filters[slug][$eq]"] = "homepage";
    // params[
    //   "populate[components][on][components.hero][populate][background_image]"
    // ] = "true";
    // params[
    //   "populate[components][on][components.content-block][populate][image]"
    // ] = "true";
    // params[
    //   "populate[components][on][components.carousel][populate][slides][populate][0]"
    // ] = "image";
    // const res = await strapiGet(`/api/${site}`, params);

  } catch (err) {
    console.error(err);
    return (
      <main className="min-h-screen flex items-center justify-center p-8">
        <div>
          <h1 className="text-xl font-semibold">Erro ao carregar conteúdo</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Verifique o Strapi (http://localhost:1337) e as variáveis de
            ambiente.
          </p>
          <pre className="mt-4 text-xs">
            {String((err as Error)?.message ?? err)}
          </pre>
        </div>
      </main>
    );
  }

  if (!homeData) {
    return <div></div>;
  }
  console.log("Home Data:", homeData);
  const sections: any[] | undefined = homeData?.components;
  if (!sections || sections.length === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Homepage vazia</h1>
          <p className="mt-2 text-sm">
            Adicione seções ao Single Type <code>home</code> no Strapi.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main>
      {sections.map((section, idx) => (
        <SwitchComponents key={idx} component={section} />
      ))}
    </main>
  );
}
