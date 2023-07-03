const menuItem = {
  name: "menuItem",
  title: "Menu Items",
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
        source: 'name',
        maxLength: 96
      }
    }
  ],
}

export default menuItem