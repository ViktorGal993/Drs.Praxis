import mongoose from "mongoose";


const formSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        match:[/^\S+@\S+\.\S+$/, "invalid email adress"],
    },
    datetime:{
        type:Date,
        required:true,
    }
},{timestamps:true});// es fügt die Info wann erstelt und update

const Form = mongoose.model("Form",formSchema);
export default Form;