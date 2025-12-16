import { dataItem, NotFoundResponse, StrapiHomeResponse, StrapiSlugResponse } from "@/types";

function getBaseUrl() {
  return process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
}

function buildHeaders() {
  const headers: Record<string, string> = { Accept: "application/json" };
  if (process.env.STRAPI_API_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.STRAPI_API_TOKEN}`;
  }
  return headers;
}

async function strapiGet(
  path: string,
  params?: Record<string, string | number | boolean>
) {
  const base = getBaseUrl();
  const url = new URL(`${base}${path}`);
  if (params) {
    Object.entries(params).forEach(([k, v]) =>
      url.searchParams.set(k, String(v))
    );
  }

  const res = await fetch(url.toString(), {
    method: "GET",
    headers: buildHeaders(),
    cache: "no-store",
  });

  console.log("URL:", url.toString())
  console.log("Headers:", buildHeaders())

  return res;
}

export async function fetchStrapi(
  locale = "en",
  isDraft = false,
  site: string,
  slug?: string
): Promise<dataItem | null> {
  const params: Record<string, string> = { locale };

  console.log("SLUG", slug)

  if (isDraft) params.status = "draft";
  if (slug) {
    params["filters[slug][$eq]"] = slug;
  } else {
    params["filters[slug][$eq]"] = "homepage";
  }

  params[
    "populate[components][on][components.hero][populate][background_image]"
  ] = "true";
  params[
    "populate[components][on][components.content-block][populate][image]"
  ] = "true";
  params[
    "populate[components][on][components.carousel][populate][slides][populate][0]"
  ] = "image";

  // const res = await strapiGet(slug ? "/api/pages" : "/api/home", params);
  const res = await strapiGet(`/api/${site}`, params);

  if (res.status === 401 || res.status === 403) {
    const text = await res.text().catch(() => "");
    throw new Error(`Strapi permission error: ${res.status} ${text}`);
  }
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Strapi error fetching /api/${site}: ${res.status} ${text}`);
  }

  if (true) {
    const json = (await res.json()) as StrapiSlugResponse;
    console.log("Response:", json);
    return json.data.length > 0 ? json.data[0] : null;

  }

  const json = (await res.json()) as StrapiHomeResponse;
  console.log("Response:", json);
  return json.data;
}

export async function fetchNotFound(
  locale = "en",
  isDraft = false,
): Promise<NotFoundResponse | null> {
  const params: Record<string, string> = { locale, populate: "*" };

  if (isDraft) params.status = "draft";

  const res = await strapiGet("/api/not-found", params);

  if (res.status === 401 || res.status === 403) {
    const text = await res.text().catch(() => "");
    throw new Error(`Strapi permission error: ${res.status} ${text}`);
  }
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Strapi error fetching: ${res.status} ${text}`);
  }

  const json = (await res.json()) as NotFoundResponse;

  return json;
}

export default {
  fetchStrapi,
  fetchNotFound
};
