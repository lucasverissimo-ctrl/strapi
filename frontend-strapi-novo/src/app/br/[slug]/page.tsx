import SlugPageComponent from "@/components/pages/SlugPage";
export default async function Page({ params }: { params: { slug: string } }) {
  const resolvedParams = await params;
  return <SlugPageComponent slug={resolvedParams?.slug} locale="pt-BR" site="patria-brs" />;
}
