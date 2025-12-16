import SwitchComponents from "@/components/SwitchComponents";
import { fetchStrapi } from "@/lib/strapi";
import { dataItem } from "@/types";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export default async function SlugPageComponent({ slug, site, locale = "en" }: { slug: string; site: string; locale?: string }) {
  if (!slug) return notFound();
  const { isEnabled: isDraft } = await draftMode();
  let result: dataItem | null = null;
  try {
    result = await fetchStrapi(locale, isDraft, site, slug);
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

  const sections: any[] | undefined = result?.components;
  if (!sections || sections.length === 0) return <div>
    <h1>LOCALE:</h1>
    <h1>{locale}</h1>
  </div>;

  return (
    <main className="min-h-screen">
      {sections.map((section, idx) => (
        <SwitchComponents key={idx} component={section} />
      ))}
    </main>
  );
}
