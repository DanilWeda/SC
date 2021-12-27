const ADD_POST = 'ADD-POST';
const SUB = 'SUB';
const SEND_MESSAGE = 'SEND-MESSAGE';



let renderNewTree = () => {};

const state = {
  postPage: {
    posts: [
      { text: 'Hi my name is Drobovsky', likes: '15' },
      { text: 'Hello its my First Post in React', likes: '14' },
      { text: 'Lorem ipsum dolor sit amet.', likes: '10' },
    ],
    dispatch(action) {
      if (action.type === ADD_POST) {
        state.postPage.posts.push({
          text: action.postValue,
          likes: action.likes,
        });
        renderNewTree(state);
      } else if (action.type === SUB) {
        renderNewTree = action.observer;
      }
    },
  },
  messagesPage: {
    dataMessages: [
      { text: 'Text massages.', id: 1 },
      { text: 'Lorem, ipsum.', id: 2 },
      { text: 'Lorem ipsum dolor sit.', id: 3 },
      { text: 'Lorem ipsum dolor sit amet.', id: 4 },
    ],
    dataUsers: [
      { name: 'Max', id: 1 },
      { name: 'Dima', id: 2 },
      { name: 'Dan', id: 3 },
      { name: 'Kate', id: 4 },
    ],
    dispatch(action) {
      if (action.type === SEND_MESSAGE) {
        state.messagesPage.dataMessages.push({
          text: action.text,
          id: action.id,
        });
		   
        renderNewTree(state);
      }
    },
  },
};

export default state;
