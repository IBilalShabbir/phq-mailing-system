import {
  HomepageAboutSection,
  HomepageBanner,
  IndustriesSolution,
  Ourspecialities,
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
      <Ourspecialities />
    </>
  );
}
