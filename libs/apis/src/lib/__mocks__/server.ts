import { Server } from "miragejs";

export const initialize = () => {
  const window = globalThis as any;

  if (window.server) {
    window.server.shutdown();
  }

  console.log("start development server");
  const server = new Server({
    routes() {
      this.get("/api/test", () => {
        return {
          movies: [
            { id: 1, name: "Inception", year: 2010 },
            { id: 2, name: "Interstellar", year: 2014 },
            { id: 3, name: "Dunkirk", year: 2017 }
          ]
        };
      });
    }
  });
  window.server = server;
};
