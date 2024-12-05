import inquirer from "inquirer";
import generateMarkdown from "./Develop/utils/generateMarkdown.js";

import fs from 'fs';
import path from 'path';


// Function to generate markdown content
function generateReadme(answers) {
  return `# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Video URL](#url)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

${generateMarkdown(answers)}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Video
[My Video:](https://${answers.video})

## Questions
For any questions, please contact me:
- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: ${answers.email}
`;
}

// Prompt questions for README generation
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: input => input.trim() !== '' ? true : 'Project title cannot be empty'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
    validate: input => input.trim() !== '' ? true : 'Description cannot be empty'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
    default: 'npm install'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:',
    default: 'npm start'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines:',
    default: 'Please open an issue or submit a pull request'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
    default: 'npm test'
  },
  {
    type: 'input',
    name: 'video',
    message: 'Please provide a link to your video:',
    default: 'www.google.com'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
    validate: input => input.trim() !== '' ? true : 'GitHub username cannot be empty'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    validate: input => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(input) ? true : 'Please enter a valid email address'
    }
  },
  ];

// Main function to run the README generator
async function generateReadmeFile() {
  try {
    // Prompt user for project details
    const answers = await inquirer.prompt(questions);

    // Generate README content
    const readmeContent = generateReadme(answers);
    // const readmeContent = generateMarkdown(answers);

    // Write README file
    const outputPath = path.join(process.cwd(), 'README.md');
    fs.writeFileSync(outputPath, readmeContent);

    console.log('✅ README.md successfully generated!');
  } catch (error) {
    console.error('❌ Error generating README:', error);
  }
}

// Run the generator
generateReadmeFile();