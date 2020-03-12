const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');


module.exports = {

    entry:'./src/app/index.js',
    output:{
        path:path.join(__dirname, 'dist'),
        filename:'bundle.js'
    },
    devServer:{
        port:3000
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            }
        ]
    },
    plugins:[
        new htmlWebPackPlugin({
            template:'./src/index.html',
            

        })

    ]
};

    