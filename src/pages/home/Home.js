import React from "react";
import NavigationBar from "../../components/nav/NavigationBar";
import Hero from "../../components/hero/Hero";
import Description from "../../components/description/Description";
import Sections from "../../components/sections/Sections";
import Services from "../../components/services/Services";
import Stats from "../../components/stats/Stats";
import Footer from "../../components/footer/Footer";

import logo from "../../images/rbecoin.webp";
import coinLogo from "../../images/coins.webp";


const pageData = {
  banner: logo,
  title: "Industry Leading Managed Services Solutions",
  description:
  "Ruba is a stable cryptocurrency, empowering you to save, invest and spend securely without the fear of currency depreciation.",
  cta: "Join the Ruba Free Community",
  ctaLink: "#!",
};

const descriptionData = {
  title: "What is Ruba?",
  description:
    "Ruba is a fiat currency which is a type of legal tender that is not backed by a physical commodity, such as gold or silver, but is instead backed by the government that issues it. Fiat currencies derive their value from the confidence that people have in the government's ability to maintain its value and to fulfill its obligations. Fiat currencies are legal tender and are accepted as a means of pavment by the government that issues them and by its citizens. The value of fiat currencies is determined by market forces, including supply and demand, and the economic and Political stability of the country that issues the currency. Examples of fiat currencies include the US dollar, the euro, the lapanese ven, the British pound. and Nigerian Naira. In contrast. commoditv-backed currencies, such as the gold standard, derive their value from the underlying commodity.",
  logo: coinLogo,
};


function Home() {
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
      <Sections />
      <Services />
      <Stats />
      <Footer />
    </div>
  );
}

export default Home;




