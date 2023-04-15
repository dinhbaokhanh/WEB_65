import mongoose from "mongoose";
const restaurantSchema = new mongoose.Schema({
    name: String,
})
const restaurantModel = mongoose.model('restaurants' ,restaurantSchema);
export default restaurantModel;