const licenseInfo = {
  UNLICENSED: {
    name: "Unlicensed",
    url: ""
  },
  ISC: {
    name: "ISC License",
    url: "https://www.isc.org/licenses/"
  },
  MIT: {
    name: "MIT License",
    url: "https://opensource.org/licenses/MIT"
  },
  "Apache-2.0": {
    name: "Apache License 2.0",
    url: "https://www.apache.org/licenses/LICENSE-2.0"
  },
  "GPL-3.0": {
    name: "GNU General Public License v3.0",
    url: "https://www.gnu.org/licenses/gpl-3.0-standalone.html"
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

![${licenseInfo[data.lic].name}](https://img.shields.io/badge/license-${data.lic}-green)

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

${licenseInfo[data.lic].url ? `[${licenseInfo[data.lic].name}](${licenseInfo[data.lic].url})` : licenseInfo[data.lic].name}

## Questions

GitHub: [${data.github}](https://github.com/${data.github})

E-mail: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
