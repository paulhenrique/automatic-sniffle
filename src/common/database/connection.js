import mongoose from 'mongoose';

export default function connection() {
  mongoose.connect("" + process.env.DB_CONNECTION + "",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    (error) => {
      if (error) {
        console.log(error);
      }
    });
}