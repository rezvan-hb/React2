
const INIT = {
    url_propfile: 'https://api.paywith.click//media/default.jpg',
    email :'rezvan@gmail.com' ,
    conversationlist: [],
    messageList: [],
    conversation_id:''
  }
  var myId = window.localStorage.getItem('id')
  const appReducer = (state = INIT, action) => {
    switch (action.type) {
      case 'SAVE_SELECTED_USER_NAME':
        return {
          ... state ,
          url_profile : action.url_profile ,
          email : action.email
        }
      case 'SEND_NEW_MESSAGE':
        return {
          ...state,
          messageList: [
            ...state.messageList,
            {
              sender: {id: myId } ,
              text: action.payload
            }
          ]
        }

      case 'GET_CONVERSATION_LIST':
        return{
          ...state,
          conversationlist: action.payload
        }

      case 'GET_MESSAGE_LIST':
        return {
          messageList: action.payload
        }

      case 'GET_CONVERSATION_ID':
          return {
            conversation_id: action.payload
          }
      default:
        return state
    }
  }

  export default appReducer
