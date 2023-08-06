const page = {
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "altText",
          title: "Alt Text",
          type: "string",
        },
        {
          name: "imagesize",
          title: "Image Size",
          type: "array",
          of: [{ type: "reference", to: { type: "imagesize" } }],
        },
      ],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
}

export default page