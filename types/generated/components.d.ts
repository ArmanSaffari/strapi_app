import type { Schema, Attribute } from '@strapi/strapi';

export interface PageButton extends Schema.Component {
  collectionName: 'components_page_buttons';
  info: {
    displayName: 'button';
    icon: 'expand';
  };
  attributes: {
    title: Attribute.String;
    icon: Attribute.String;
  };
}

export interface PageCode extends Schema.Component {
  collectionName: 'components_page_codes';
  info: {
    displayName: 'code';
    icon: 'hashtag';
  };
  attributes: {
    content: Attribute.Blocks;
  };
}

export interface PageHeader extends Schema.Component {
  collectionName: 'components_page_headers';
  info: {
    displayName: 'header';
    icon: 'file';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    buttons: Attribute.Component<'page.button', true>;
    image: Attribute.Media;
  };
}

export interface PageTextBlock extends Schema.Component {
  collectionName: 'components_page_text_blocks';
  info: {
    displayName: 'text Block';
    icon: 'layer';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Blocks;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page.button': PageButton;
      'page.code': PageCode;
      'page.header': PageHeader;
      'page.text-block': PageTextBlock;
    }
  }
}
