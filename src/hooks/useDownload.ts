export function useDownloadResume() {
  const resume = "/assets/Resume.pdf";
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Sahedul_Islam_Rony_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return downloadResume;
}
