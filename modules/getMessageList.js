const db = require('../utils/db');


const getMessageList = async (recipient_id, client_id) => {


  const responsegetMessageList=  await db.query(`select g.message_id,g.creator_id,t1.recipient_id,t1.is_read ,g.message_body,g.create_date,g.subject from message g inner join message_recipient t1 on g.message_id = t1.message_id WHERE g.creator_id=${client_id} AND t1.recipient_id=${recipient_id} OR g.creator_id=${recipient_id} AND t1.recipient_id=${client_id};`,
     []);
console.log("responsegetMessageList", responsegetMessageList)
}

module.exports = {
    getMessageList: getMessageList
}