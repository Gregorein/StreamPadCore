import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Hardcoded categories and tags
const categories = ['buttons', 'knobs', 'toggles', 'indicators', 'sliders'];
const tags = ['action', 'display', 'basic', 'advanced'];

console.log('Categories:', categories);
console.log('Tags:', tags);

export default function (plop) {
  plop.setGenerator('control', {
    description: 'Generate a new UI control',
    prompts: [
      { type: 'input', name: 'name', message: 'Name of the control?' },
      { type: 'input', name: 'description', message: 'Description of the control?' },
      { type: 'input', name: 'author', message: 'Author of the control (GitHub name)?' },
      { type: 'input', name: 'license', message: 'License of the control?', default: 'MIT' },
      {
        type: 'list',
        name: 'category',
        message: 'Category of the control?',
        choices: categories,
      },
      {
        type: 'checkbox',
        name: 'tags',
        message: 'Tags for the control?',
        choices: tags,
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/controls/{{pascalCase name}}/index.tsx',
        templateFile: '../templates/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/controls/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: '../templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/controls/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: '../templates/test.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/controls/{{pascalCase name}}/{{pascalCase name}}.meta.ts',
        templateFile: '../templates/meta.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/controls/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: '../templates/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/controls/{{pascalCase name}}/{{pascalCase name}}.template.tsx',
        templateFile: '../templates/template.tsx.hbs',
      },
    ],
  });
}
