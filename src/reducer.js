export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    'BQDx1kCAKVUnt_UY8YvIZxhpgptTkA0LOUhihT5SqIO1N1JzLj-Opvd5R1d5qhXHnwTRq2MNi_IYbW_febjK412Ejp6NbGgG858pc3HxNNua6M_dvkuRbynONGYfP8mrJUAQAP-Ky8ae88-8vsMMl9-NLMJfEM97KmOZS3vaRWPzK6lhko1z',
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
