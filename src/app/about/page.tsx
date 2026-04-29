import AboutHero from "./AboutHero";
import OurTeam from "./OurTeam";

export const metadata = {
  title: "About Us | RevEnComm",
  description:
    "Learn more about our mission, vision, and the team driving digital excellence.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurTeam />
    </>
  );
}
