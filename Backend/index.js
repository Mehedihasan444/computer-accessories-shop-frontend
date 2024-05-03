const express = require("express");
const cors = require("cors");
const jwt=require('jsonwebtoken');
// const cookieParser=require('cookie-parser')
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// ==========middleware==========
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.u9t7oll.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.mjmr8hf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // collections
    const products = client.db("XYZ").collection("products");
    const cart = client.db("XYZ").collection("cart");
    const orders = client.db("XYZ").collection("orders");
    const wishlist = client.db("XYZ").collection("wishlist");
    const users = client.db("XYZ").collection("users");
    const reviews = client.db("XYZ").collection("reviews");
    const payments = client.db("XYZ").collection("payments");
const offers = client.db("XYZ").collection("offers");


    // security 
    app.post('/jwt',async (req, res) => {

      const user = req.body;
      const token = jwt.sign(user,process.env.ACCESS_TOKEN,{expiresIn:'1h'});
      res.send(token)
    })
    
    const verifyToken = (req,res,next)=>{
      // console.log("inside VF",req.headers)
      if (!req.headers.authorization) {
        return res.status(401).send({message: 'Access Denied'})
      }
      const token = req.headers.authorization.split(' ')[1]
      jwt.verify(token,process.env.ACCESS_TOKEN,(err,decoded)=>{
        if (err) {
          return res.status(401).send({message: 'Access Denied'})
        }
        req.decoded = decoded;
        next();
      })
    }
    const verifyAdmin =async (req,res,next)=>{
    const email= req.decoded.email;
    const query = {email: email};
    const user = await users.findOne(query);
    const isAdmin = user?.role ==='admin';
    if (!isAdmin) {
      return res.status(401).send({message: 'forbidden access'})
    }
    next();
    }
    
    // payment

    // app.post("/create-payment-intent", async (req, res) => {
    //   const { price } = req.body;
    //   const paymentIntent = await stripe.paymentIntents.create({
    //     amount: parseInt(price*100),
    //     currency: "usd",
    //     payment_method_types:['card'],
    //   });
    //   res.send({
    //     clientSecret: paymentIntent.client_secret,
    //   });
    // });
    // app.get('/payments/:email', verifyToken, async (req, res) => {
    //   const query = { email: req.params.email }
    //   if (req.params.email !== req.decoded.email) {
    //     return res.status(403).send({ message: 'forbidden access' });
    //   }
    //   const result = await payments.find(query).toArray();
    //   res.send(result);
    // })
    // app.get('/payments', verifyToken, async (req, res) => {
      
    //   const result = await payments.find().toArray();
    //   res.send(result);
    // })

    // app.patch('/payments/status/update/:id', verifyToken, async (req, res) => {
    //   const id=req.params.id;
    //   const filter = {_id: new ObjectId(id)}
    //   const updatedDoc = {
    //     $set:{
    //       status:'Done'
    //     }
    //   }
    //   const result =  await payments.updateOne(filter,updatedDoc);
    //   res.send(result);
    // })
    
    // app.post('/payments', async (req, res) => {
    //   const payment = req.body;
    //   const paymentResult = await payments.insertOne(payment);
    
    //   //  carefully delete each item from the cart
    //   console.log('payment info', payment);
    //   const query = {
    //     _id: {
    //       $in: payment.cartIds.map(id => new ObjectId(id))
    //     }
    //   };
    //   const deleteResult = await cart.deleteMany(query);
    
    //   // send user email about payment confirmation
    //   // mg.messages
    //   //   .create(process.env.MAIL_SENDING_DOMAIN, {
    //   //     from: "Mailgun Sandbox <postmaster@sandboxbdfffae822db40f6b0ccc96ae1cb28f3.mailgun.org>",
    //   //     to: ["xyz@gmail.com"],
    //   //     subject: "XYZ Order Confirmation",
    //   //     text: "Testing some Mailgun awesomness!",
    //   //     html: `
    //   //       <div>
    //   //         <h2>Thank you for your order</h2>
    //   //         <h4>Your Transaction Id: <strong>${payment.transactionId}</strong></h4>
    //   //         <p>We would like to get your feedback about the food</p>
    //   //       </div>
    //   //     `
    //   //   })
    //   //   .then(msg => console.log(msg)) // logs response data
    //   //   .catch(err => console.log(err)); // logs any error`;
    
    //   res.send({ paymentResult, deleteResult });
    // })





    // post method for products
    app.post("/api/v1/products", async (req, res) => {
      const test = req.body;
      const result = await products.insertOne(test);
      res.send(result);
    });
    app.post("/api/v1/cart", async (req, res) => {
      const test = req.body;
      const result = await cart.insertOne(test);
      res.send(result);
    });
    app.post("/api/v1/wishlist", async (req, res) => {
      const test = req.body;
      const result = await wishlist.insertOne(test);
      res.send(result);
    });
    app.post("/api/v1/orders", async (req, res) => {
      const test = req.body;
      const result = await orders.insertOne(test);
      res.send(result);
    });
    app.post("/api/v1/payments", async (req, res) => {
      const test = req.body;
      const result = await payments.insertOne(test);
      res.send(result);
    });
    app.post("/api/v1/users", async (req, res) => {
      const user = req.body;
      const query = { email: user.email };
      const existing = await users.findOne(query);
      if (existing) {
        return res.send({ message: "user already exist", insertedId: null });
      }
      const result = await users.insertOne(user);
      res.send(result);
    });
    app.post("/api/v1/reviews", async (req, res) => {
      const test = req.body;
      const result = await reviews.insertOne(test);
      res.send(result);
    });
  


    // delete methods
    app.delete("/api/v1/users/admin/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email:email};
      const result = await users.deleteOne(query);
      res.send(result);
    });
    app.delete("/api/v1/admin/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await products.deleteOne(query);
      res.send(result);
    });
    app.delete("/api/v1/users/cart/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await cart.deleteOne(query);
      res.send(result);
    });
    app.delete("/api/v1/users/wishlist/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await wishlist.deleteOne(query);
      res.send(result);
    });
    app.delete("/api/v1/users/order/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await orders.deleteOne(query);
      res.send(result);
    });
    app.delete("/api/v1/admin/reviews/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await reviews.deleteOne(query);
      res.send(result);
    })


    // update methods
    app.patch("/api/v1/users/admin/:email", async (req, res) => {
      const email = req.params.email;
      const filter = { email: email };
      const updatedDoc = {
        $set: {
          role: "admin",
        },
      };
      const result = await users.updateOne(filter, updatedDoc);
      res.send(result);
    });
    app.patch("/api/v1/users/updateProfile/:email", async (req, res) => {
      const email = req.params.email;
      const data=req.body
      const filter = { email: email};
      const updatedDoc = {
        $set: {
          name: data?.name,
          email: data?.email,
          phone: data?.phone,
          image: data?.image,
        },
      };
      const result = await users.updateOne(filter, updatedDoc);
      res.send(result);
    });
    
    app.patch("/api/v1/admin/products/:id", async (req, res) => {
      const id = req.params.id;
      const product = req.body;
      const filter = { _id: new ObjectId(id) };
      const updatedDoc = {
        $set: {
          name: product.name,
          brand: product.brand,
          model: product.model,
          price: product.price,
          discount_price: product.discount_price,
          stock: product.stock,
          rating: product.rating,
          reviews: product.reviews,
          description: product.description,
          category: product.category,
          tag: product.tag,
          images: product.images,
        },
      };
      const result = await products.updateOne(filter, updatedDoc);
      res.send(result);
    });
    app.patch("/api/v1/admin/products/offers", async (req, res) => {
      const data=req.body
      const filter = { category:'offer'};
      const updatedDoc = {
        $set: {
          // title:data.title,
          // percentage:data.percentage,
          // days:data.days,
          // hours:data.hours,
          // minutes:data.minutes,
          // seconds:data.seconds,
          // products:data.products,
          // category:data.category,
          products:data.products,
        },
      };
      const result = await offers.updateOne(filter, updatedDoc);
      res.send(result);
    });

    


    // get methods
    app.get("/api/v1/products", async (req, res) => {
      let queryObj = {};
      let sortObj = {};
      const category = req.query.category;
      const brand = req.query.brand;
      const sortField = req.query.sortField;
      const sortOrder = req.query.sortOrder;
      const page = Number(req.query.page);
      const limit = Number(req.query.limit);
      const skip = (page - 1) * limit;
      const productName = req.query.productName;
      // console.log(category, sortField, sortOrder,productName, limit,skip)
      if (category) {
        queryObj.category = category;
      }
      if (brand) {
        queryObj.brand = brand;
      }
      if (sortField && sortOrder ) {
        if (sortOrder=='rating' ) {
          sortObj['rating'] = 'desc';
        }else{

          sortObj[sortField] = sortOrder;
        }
      }
      if (productName) {
        const searchTerm = new RegExp(productName, "i"); // 'i' for case-insensitive search
        queryObj.name = searchTerm;
      }
      const result = await products
        .find(queryObj)
        .skip(skip)
        .limit(limit)
        .sort(sortObj)
        .toArray();
      const count = await products.estimatedDocumentCount();
      res.send({ result, count });
    });


    // app.get("/api/v1/products", async (req, res) => {
    //   let queryObj = {};
      
    //   const productName = req.query.productName;
    //  console.log(productName);
    //   if (productName) {
    //     const searchTerm = new RegExp(productName, "i"); // 'i' for case-insensitive search
    //     queryObj.name = searchTerm;
    //   }
    //   const result = await products.find(queryObj).toArray();

    //   console.log(result)
    //   res.send(result);
    // });
  

    app.get("/api/v1/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await products.findOne(query);
      res.send(result);
    });
    app.get("/api/v1/users", async (req, res) => {
      const result = await users.find().toArray();
      res.send(result);
    });
    app.get("/api/v1/users/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = await users.findOne(query);
      res.send(result);
    });
    app.get("/api/v1/admin/:email",async (req, res) => {
        const email = req.params.email;
        const query = {
          email: email,
          role: "admin",
        };
        const result = await users.findOne(query);
        //console.log(result);
        if (result) {
          res.send({ admin: true });
        } else {
          res.send({ admin: false });
        }
        // res.send(result);
      }
    );


    app.get("/api/v1/cart/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = await cart.find(query).toArray();
      res.send(result);
    });
    app.get("/api/v1/wishlist/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = await wishlist.find(query).toArray();
      res.send(result);
    });
    app.get("/api/v1/orders", async (req, res) => {
      const result = await orders.find().toArray();
      res.send(result);
    });
    app.get("/api/v1/orders/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = await orders.find(query).toArray();
      res.send(result);
    });
    
    app.get("/api/v1/reviews", async (req, res) => {
      const result = await reviews.find().toArray();
      res.send(result);
    });
    app.get("/api/v1/reviews/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = await reviews.find(query).toArray();
      res.send(result);
    });
    app.get("/api/v1/payments", async (req, res) => {
      const result = await payments.find().toArray();
      res.send(result);
    });
    app.get("/api/v1/payments/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = await payments.find(query).toArray();
      res.send(result);
    });
    app.get("/api/v1/admin/products/offers", async (req, res) => {
     
      const result = await offers.findOne();
      res.send(result);
    });



    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
app.get("/", (req, res) => {
  res.send("Backend is running");
});
app.listen(port, () => {
  console.log(`backend is running on port ${port}`);
});
