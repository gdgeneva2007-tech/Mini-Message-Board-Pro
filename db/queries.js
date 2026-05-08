const pool=require("./pool")
async function getAllMessages(){
    const {rows}=await pool.query("SELECT * FROM messages")
    return rows;
}

async function searchMessage(id){
    const {rows}=await pool.query("SELECT * FROM messages WHERE id=$1",[id])
    return rows;
}

async function insertMessage(msg){
    await pool.query('INSERT INTO messages (text,"user",added) VALUES ($1,$2,NOW())',[msg.text,msg.user])
}



module.exports={
    getAllMessages,
    searchMessage,
    insertMessage,
}