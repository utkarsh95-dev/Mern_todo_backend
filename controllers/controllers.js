import todoModel from '../model/ToDo.js';


export const addToDo = async(req,res)=>{
    try
    {
        const TodoItem = await todoModel.create({
        data: req.body.data,
        createdAt: Date.now()
    })

    await TodoItem.save();

     return res.status(200).json(TodoItem)
        }
 
    catch(error) 
    {
        return res.status(500).json({
            success:false,
            message: error.message,
        })
    }
} 

export const getAll = async(req,res) =>{
    try{
        const todo = await todoModel.find({}).sort({"createdAt":-1})
        return res.status(200).json(todo)
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message: error.message,
    })
}
}

export const toggleTD = async(req,res) =>{
    
    try{
        const todoRef = await todoModel.findById(req.params.id);
        const todoUpDtd = await todoModel.findOneAndUpdate(
            {_id: req.params.id},
            {done: !todoRef.done}
            )
       
    await todoUpDtd.save();
       
    return res.status(200).json(todoUpDtd)
    }
    
    catch(error){
        return res.status(500).json({
            success:false,
            message: error.message,
    })
}
}
export const updateTD = async(req,res) =>{
    
    try{
        await todoModel.findOneAndUpdate(
            {_id: req.params.id},
            {data: req.body.data}
            )
       
        const todo = await todoModel.findById(req.params.id);    
       
    return res.status(200).json(todo)
    }
    
    catch(error){
        return res.status(500).json({
            success:false,
            message: error.message,
    })
}
}
export const deleteTD = async(req,res) =>{
    
    try{

        const todo =  await todoModel.findByIdAndDelete(req.params.id)
        
         
    return res.status(200).json(todo)
    }
    
    catch(error){
        return res.status(500).json({
            success:false,
            message: error.message,
    })
}
}