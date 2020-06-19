import 'cypress-svelte-unit-test';

declare module 'cypress-svelte-unit-test' {
  export interface ComponentOptions {
    props?: {
      [key: string]: unknown;
    };
    callbacks?: {
          [key: string]: function;
    };
  }
}
