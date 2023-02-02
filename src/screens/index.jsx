import {
  GetInTouch,
  HomepageAboutSection,
  HomepageBanner,
  IndustriesSolution,
  OurClientsHomepage,
  Ourspecialities,
  RecentlyListedAssets,
  StartYourTokenization,
  Testinomials,
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
      <RecentlyListedAssets />
      <Testinomials />
      <GetInTouch />
    </>
  );
}
