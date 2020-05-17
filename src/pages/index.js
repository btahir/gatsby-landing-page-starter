import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ValueProp from "../components/ValueProp";
import SocialProof from "../components/SocialProof";
import ProductBenefits from "../components/ProductBenefits";
import ProductFeatures from "../components/ProductFeatures";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ValueProp />
    <SocialProof />
    <ProductBenefits />
    <ProductFeatures />
    <Testimonials />
    <CallToAction />
  </Layout>
);

export default IndexPage;
