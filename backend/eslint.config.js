export default [
    {
        files: ['**/*.js', '**/*.ts'], // only check .js files in server dir
        rules: {
            semi: 'warn', // to give the warning
            'no-unused-vars': 'warn', //warning if variables are  unused
        },
    },
];
