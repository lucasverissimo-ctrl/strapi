import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const url = searchParams.get('url');
  const status = searchParams.get('status');
  if (secret !== process.env.PREVIEW_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }
  if (status === "published") {
    (await draftMode()).disable();
  } else {
    (await draftMode()).enable();
  }
  redirect(url || '/');
}
