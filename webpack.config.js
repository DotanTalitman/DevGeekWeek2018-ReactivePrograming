module.exports = {
    entry: "./example1.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: "babel-loader"
            }
        }]
    }
}