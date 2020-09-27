import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const config ={
    apiKey: "AIzaSyDtk2zraP4KyP_xPg7NN0X8gDj6AeMmog8",
    authDomain: "cambiumproject-7d4b7.firebaseapp.com",
    databaseURL: "https://cambiumproject-7d4b7.firebaseio.com",
    projectId: "cambiumproject-7d4b7",
    storageBucket: "cambiumproject-7d4b7.appspot.com",
    messagingSenderId: "715629763919",
    appId: "1:715629763919:web:3cd03b7de44cf9d54f793a",
    measurementId: "G-0R3KZ4JMK8"
  };
  firebase.initializeApp(config);
  export const auth=firebase.auth();
  export const firestore=firebase.firestore();
  const provider =new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_accout'});

  export const createMedicineDocument= async ({genericName,commercialName,behavior,effects,contraindications,treatment})=>{
      const MedicineRef=firestore.collection('Medicine').doc();
       await MedicineRef.set({
        genericName,
        commercialName,
        behavior,
        effects,
        contraindications,
        treatment 
      })
  }
  export const updateMedicine=async({genericName,commercialName,behavior,effects,contraindications,treatment,id})=>{

    const Med =firestore.collection('Medicine').doc(id);
    await Med.update({genericName,
      commercialName,
      behavior,
      effects,
      contraindications,
      treatment
    });
  }
  export const GetMedicines=async()=>{
      const MedicinesRef=firestore.collection("Medicine");
      const snapShot =await MedicinesRef.get();
      const array=[];
       await snapShot.forEach( item => {
          array.push({id:item.id,
              ...item.data()});
      });
      return array;
  }
  export const DeleteMedicine=async(id)=>{
    const MedicineRef=firestore.collection("Medicine").doc(id);
    await MedicineRef.delete();
  }
  export const signInWithGoogle =()=>auth.signInWithGoogle(provider);
  

  export default firebase;