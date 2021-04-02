const { Router } = require('express')

const router = Router()

//Retorna Todos os Produtos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna os produtos'
    });
});

//Insere um Produto
router.post('/', (req, res, next) => {

    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    };

    res.status(201).send({
        mensagem: 'Insere produtos',
        produtoCriado: produto
    });
    
});

//Retorna os dados de um produto
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto

    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'Você descobriu o ID especial',
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: 'Você passou um ID'
        });
    }
})

//Altera um produto
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Altera o produto'
    })
});

//Exclui um Produto
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Exclui um produto'
    })
});

module.exports = router;