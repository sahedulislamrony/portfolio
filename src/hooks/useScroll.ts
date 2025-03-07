function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    console.warn(`Section with id ${sectionId} not found`);
  }
}

export default function useScroll(sectionID: string) {
  const scrollToSectionHandler = () => {
    scrollToSection(sectionID);
  };
  return scrollToSectionHandler;
}
