const generateReadme = (disc) => {
  console.log(disc);
  return `#${disc.title} ${disc.license[1]}

  ##Description

  ${disc.discription}

  ##Table of Contents

  - [Installation](#Installation)

  - [Usage](#Usage)

  - [License](#License)

  - [Contributing](#Contributing)

  - [Tests](#Tests)

  - [Questions](#Questions)

  ##Installation

  ${disc.installation}

  ##Usage

  ${disc.usage}

  ##License

  This application is covered by : ${disc.license[0]}

  ##Contributing

  Below are my guidelines on how you can contribute to my project

  ${disc.guideline}

  ##Tests

  ${disc.test}

  ###Questions

  Here is my GitHub page: [https://github.com/${disc.username}](https://github.com/${disc.username})

  If you would like to contact me with questions, ideas, or ways you would improve the project please click the link below!

  [${disc.email}](mailto:${disc.email})
  
  `;
};

export default generateReadme;
