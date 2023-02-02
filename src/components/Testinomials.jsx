import { PngProfileimg } from "../assets";
import TestinomialEntry from "./TestinomialEntry";

export default function Testinomials() {
  return (
    <div className="testimonials__section">
      <div className="testinomials__section__heading">Testinomials</div>
      <div className="testimonials__container">
        <TestinomialEntry
          img={PngProfileimg}
          heading="Nadeem Butt"
          subheading="Chief Executive Officer"
          description="An investment banker by profession having more than 30 years of
        extensive experience in project finance, business development and
        general management. Mr. Nadeem has been involved in various aspects of
        business development ......"
        />
        <TestinomialEntry
          img={PngProfileimg}
          heading="Nadeem Butt"
          subheading="Chief Executive Officer"
          description="As a member chartered certified account and CFA Charter Holder, he leads our corporate- and investment-banking, helping clients across sell-side, buy-side, and market infrastructure to transform and improve performance through the use of technology..... "
        />
        <TestinomialEntry
          img={PngProfileimg}
          heading="Nadeem Butt"
          subheading="Chief Executive Officer"
          description="Mr. Istafa Zaidi is leading the investment banking wing of the Company and is specialized in Stock Market Listing, Private Equity, Venture Funding, Joint Venture, and M&A. He is a Professional Accountant and Investment Banker with an Masters from a ....."
        />
      </div>
    </div>
  );
}
