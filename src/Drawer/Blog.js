import React from 'react'
// Blog.js

const blogPosts = [
  {
    title: "Moving my blog to Eleventy, Part 3: Creating Layouts",
    publishedDate: "June 25, 2020",
    content: "Your blog content goes here...",
  },
  {
    title: "Moving my blog to Eleventy, Part 2: Getting Started",
    publishedDate: "May 13, 2020",
    content: "Your blog content goes here...",
  },
  {
    title: "Moving my blog to Eleventy, Part 1: Installing Node with NVM",
    publishedDate: "May 6, 2020",
    content: "Your blog content goes here...",
  },
  {
    title: "Hello, world. And why I'm blogging.",
    publishedDate: "September 2, 2019",
    content: "Your blog content goes here...",
  },
];
export default function Blog() {

  
  return (
    <div>
    <h1>Blog</h1>
    <ul>
      {blogPosts.map((post, index) => (
        <li key={index}>
          <h2>{post.title}</h2>
          <p>Published: {post.publishedDate}</p>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
  </div>
);
  
}

