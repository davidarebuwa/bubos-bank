import React from "react";
import NavigationBar from "../../components/nav/NavigationBar";
import Hero from "../../components/hero/Hero";
import Description from "../../components/description/Description";
import Footer from "../../components/footer/Footer";

import logo from "../../images/Bank.png";
import hero from "../../images/bg-ruba.webp";

const pageData = {
  banner: logo,
  title: "About Bubos Bank",
  description:
    "Bubos Bank is a leading provider of financial services, offering a wide range of investment and banking services to a substantial and diversified client base that includes corporations, financial institutions, governments and individuals. ",
  cta: "Join Now",
  ctaLink: "#!",
};

const descriptionData = {
  title: "Introduction",
  description:
    "Ruba is a digital asset with a stable value of 12 USDT, which means that it is not subject to the volatility that often characterizes other cryptocurrencies. The Ruba token is backed by reserves held in a trusted financial institution, ensuring its stability and reliability. At Bubos Bank, we are proud to be the organization responsible for managing the Ruba token. We believe that stablecoins like Ruba have the potential to revolutionize the way people conduct financial transactions by offering a stable and secure alternative to traditional fiat currencies. Our team of experienced professionals is dedicated to ensuring the ongoing stability and success of Ruba. We work tirelessly to maintain the pegged value of 12 USDT, and we are committed to providing the highest level of security and transparency to our users. Thank you for choosing Bubos Bank and Ruba. We look forward to helping you achieve your financial goals.",
    logo: hero,

};


function About() {
  return (
    <div className="body">
      <NavigationBar />
      <Hero
        banner={pageData.banner}
        title={pageData.title}
        description={pageData.description}
        cta={pageData.cta}
        ctaLink={pageData.ctaLink}
       />
      <Description
        title={descriptionData.title}
        description={descriptionData.description}
        logo={descriptionData.logo}
      />
       <Footer />
    </div>
  );
}

export default About;
