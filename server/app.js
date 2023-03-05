const express = require('express')
const ejs = require('ejs')
const paypal = require('paypal-rest-sdk')
const app = express()

  // const items = [
    //     {
    //         "name": "Gói VIP 1",
    //         "sku" : "001",
    //         "price" : "25.00",
    //         "currency" :"USD",
    //         "quantity" :1
    //     },
    //     {
    //         "name": "Gói VIP 2",
    //         "sku" : "002",
    //         "price" : "30.00",
    //         "currency" :"USD",
    //         "quantity" :2
    //     },
    //     {
    //         "name": "Gói VIP 3",
    //         "sku" : "003",
    //         "price" : "35.00",
    //         "currency" :"USD",
    //         "quantity" :3
    //     },
    // ]
    // var total = 0;
    // for(let i = 0; i <items.length ; i++) {
    //     total += parseFloat(items[i].price) * items[i].quantity
    // }
    paypal.configure({
        'mode': 'sandbox', //sandbox or live
        'client_id': process.env.CLIENT_ID,
        'client_secret': process.env.CLIENT_SECRET, 
      });
      
    app.set('view engine', 'ejs')
    app.get('/', (req, res) => res.render('index'))
      app.post('/pay' , (req , res)=>{
        const create_payment_json = {
            "intent" : "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls" : {
                "return_url": "http://localhost:8000/success",
                "cancel_url" :"http://localhost:8000/cancel"
            },
            "transactions" : [{
                "item_list":{
                    "items": [
                        {
                            "name": "Gói VIP 1",
                            "sku" : "001",
                            "price" : "25.00",
                            "currency" :"USD",
                            "quantity" :1
                        }
                    ]
                },
                "amount" :{
                    "currency" : "USD",
                    "total": "25.00"
                },
                "description": "Gói ưu đãi cho khách hàng mới"
            }]
        };
        paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                throw error;
            } else {
               for(let i=0 ; i< payment.links.length; i++) {
                if(payment.links[i].rel === 'approval_url') {
                    res.redirect(payment.links[i].href)
                }
               }
            }
        });
    })
    
    app.get('/success', (req, res) => {
        const payerId = req.query.PayerID
        const paymentId = req.query.paymentId
        const execute_payment_json = {
            "payer_id": payerId,
            "transactions": [{
                "amount":{
                    "currency" : "USD",
                    "total" :"25.00"
                }
            }]
        }
        paypal.payment.execute(paymentId, execute_payment_json, function(err, payment) {
            if(err) {
                console.log(err.response);
                throw err;
            }else {
                console.log(JSON.stringify(payment));
                res.send('Bạn đã mua thành công gói VIP')
            }
        })
    })
    app.get('/cancel', (req, res) => res.send('Bạn đã hủy gói này !'))
    app.listen(8000, () => console.log('server start'))
function handleBuyVIP () {
  
}

module.exports = {handleBuyVIP}