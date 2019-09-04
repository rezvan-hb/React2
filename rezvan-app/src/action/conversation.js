
export const getUserName = (userName) => ({
  type: 'SAVE_SELECTED_USER_NAME',
  payload: userName
})
 
export const sendNewMessage = (newMessage) => ({
   type: 'SEND_NEW_MESSAGE',
   payload: newMessage
})

export const createNewConversation = (newConversation) => ({
   type: 'CREATE_NEW_CONVERSATION',
   payload: newConversation
})