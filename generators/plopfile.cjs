module.exports = (plop) => {
    plop.setGenerator('component', {
        description: 'Create a component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your component name?'
            }
        ],
        actions: [
            {
                type: 'add',
                path: '../src/components/{{kebabCase name}}/index.tsx',
                templateFile: 'templates/Component.tsx.hbs'
            },
            {
                type: 'add',
                path: '../src/components/{{kebabCase name}}/stories.tsx',
                templateFile: 'templates/stories.tsx.hbs'
            },
            {
                type: 'add',
                path: '../src/components/{{kebabCase name}}/index.spec.tsx',
                templateFile: 'templates/test.tsx.hbs'
            }
        ]
    })
}