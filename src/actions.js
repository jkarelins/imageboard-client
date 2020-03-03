import request from "superagent";

export const ALL_IMAGES = "ALL_IMAGES";
export const NEW_IMAGE = "NEW_IMAGE";
export const NEW_LOGIN = "NEW_LOGIN";
export const NEW_SIGNUP = "NEW_SIGNUP";
export const ALL_USERS = "ALL_USERS";

const baseUrl = "https://whispering-brushlands-89865.herokuapp.com";

function allImages(payload) {
  return {
    type: ALL_IMAGES,
    payload
  };
}

export const getImages = () => (dispatch, getState) => {
  const state = getState();
  const { images } = state;
  if (!images.length) {
    request(`${baseUrl}/image`)
      .then(response => {
        const action = allImages(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};

function newImage(payload) {
  return {
    type: NEW_IMAGE,
    payload
  };
}

export const createImage = data => (dispatch, getState) => {
  const state = getState();
  const { user } = state.user;
  request
    .post(`${baseUrl}/image`)
    .set("Authorization", `Bearer ${user.jwt}`)
    .send(data)
    .then(response => {
      const action = newImage(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

function loginTry(payload) {
  return {
    type: NEW_LOGIN,
    payload
  };
}

function badLogin(payload) {
  const { message } = payload;
  return {
    type: "BAD_LOGIN",
    payload: message
  };
}

export const login = data => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      const action = loginTry(response.body);
      dispatch(action);
    })
    .catch(err => {
      const action = badLogin(err);
      dispatch(action);
    });
};

function signUpTry(payload) {
  return {
    type: NEW_SIGNUP,
    payload
  };
}

export const signUp = data => dispatch => {
  request
    .post(`${baseUrl}/user`)
    .send(data)
    .then(response => {
      const action = signUpTry(response.body);
      dispatch(action);
    })
    .catch(err => {
      const action = badLogin(err);
      dispatch(action);
    });
};

function allUsers(payload) {
  return {
    type: ALL_USERS,
    payload
  };
}

export const getUsers = () => (dispatch, getState) => {
  const state = getState();
  const { users } = state;
  if (!users.length) {
    request(`${baseUrl}/user`)
      .then(response => {
        const action = allUsers(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};
