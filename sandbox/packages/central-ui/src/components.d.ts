/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface UjrButton {
    /**
    * The first name
    */
    'label': string;
  }
  interface UjrWatch {
    /**
    * The first name
    */
    'format': string;
  }
}

declare global {


  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLUjrButtonElement extends Components.UjrButton, HTMLStencilElement {}
  var HTMLUjrButtonElement: {
    prototype: HTMLUjrButtonElement;
    new (): HTMLUjrButtonElement;
  };

  interface HTMLUjrWatchElement extends Components.UjrWatch, HTMLStencilElement {}
  var HTMLUjrWatchElement: {
    prototype: HTMLUjrWatchElement;
    new (): HTMLUjrWatchElement;
  };
  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement;
    'ujr-button': HTMLUjrButtonElement;
    'ujr-watch': HTMLUjrWatchElement;
  }
}

declare namespace LocalJSX {
  interface MyComponent {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
  interface UjrButton {
    /**
    * The first name
    */
    'label'?: string;
  }
  interface UjrWatch {
    /**
    * The first name
    */
    'format'?: string;
  }

  interface IntrinsicElements {
    'my-component': MyComponent;
    'ujr-button': UjrButton;
    'ujr-watch': UjrWatch;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
      'ujr-button': LocalJSX.UjrButton & JSXBase.HTMLAttributes<HTMLUjrButtonElement>;
      'ujr-watch': LocalJSX.UjrWatch & JSXBase.HTMLAttributes<HTMLUjrWatchElement>;
    }
  }
}


