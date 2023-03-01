import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        label: "Pages",
        name: "pages",
        path: "content",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "datetime",
            name: "date",
            label: "date",
          },
          {
            type: "string",
            name: "tags",
            label: "tags",
            list: true,
            options: [
              "Blockchain",
              "Calligraphy",
              "Machine Learning",
              "Speaking",
              "Musing",
            ],
          },
          {
            type: "string",
            name: "author",
            label: "author",
          },
          {
            type: "boolean",
            name: "showToc",
            label: "showToc",
          },
          {
            type: "boolean",
            name: "TocOpen",
            label: "TocOpen",
          },
          {
            type: "object",
            name: "cover",
            label: "cover",
            fields: [
              {
                type: "string",
                name: "image",
                label: "image",
              },
              {
                type: "string",
                name: "alt",
                label: "alt",
              },
              {
                type: "string",
                name: "caption",
                label: "caption",
              },
            ],
          },
          {
            type: "boolean",
            name: "disableshare",
            label: "disableShare",
          },
        ],
      },
      {
        label: "Posts",
        name: "posts",
        path: "content/posts",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "datetime",
            name: "date",
            label: "date",
          },
          {
            type: "string",
            name: "tags",
            label: "tags",
            list: true,
            options: [
              "Blockchain",
              "Calligraphy",
              "Machine Learning",
              "Speaking",
              "Musing",
            ],
          },
          {
            type: "string",
            name: "author",
            label: "author",
          },
          {
            type: "boolean",
            name: "showToc",
            label: "showToc",
          },
          {
            type: "boolean",
            name: "TocOpen",
            label: "TocOpen",
          },
          {
            type: "object",
            name: "cover",
            label: "cover",
            fields: [
              {
                type: "string",
                name: "image",
                label: "image",
              },
              {
                type: "string",
                name: "alt",
                label: "alt",
              },
              {
                type: "string",
                name: "caption",
                label: "caption",
              },
            ],
          },
          {
            type: "boolean",
            name: "disableshare",
            label: "disableShare",
          },
        ],
      },
    ],
  },
});
