const licenseInfo = {
  UNLICENSED: {
    name: "Unlicensed",
    url: ""
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

![${licenseInfo[data.lisc].name}](https://img.shields.io/badge/license-${data.lisc}-green)

## Table of Contents
  1. [Description](#Description)
  2. [Installation](#Installation)
  3. [Usage](#Usage)
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [License](#License)
  7. [Questions](#Questions)

## Description

${data.desc}

## Installation

\`\`\`
${data.install}
\`\`\`

## Usage

\`\`\`
${data.usage}
\`\`\`

## Contributing

${data.contrib}

## Tests

\`\`\`
${data.test}
\`\`\`

## License

${licenseInfo[data.lisc].url ? `[${licenseInfo[data.lisc].name}](${licenseInfo[data.lisc].url})` : licenseInfo[data.lisc].name}

## Questions

GitHub: [${data.github}](https://github.com/${data.github})

E-mail: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
