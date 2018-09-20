const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"],
                include: path.resolve(__dirname, "../")
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(jpg|ttf|eot|svg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ]
    }
};