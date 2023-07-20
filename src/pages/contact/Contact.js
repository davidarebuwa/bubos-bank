import React from "react";
import NavigationBar from "../../components/nav/NavigationBar";
import Cover from "../../components/cover/Cover";
import Blocks from "../../components/blocks/Blocks";
import ContactForm from "../../components/contact-form/ContactForm";
import Footer from "../../components/footer/Footer";


const pageData = {
  title: "Got a question?",
  description: "We'd love to talk about how we can help you.",
};

function Contact() {
  return (
    <div className="body">
        <NavigationBar />
        <Cover
          title={pageData.title}
          description={pageData.description}
         />
        <Blocks />
        <ContactForm />
        <Footer />
    </div>
  );
}


export default Contact;