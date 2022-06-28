import inquirer from "inquirer";
import fs from "fs";
import generateReadme from "./assets/js/template.js";

const newReadme = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title to your project? (Required)",
        validate: (title) => {
          if (title) {
            return true;
          } else {
            console.log("Please enter a project title!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "discription",
        message: "Enter a short discription about the project. (Required)",
        validate: (discription) => {
          if (discription) {
            return true;
          } else {
            console.log("Please enter a discription!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "installation",
        message: "Enter installation instructions. (Required)",
        validate: (installation) => {
          if (installation) {
            return true;
          } else {
            console.log("Please enter instal instructions!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "usage",
        message: "Enter steps for application usage.",
        validate: (usage) => {
          if (usage) {
            return true;
          } else {
            console.log("Please enter how to use application");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "license",
        message: "What License repersents your project?",
        choices: [
          "Apache",
          "Boost",
          "BSD",
          "Creative Commons",
          "Eclipse",
          "GNU",
          "The Organization for Ethical Source",
          "IBM",
          "ISC",
          "MIT",
          "Mozilla",
          "Open Data Commons",
          "Perl",
          "SIL",
          "Unlicense",
          "WTFPL",
          "Zlib",
        ],
      },
      {
        type: "input",
        name: "guideline",
        message: "Enter a guideline:",
        validate: (guideline) => {
          if (guideline) {
            return true;
          } else {
            console.log("Please enter your contribution guideline!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "test",
        message: "Enter your Test instructions",
        validate: (test) => {
          if (test) {
            return true;
          } else {
            console.log("Please enter how to test your application!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "username",
        message: "Enter your GitHub username to link to your GitHub account.",
        validate: (username) => {
          if (username) {
            return true;
          } else {
            console.log("Please enter your GitHub username!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter your E-Mail address to have users contact you.",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter your email address!");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "comfirmVideo",
        message: 'Would you like to add a "How to Use" video link?',
        default: false,
      },
      {
        type: "input",
        name: "video",
        message: "Enter your video link",
        when: ({ confirmVideo }) => {
          if (confirmVideo) {
            return true;
          } else {
            return false;
          }
        },
      },
    ])
    .then((newReadmeData) => {
      switch (newReadmeData.license) {
        case "Apache":
          newReadmeData.license = [
            "Apache",
            "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
          ];
          return newReadmeData;
        case "Boost":
          newReadmeData.license = [
            "Boost",
            "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
          ];
          return newReadmeData;
        case "BSD":
          newReadmeData.license = [
            "BSD",
            "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
          ];
          return newReadmeData;
        case "Creative Commons":
          newReadmeData.license = [
            "Creative Commons",
            "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
          ];
          return newReadmeData;
        case "Eclipse":
          newReadmeData.license = [
            "Eclipse",
            "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
          ];
          return newReadmeData;
        case "GNU":
          newReadmeData.license = [
            "GNU",
            "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
          ];
          return newReadmeData;
        case "The Organization for Ethical Source":
          newReadmeData.license = [
            "The Organization for Ethical Source",
            "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)",
          ];
        case "IBM":
          newReadmeData.license = [
            "IBM",
            "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
          ];
          return newReadmeData;
        case "ISC":
          newReadmeData.license = [
            "ISC",
            "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
          ];
          return newReadmeData;
        case "MIT":
          newReadmeData.license = [
            "MIT",
            "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
          ];
          return newReadmeData;
        case "Mozilla":
          newReadmeData.license = [
            "Mozilla",
            "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
          ];
        case "Open Data Commons":
          newReadmeData.license = [
            "Open Data Commons",
            "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)",
          ];
          return newReadmeData;
        case "Perl":
          newReadmeData.license = [
            "Perl",
            "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
          ];
          return newReadmeData;
        case "SIL":
          newReadmeData.license = [
            "SIL",
            "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)",
          ];
          return newReadmeData;
        case "Unlicense":
          newReadmeData.license = [
            "Unlicense",
            "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
          ];
          return newReadmeData;
        case "WTFPL":
          newReadmeData.license = [
            "WTFPL",
            "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)",
          ];
          return newReadmeData;
        case "Zlib":
          newReadmeData.license = [
            "Zlib",
            "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",
          ];
          return newReadmeData;
      }
    });
};

newReadme().then((readmeObj) => {
  const readmeTemplate = generateReadme(readmeObj);
  fs.writeFile("README.md", readmeTemplate, (err) => {
    if (err) throw err;
    console.log("Your README has been generated!");
  });
});
