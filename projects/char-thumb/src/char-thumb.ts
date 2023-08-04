function charThumb(name: string, option: charThumbOption) {
    const words = name.split(' ');
    const wordCount = words.length;
  
    if (wordCount >= option.size) {
      let initials = '';
      for (let i = 0; i < option.size; i++) {
        initials += words[i][0].toUpperCase();
      }
  
      return initials;
    } else {
      let initials = '';
      for (let i = 0; i < wordCount; i++) {
        initials += words[i][0].toUpperCase();
      }
  
      while (initials.length < option.size) {
        initials += "00";
      }
  
      return initials;
    }
  }
  interface charThumbOption {
    size: number;
  }
  export default charThumb;