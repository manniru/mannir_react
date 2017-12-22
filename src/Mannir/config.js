

const config = {
    firebase_config: {
      apiKey: 'AIzaSyCqo3YneuLg3u7Nqr3EyAoZ-uPcMF0AjOs',
      authDomain: 'realtime-portal.firebaseapp.com',
      databaseURL: 'https://realtime-portal.firebaseio.com',
      projectId: 'realtime-portal',
      storageBucket: 'realtime-portal.appspot.com',
      messagingSenderId: '320031251851'
    },
    firebase_providers: [
      'google.com',
      'facebook.com',
      'twitter.com',
      'github.com',
      'password',
      'phone'
    ],
    initial_state: {
      theme: 'light',
      locale: 'en'
    },
    drawer_width: 256,
    firebaseLoad: () => import('./firebase'),
  }
  
  export default config
  