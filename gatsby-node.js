const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/blogpost.js")

  return graphql(`
    {
      allFile(filter: { sourceInstanceName: { eq: "news" } }) {
        nodes {
          childMdx {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const BlogPosts = result.data.allFile.nodes
    BlogPosts.forEach(post => {
      if (post.childMdx === null) {
        return
      }
      createPage({
        path: `/news/${post.childMdx.frontmatter.path}`,
        component: BlogPostTemplate,
        context: {
          id: post.childMdx.id,
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
