import firebase from 'firebase';

class AuthService {
  login(providerName){  //login하는 함수, providerName에 google, github, facebook등이 올 수 있다
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebase.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;