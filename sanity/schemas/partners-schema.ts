const partner = {
  name: 'partner',
  title: 'Partners',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'url',
      title: 'Url',
      type: 'string'
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'altText',
          title: 'Alt Text',
          type: 'string'
        }
      ]
    }
  ]
}

export default partner