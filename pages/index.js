import Head from "next/head";
import { useEffect } from "react";
import { initGA, logPageView } from "@/utils/analytics";
import { info } from "@/data";

import Header from "@/components/Header";
import LinkList from "@/components/LinkList";
import Footer from "@/components/Footer";

function IndexPage() {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  console.log(info);

  return (
 <div className="flex flex-col min-h-screen py-10 px-6 sm:px-0 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-blue-900 via-purple-900 to-blue-900 animate-gradient-y">
      
      {/* FontAwesome CDN style tag */}
      <Head>
        <title>{info.name} | HAUS Links</title>
        <meta
          name="description"
          content="🌲 Most of the Links for DAOhaus Protocol."
        />
      </Head>

      {/* Profile Pic and Title Header*/}
      <Header />

      {/* List of Links generated from links.json */}
      <LinkList />

      {/* Social Links and Footer Disclaimer/Credits */}
      <Footer />
    </div>
  );
}

export default IndexPage;
