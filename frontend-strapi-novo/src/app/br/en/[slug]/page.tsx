import SlugPageComponent from "@/components/pages/SlugPage";
export default function Page({ params }: { params: { slug: string } }) {
  return <SlugPageComponent slug={params?.slug} locale="en" site="patria-brs" />;
}
