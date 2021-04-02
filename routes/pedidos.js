const { Router } = require('express')

const router = Router()

//Retorna Todos os pedidos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna os pedidos'
    });
});

//Insere um pedido
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'O pedido foi criado'
    });
});

//Retorna os dados de um pedido
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.pedido

    res.status(200).send({
        mensagem: 'Detalhes do Pedido',
        id_pedido: id
    });
});


//Exclui um Pedido
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido Excluido'
    })
});

module.exports = router;