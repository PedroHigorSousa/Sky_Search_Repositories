module.exports = {
    entry: ['@babel/polyfill', './src/main.js'], // 1º Arquivo principal da aplicação, onde  é excrito todo o algorítimo.
    output: {           // 2º Define para qual arquivo deve ser enviado o algorítimo convertido pelo babel
        path: __dirname + '/public', //3º Corrresponde a raiz do arquivo webpack
        filename: "bundle.js", //4º Arquivo de Saída, ou seja, o arquivo que realmente vai para aplicação em produção
    },
    devServer: {
        contentBase: __dirname + '/public'
    },
    module: {
        rules: [ //5º Diz como o webpack deve se comportar quando o usuário tentar importar novos arquivos JS.
            {
                test: /\.js$/, //6º Expressão regular, que busca arquivos que terminam com a extensão (.js)
                exclude: /node_modules/, //7º Excluí a pasta node_modules, para que o babel não execute arquivos js que estão dentro dela
                use: {
                    loader: 'babel-loader', // Ler os arquivo js, para transpilar o algorítimo para versões mais antigas
                }
            }
        ],
    },
};