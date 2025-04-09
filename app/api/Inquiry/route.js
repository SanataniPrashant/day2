import custModel from '../../../model/data'
import dbConnect from '../../../libs/mongodb';


 export async function POST(req,res){

   try{
    await dbConnect();

    const data=await req.json();
    const{name,email,query}=data;
    console.log(data)

    await custModel.create({
       name:name,
       email:email,
       query:query,
    })
    return new Response({status:200,msg:"data save"})
   } catch(error){
      return new Response({status:400})
   }
 }