import mongoose from "mongoose";

// Create a Database connection
export default  async function connect() {
    try {
        mongoose.connect(process.env.MONGO_DB_URL!)
        const connection = mongoose.connection;

         connection.on('connected', ()=>{
            console.log('MongoDB Connected Successfully')
         })

         connection.on('error', (error)=>{
            console.log('MongoDB Connection Error. Please make sure db is running. ' + error);
            process.exit();
         })

        
    } catch (error) {
        console.log('Some thing went wrong.');
        console.log((error as {message:string}).message)
    }
}