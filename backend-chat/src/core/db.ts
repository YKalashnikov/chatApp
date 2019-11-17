import mongoose from 'mongoose';


 mongoose.connect(String(process.env.MONGO_DB), {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

