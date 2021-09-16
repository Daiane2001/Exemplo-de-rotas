//nessa parte ficará tudo que cada rota irá fazer, assim os controllers serão feitos de forma assíncrona

module.exports={ 

    //Criando rotas
    async raiz(req,res){
        const result = await console.log('Servidor requisitado!');

        return res.send('Resposta do Servidor!'); //resposta para o front
    }, //programando para a raiz do servidor



    async produtos(req,res){
        const result = await console.log('Servidor requisitado!');

        return res.send('Resposta do Servidor para a rota produtos!'); //resposta para o front
    }, //programando para a raiz do servidor



    async exemplo(req,res){
        const result = await console.log('Servidor requisitado!');

        return res.send('Resposta do Servidor para a rota de exemplo!'); //resposta para o front
    } //programando para a raiz do servidor

}