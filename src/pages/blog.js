import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";

const Blog = () => {
  // Use useStaticQuery to fetch data
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              slug
              title
              date
            }
            excerpt(pruneLength: 150)
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>Blog site</h1>

      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>

            <Link to={`/blog/${node.frontmatter.slug}`}>
              <button className="my-10 p-3 text-blue-800 font-semibold border-gray-800 rounded-md bg-blue-300">
                Read more
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Blog;
