import type { Schema, Struct } from '@strapi/strapi';

export interface AtomsInputs extends Struct.ComponentSchema {
  collectionName: 'components_atoms_inputs';
  info: {
    displayName: 'inputs';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    options: Schema.Attribute.JSON;
    required: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    type: Schema.Attribute.Enumeration<['text', 'select', 'optin']> &
      Schema.Attribute.Required;
  };
}

export interface ComponentsCarousel extends Struct.ComponentSchema {
  collectionName: 'components_components_carousels';
  info: {
    displayName: 'carousel';
  };
  attributes: {
    slides: Schema.Attribute.Component<'components.carousel-slide', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface ComponentsCarouselSlide extends Struct.ComponentSchema {
  collectionName: 'components_components_carousel_slides';
  info: {
    displayName: 'carousel-slide';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsContactForm extends Struct.ComponentSchema {
  collectionName: 'components_components_contact_forms';
  info: {
    displayName: 'contact-form';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    form_action: Schema.Attribute.String & Schema.Attribute.Required;
    inputs: Schema.Attribute.Component<'atoms.inputs', true> &
      Schema.Attribute.Required;
    submit_button_label: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsContentBlock extends Struct.ComponentSchema {
  collectionName: 'components_components_content_blocks';
  info: {
    displayName: 'content-block';
  };
  attributes: {
    button_label: Schema.Attribute.String & Schema.Attribute.Required;
    button_URL: Schema.Attribute.String & Schema.Attribute.Required;
    category: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    flip_image_with_text: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsContents extends Struct.ComponentSchema {
  collectionName: 'components_components_contents';
  info: {
    displayName: 'contents';
  };
  attributes: {
    contents: Schema.Attribute.Component<'components.content-block', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface ComponentsHero extends Struct.ComponentSchema {
  collectionName: 'components_components_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    button_label: Schema.Attribute.String & Schema.Attribute.Required;
    button_URL: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsHeroSlugs extends Struct.ComponentSchema {
  collectionName: 'components_components_hero_slugs';
  info: {
    displayName: 'hero-slugs';
  };
  attributes: {
    paths: Schema.Attribute.JSON & Schema.Attribute.Required;
  };
}

export interface HomeCarousel extends Struct.ComponentSchema {
  collectionName: 'components_home_carousels';
  info: {
    displayName: 'carousel';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeCarouselItem extends Struct.ComponentSchema {
  collectionName: 'components_home_carousel_items';
  info: {
    displayName: 'carousel-item';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    imagem: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    text_button: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    URL_button: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeContents extends Struct.ComponentSchema {
  collectionName: 'components_home_contents';
  info: {
    displayName: 'contents';
  };
  attributes: {
    category: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    text_button: Schema.Attribute.String & Schema.Attribute.Required;
    text_on_the_left: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    URL_button: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    text_button: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    URL_button: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'atoms.inputs': AtomsInputs;
      'components.carousel': ComponentsCarousel;
      'components.carousel-slide': ComponentsCarouselSlide;
      'components.contact-form': ComponentsContactForm;
      'components.content-block': ComponentsContentBlock;
      'components.contents': ComponentsContents;
      'components.hero': ComponentsHero;
      'components.hero-slugs': ComponentsHeroSlugs;
      'home.carousel': HomeCarousel;
      'home.carousel-item': HomeCarouselItem;
      'home.contents': HomeContents;
      'home.hero': HomeHero;
    }
  }
}
