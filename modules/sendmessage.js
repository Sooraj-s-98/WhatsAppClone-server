const db = require('../utils/db');


const sendMessage = async (subject,creator_id,message_body, recipient_id) => {


  const responseSendMessage=  await db.query(`INSERT INTO message (message_id, subject, creator_id, message_body, create_date, parent_message_id, expiry_date, is_reminder, next_remind_date, reminder_frequency_id) VALUES (NULL, ?, ?, ?, current_timestamp(), '', NULL, '', NULL, '');`,
     [subject,creator_id,message_body]);
   const message_id= responseSendMessage.insertId;

   await db.query(`INSERT INTO message_recipient (id, recipient_id, recipient_group_id, message_id, is_read) VALUES (NULL, ?, NULL, ?, '0');`,[recipient_id,message_id]);
}

module.exports = {
    sendMessage: sendMessage
}