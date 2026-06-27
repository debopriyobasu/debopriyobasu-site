export function getReadingTime(text: string): number {
  if (!text) return 0;
  // Clean markdown format characters to avoid inflating word count
  const cleanText = text
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    .replace(/[#_*`~\-+>]/g, '')
    .trim();
  const words = cleanText.split(/\s+/).length;
  const wordsPerMinute = 200;
  return Math.ceil(words / wordsPerMinute);
}

export function localizeNumbers(num: number, lang: string): string {
  const numStr = num.toString();
  if (lang === 'bn') {
    const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return numStr.replace(/\d/g, (d) => bnDigits[parseInt(d)]);
  }
  if (lang === 'hi') {
    const hiDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
    return numStr.replace(/\d/g, (d) => hiDigits[parseInt(d)]);
  }
  return numStr;
}
