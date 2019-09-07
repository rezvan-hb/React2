
export const getUserName = (url_profile,email) => ({
  type: 'SAVE_SELECTED_USER_NAME',
  url_profile :url_profile ,
  email :email
})
 
export const sendNewMessage = (newMessage) => ({
   type: 'SEND_NEW_MESSAGE',
   payload: newMessage
})

export const getConversationlist = (conversationlist) => ({
   type: 'GET_CONVERSATION_LIST',
   payload: conversationlist
})


export const get_message_list = (messagelist) => ({
   type : 'GET_MESSAGE_LIST',
   payload : messagelist
})

export const get_conversation_id = (conversation_id) => ({
   type: 'GET_CONVERSATION_ID',
   payload: conversation_id 

})
