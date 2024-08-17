
const fs = require('fs');
const path = require('path');
const component = require('./Button'); // Adjust the path as necessary

const mdxContent = `
import { Meta, Story, Preview, Props } from '@storybook/addon-docs/blocks';
import ${component.name}Component from './${component.name}';

<Meta title="Components/${component.name}" />

# ${component.name} Component

## Overview
<${component.name}Component.Template />

## Interactive Example
<Story name="Default">
  <${component.name}Component.Component />
</Story>

## API Documentation

### Description
${component.description}

### Version
\`${component.version}\`

### Author
${component.author}

### License
\`${component.license}\`

### Methods

${Object.keys(component.api).map((methodName) => `
#### ${methodName}
- **Description**: ${component.docs[methodName].description}
- **Parameters**:
  ${Object.entries(component.docs[methodName].params).map(
    ([paramName, paramType]) => `
    - ${paramName}: ${paramType}
  `
  ).join('')}
- **Returns**: ${component.docs[methodName].returns}
`).join('')}

### Context

- **Category**: ${component.context.category}
- **Tags**: ${component.context.tags.join(', ')}
`;

fs.writeFileSync(path.join(__dirname, `${component.name}.stories.mdx`), mdxContent.trim());
