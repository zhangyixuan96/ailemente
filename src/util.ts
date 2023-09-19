import { getCurrentInstance, type ComponentInternalInstance } from "vue";
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useGlobalConfig() {
  const instance: ComponentInternalInstance | null = getCurrentInstance();
  if (instance == null) {
    console.log("useGlobalConfig 必须得在setup里面整");
    return;
  }
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  return instance.appContext.config.globalProperties.$AILEMENTE || {};
}
