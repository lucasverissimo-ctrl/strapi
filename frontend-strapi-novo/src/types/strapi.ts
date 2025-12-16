export type NotFoundResponse = {
  data: {
    id: number;
    documentId: string;
    title: string;
    subheading: string;
    description: string;
    button_label: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    localizations: {
        id: number;
        documentId: string;
        title: string;
        subheading: string;
        description: string;
        button_label: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
      }[];
  };
  meta: any;
};

export type dataItem = {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    components: any[];
  };

export type StrapiHomeResponse = {
  data: dataItem;
  meta: any;
};

export type StrapiSlugResponse = {
  data: dataItem[];
  meta: any;
};

export type Hero = {
  __component: string;
  id: number;
  title: string;
  button_label: string;
  button_URL: string;
};
