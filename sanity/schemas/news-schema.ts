const news = {
  name: "news",
  title: "News",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
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
          of: [{type: 'reference', to: {type: 'imagesize'}}]
        }
      ],
    },
    {
      name: 'publishedOn',
      title: 'Published on',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{
        type: 'block'
      }]
    }
  ]
}

export default news
