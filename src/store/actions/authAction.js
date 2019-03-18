export const signIn = credentials => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase ();
    firebase
      .auth ()
      .signInWithEmailAndPassword (credentials.email, credentials.password)
      .then (() => {
        dispatch ({
          type: 'LOGIN_SUCCESS',
        });
      })
      .catch (e => {
        dispatch ({
          type: 'LOGIN_ERROR',
          e,
        });
      });
  };
};

export const signOut = () => {
  console.log ('action check..');
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase ();
    firebase.auth ().signOut ().then (() => {
      dispatch ({type: 'SIGN_OUT'});
    });
  };
};

export const signUp = user => {
  console.log (user);
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase ();
    const firestore = getFirestore ();
    firebase
      .auth ()
      .createUserWithEmailAndPassword (user.email, user.password)
      .then (res => {
        return firestore.collection ('users').doc (res.user.uid).set ({
          firstName: user.firstName,
          lastName: user.lastName,
          initial: user.firstName[0] + user.lastName[0],
        });
      })
      .then (() => {
        dispatch ({type: 'SIGN_UP'});
      })
      .catch (err => {
        dispatch ({type: 'SIGNUP_ERROR', err});
      });
  };
};
