import React from "react";
import NavigationBar from "../../components/nav/NavigationBar";
import Cover from "../../components/cover/Cover";
import BlogItems from "../../components/blog/BlogItems";
import  Footer  from "../../components/footer/Footer";

import logo from "../../images/rbecoin.png";

const pageData = {
    banner: logo,
    title: "The Blog",
    description: "Welcome to the our blog. Get up-to-date information regarding the YNR Token.",
    cta: "Join Now",
    ctaLink: "#!",
};


function Blog() {
    return (
      <div className="body">
        <NavigationBar />
        <Cover
          title={pageData.title}
          description={pageData.description}
        />
        <BlogItems />
        <Footer />
      </div>
    );
}

export default Blog;