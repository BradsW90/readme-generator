const generateReadme = (disc) => {
  console.log(disc);
  return `#${disc.title} ${disc.license[1]}

  ##Description

  ##Table of Contents

  ##Installation

  ##Usage

  ##License

  ##Contributing

  ##Tests

  ###Questions
  
  `;
};

export default generateReadme;
