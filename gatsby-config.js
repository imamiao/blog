module.exports = {
  siteMetadata: {
    title: `AB技术分享`,
    image: "/gatsby-icon.png",
    description: `AB技术分享`,
    //siteUrl: `https://imamiao.github.io/`,
    siteUrl: `https://my.b2a1.cn/`,
    social: {
      douban: "#",
      email: "#",
      facebook: "#",
      github: "#",
      instagram: "#",
      linkedin: "#",
      rss: "/rss.xml",
      telegram: "#",
      twitter: "#",
      youtube: "#",
    },
    sidebarMenu: [
      { url: "/archive/", label: "归档" },
      { url: "/tags/", label: "标签" },
      { url: "/about", label: "About" },
    ],
    footerHTML: `© 2022 <a href="https://github.com/imamiao">YM</a> All rights reserved.<br/><a class="text-color" href="https://beian.miit.gov.cn" target="_blank">豫ICP备18021952号-1</a>`,
    dateFormat: `YYYY-MM-DD`,
    language: `zh`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                table: "table table-hover",
              },
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  title: edge.node.frontmatter.title,
                  description:
                    edge.node.frontmatter.description || edge.node.excerpt,
                  date: edge.node.fields.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [fields___date] },
                  filter: {frontmatter: {layout: {ne: "page"}}},
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { 
                        slug 
                        date
                      }
                      frontmatter {
                        title
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "AB技术分享",
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Breeze`,
        short_name: `Breeze`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Quicksand`, `Noto Serif SC`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-gitalk",
      options: {
        config: {
          clientID: "dcd23e10aa2980da66bf",
          clientSecret: "031dc8e15f76c6e32f17688f793a22d23bd7bd93",
          repo: "imamiao.github.io",
          owner: "imamiao",
          admin: ["imamiao"],
          pagerDirection: "last",
          createIssueManually: true,
          distractionFreeMode: true,
          enableHotKey: true,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
