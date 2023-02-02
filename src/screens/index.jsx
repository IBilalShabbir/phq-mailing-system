import {
  HomepageAboutSection,
  HomepageBanner,
  IndustriesSolution,
  OurClientsHomepage,
  Ourspecialities,
  RecentlyListedAssets,
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
      <RecentlyListedAssets />
    </>
  );
}
