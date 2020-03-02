import request from "superagent";

export const ALL_IMAGES = "ALL_IMAGES";
export const NEW_IMAGE = "NEW_IMAGE";
export const NEW_LOGIN = "NEW_LOGIN";
export const NEW_SIGNUP = "NEW_SIGNUP";

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
  const { user } = state;
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

// function badLogin(payload){
//   return {
//     type: "BAD_LOGIN",
//     payload
//   }
// }

export const login = data => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      const action = loginTry(response.body);
      dispatch(action);
    })
    .catch(err => console.log(err));
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
    .catch(err => console.log(err));
};
