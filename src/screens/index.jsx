import {
  HomepageAboutSection,
  HomepageBanner,
  IndustriesSolution,
  OurClientsHomepage,
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
      <OurClientsHomepage />
    </>
  );
}
