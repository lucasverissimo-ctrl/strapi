"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPreviewPathname = (uid, { locale, document }) => {
    if (uid === "api::patria.patria") {
        const slug = document.slug;
        if (slug === "homepage") {
            return locale === "en" ? `/` : `/${locale}`;
        }
        return locale === "en" ? `/${slug}` : `/${locale}/${slug}`;
    }
    if (uid === "api::patria-br.patria-br") {
        const slug = document.slug;
        if (slug === "homepage") {
            return locale === "pt-BR" ? `/br` : `/br/${locale}`;
        }
        return locale === "pt-BR" ? `/br/${slug}` : `/br/${locale}/${slug}`;
    }
    return null;
};
exports.default = ({ env }) => {
    const clientUrl = env("CLIENT_URL");
    const previewSecret = env("PREVIEW_SECRET");
    return {
        auth: {
            secret: env("ADMIN_JWT_SECRET"),
        },
        apiToken: {
            salt: env("API_TOKEN_SALT"),
        },
        transfer: {
            token: {
                salt: env("TRANSFER_TOKEN_SALT"),
            },
        },
        secrets: {
            encryptionKey: env("ENCRYPTION_KEY"),
        },
        flags: {
            nps: env.bool("FLAG_NPS", true),
            promoteEE: env.bool("FLAG_PROMOTE_EE", true),
        },
        preview: {
            enabled: true,
            config: {
                allowedOrigins: clientUrl,
                async handler(uid, { documentId, locale, status }) {
                    const document = await strapi.documents(uid).findOne({ documentId, locale });
                    const pathname = getPreviewPathname(uid, { locale, document });
                    if (!pathname) {
                        return null;
                    }
                    const urlSearchParams = new URLSearchParams({
                        url: pathname,
                        secret: previewSecret,
                        status, // Angular
                        slug: document.slug, // Angular
                        language: locale, // Angular
                    });
                    return `${clientUrl}/api/preview?${urlSearchParams}`;
                },
            },
        },
    };
};
