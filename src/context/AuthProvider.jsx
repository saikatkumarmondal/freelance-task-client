import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';


const AuthProvider = ( { children } ) => {

   const [user, setUser] = useState(null); 
   const [loading, setLoading] = useState(true);
    useEffect( () => {
        onAuthStateChanged( auth, ( currentUser ) => {
            setUser( currentUser );
            setLoading( false );
       }); 
    },[])
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = ( email, password ) => {
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logoutUser = () => {
        return signOut( auth );
    }
    const userInfo = {
      createUser,
      user,
      loading,
      setUser,
      loginUser,
      logoutUser,
    };
    
    return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;