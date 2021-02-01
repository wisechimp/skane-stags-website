const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/blogpost.js")

  return graphql(`
    {
      allWordpressPost {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const BlogPosts = result.data.allWordpressPost.edges
    BlogPosts.forEach(post => {
      createPage({
        path: `/news/${post.node.slug}`,
        component: BlogPostTemplate,
        context: {
          id: post.node.wordpress_id,
        },
      })
    })
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type KitJson implements Node {
      id: String!
      name: String!
      description: String!
      imageSrc: File @fileByRelativePath
      imageAlt: String!
    },
    type ResultsJson implements Node {
      id: String!
      homeTeam: String!
      homeScore: String!
      awayTeam: String!
      awayScore: String!
      date: String!
      venue: String!
    }
  `
  createTypes(typeDefs)
}
