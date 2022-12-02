// This is your test secret API key.
const stripe = require('stripe')('sk_test_51M9BshKzv3xIbSEMw41cEWi5ypzoZbgmXfuk7N4LDTHZxaK8jhR368Y5fqyITGJRbfKiRMsiURikFOXKdp3jcRpu00VdWMoOau');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                // price: '{{PRICE_ID}}',
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: "Dummy",
                    },
                    unit_amount: 10 * 100,
                    // unit_amount:&{UNIT_PRICE.toFixed(2)}*100,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}?success=true`,
        cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });

    res.redirect(303, session.url);
});

app.listen(3001, () => console.log('Running on port 3001'));




//Editor server
// const fs=require('fs');
// const path = require("path");
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const multer = require('multer')

// const express = require("express");

// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


// const corsOrigin = 'http://localhost:3000';
// app.use(cors({
//   origin:[corsOrigin],
//   methods:['GET','POST'],
//   credentials: true 
// })); 
// //var date =JSON.parse(sessionStorage.getItem('localDate'));
// //let ca = document.cookie.split('=');
// //var cook=ca[1];
// //console.log(cook);
// var date="undefined";
// const imageUploadPath = 'C:/Users/Shamoil Khan/Desktop/editor/src/uploadedimages';
// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, imageUploadPath)
//   },
//   filename: function(req, file, cb) {
//     cb(null, `${file.fieldname}_dateVal_${file.originalname}`)
//   //  cb(null, `${file.fieldname}_dateVal_${date}_${file.originalname}`)
//   }
  
// }
// )


// const imageUpload = multer({storage: storage})

// app.post('/imageupload', imageUpload.array("my-image-file"), (req, res) => {
//     console.log('POST request received to /image-upload.');
//     console.log('Axios POST body: ', req.body);
//     res.send('POST request recieved on server to /imageupload.');
//   })




// const PORT = process.env.PORT || 3001;

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });