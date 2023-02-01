import {
  HomepageAboutSection,
  HomepageBanner,
  IndustriesSolution,
  StartYourTokenization,
  TokenizationHomepage,
} from "../components";

export default function Index() {
  return (
    <>
      <HomepageBanner />
      <HomepageAboutSection />
      <TokenizationHomepage />
      <IndustriesSolution />
      <StartYourTokenization />
    </>
  );
}
