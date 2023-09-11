// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vite/client" />
declare module "*.vue" {
  import { type DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
// declare module "vite-plugin-eslint";
// declare module "@vitejs/plugin-vue";
// declare module "vite";
