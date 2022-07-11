const generateReadme = (disc) => {
  const ifVideo = function(disc) {
    if (disc.confirmVideo) {
      return `Here is a example video on how to use the application: [Example Video](${disc.video})`
    }
  }
  console.log(disc);
  return `# ${disc.title} ${disc.license[1]}

  ## Description

  ${disc.discription}

  ## Table of Contents

  - [Installation](#Installation)

  - [Usage](#Usage)

  - [License](#License)

  - [Contributing](#Contributing)

  - [Tests](#Tests)

  - [Questions](#Questions)

  ## Installation

  ${disc.installation}

  ## Usage

  ${disc.usage}

  Here is an example video demonstrating how to use the application: 

  ## License

  This application is covered by : ${disc.license[0]}

  ## Contributing

  Below are my guidelines on how you can contribute to my project

  ${disc.guideline}

  ## Tests

  ${disc.test}

  ### Questions

  Here is my GitHub page: [https://github.com/${disc.username}](https://github.com/${disc.username})

  ${ifVideo(disc)}

  If you would like to contact me with questions, ideas, or ways you would improve the project please click the link below!

  My Email: [${disc.email}](mailto:${disc.email})
  
  `;
};

export default generateReadme;
