const { Router } = require('express');
const router = Router();
const mercadopago = require('mercadopago')
mercadopago.configurations.setAccessToken("TEST-6139732084147337-052920-09ae31e7377ea02cb48aa7f3ce82e59e-576308190");

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/checkout', (req, res) => {
    console.log(req.body);
    const token = req.body.token;
    const payment_method_id = req.body.payment_method_id;
    const installments = req.body.installments;
    const issuer_id = req.body.issuer_id;

    mercadopago.configurations.setAccessToken('TEST-6139732084147337-052920-09ae31e7377ea02cb48aa7f3ce82e59e-576308190'); ///Esto no deberia ser visible, deberia estar en las variables de entorno

    var payment_data = {
        transaction_amount: 195,
        token: token,
        description: 'Small Cotton Keyboard',
        installments: installments,
        payment_method_id: payment_method_id,
        issuer_id: issuer_id,
        payer: {
            email: 'naomie.labadie@hotmail.com'
        }
    };

    // Guarda y postea el pago
    mercadopago.payment.save(payment_data)
        .then(function (data) {
            // ...    
            // Imprime el estado del pago
            console.log(payment.status);
            console.log(data);
            
        }).catch(function (error) {
            // ...
        });

    res.render('download')

})


module.exports = router;

