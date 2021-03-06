module.exports = {
    compact: true,
    presets: [
        [
            '@babel/preset-env',
            {
                modules: false,
                targets: {
                    browsers: ['last 2 versions', 'ie >= 9'],
                },
            },
        ],
        '@babel/preset-react',
        '@babel/preset-typescript',
    ],
    plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-transform-runtime',
    ],
    env: {
        test: {
            plugins: [
                '@babel/plugin-transform-modules-commonjs',
                '@babel/plugin-syntax-dynamic-import',
            ],
        },
    },
};
