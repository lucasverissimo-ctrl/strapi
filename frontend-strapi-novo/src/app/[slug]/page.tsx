import SlugPageComponent from "@/components/pages/SlugPage";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return <SlugPageComponent slug={resolvedParams.slug} locale="en" site="patria-usas" />;
}