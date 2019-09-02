module.exports = {
    entry: './src/index.ts',
    resolve: {
        extensions: [".ts", ".js", ".scss"]
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            }
        ]
    }
};
