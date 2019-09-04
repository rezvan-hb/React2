
const INIT = {
    userName: ' ',
    messageList: [
      { text: 'salam.khobi?', date: '', sender: 1, receiver: 3 },
      { text: 'salam...', date: '', sender: 1, receiver: 3 }
    ],
    conversationList: [
      {
        name:'Rezvan',
        date:'8/6/98',
        latestMessage:'',
        unseenMessage: 2
      },{
        name:'Alireza',
        date:'8/6/98',
        latestMessage:'',
        unseenMessage:3
      }
    ]
  }
  
  const appReducer = (state = INIT, action) => {
    switch (action.type) {
      case 'SAVE_SELECTED_USER_NAME':
        return {
          userName: action.payload
        }
      case 'SEND_NEW_MESSAGE':
        return {
          ...state,
          messageList: [
            ...state.messageList,
            {
              text: action.payload,
              date: new Date().getHours(),
              sender: 1,
              receiver: 3
            }
          ]
        }
      case 'CREATE_NEW_CONVERSATION':
        return {
          ...state,
          conversationList: [
            {
              name: action.payload,
              date:'8/6/98',
              latestMessage:'',
              unseenMessage:1
            },
            ...state.conversationList
          ]
        }    
      default:
        return state
    }
  }
  export default appReducer
  
  function conversations(state = INIT, action) {
    switch(action.type) {
      case 'SAVE_NEW_MESSAGE':
        return {...state,
          messages: [...state.messages, {id: 1, message: action.payload}]
        }
        
      case 'SAVE_CONVERSATION_LIST':
      return {
        ...state,
        conversationList: action.payload
      }
      default:
        return state
    }
  }