import { defineConfig } from "vite";

const envSolve = {
  build: () => {
    console.log("开发环境");
    return { ...viteBaseConfig, ...viteDevConfig };
  },
  serve: () => {
    console.log("生产环境");
    return { ...viteBaseConfig, ...viteProdConfig };
  },
};

export default defineConfig(({ command }) => {
  console.log("process", process.env);
  return envSolve[command]();
});
