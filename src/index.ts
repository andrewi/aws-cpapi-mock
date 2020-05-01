import ApiBuilder from "claudia-api-builder";

import note from "./assets/api/notes/get.notes.json";

const api: any = new ApiBuilder();

// API Definitions
api.get("/api/hello", () => "Hello world"); // test call: hello

api.get("/api/notes/get-note", () => { return note; });

export = api;
