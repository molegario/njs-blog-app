import { Fragment } from "react";
import ContactForm from "../components/contact/contact-form";
import Head from "next/head";

export default function ContactPage() {
  return <Fragment>
    <Head>
      <title>Contact Us</title>
      <meta name="description" content="Post your messages, comments, and suggestions for this site here."/>
    </Head>
    <ContactForm />
  </Fragment>;
}