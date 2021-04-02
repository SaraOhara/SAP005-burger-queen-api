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
    res.status(201).send({
        mensagem: 'Insere produtos'
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
        mensagem: 'Usando o Patch dentro da rota'
    })
});

//Exclui um Produto
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o delete dentro da rota'
    })
});

module.exports = router;