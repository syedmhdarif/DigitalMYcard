import { db } from '../config/db';
import { Actions } from 'react-native-router-flux';
import auth from '@react-native-firebase/auth';
import * as firebase from 'firebase';

var user = auth().currentUser;

export const addClass =  (classcode,classname , section,) => {
    
    db.ref('/Students/'+ user.uid + '/Class/'+ classcode + '_' + section).set({


        classcode: classcode,
        classname: classname,
        section: section,
        
        // year : year,
        // semester : semester ,
    }).then(() => {
        console.log('INSERTED !');
    }).catch((error) => {
        console.log(error);
    });

}


export const addClassreff =  (classcode ,section, matricnum, fname) => {
    
    db.ref('/Classreff/'+ classcode + '_' + section +'/studentlist/').child(matricnum).set({


        matricnum:matricnum,
        fname : '',
        // year : year,
        // semester : semester ,
    }).then(() => {
        console.log('INSERTED !');
    }).catch((error) => {
        console.log(error);
    });

}

// export const addClass = (Id, classcode, classname, section) => {
//     return new Promise(function(resolve, reject) {
//       let key;
//       if (Id != null) {
//         key = Id;
//       } else {
//         key = db()
//           .ref()
//           .push().key;
//       }
//       let dataToSave = {
//         Id: key,
//         classcode: classcode,
//         classname: classname,
//         section: section,
//       };
//       db()
//         .ref('Students/' + key)
//         .update(dataToSave)
//         .then(snapshot => {
//           resolve(snapshot);
//         })
//         .catch(err => {
//           reject(err);
//         });
//     });
//   };

export const addClassStudent =  (classcode, section, smatricnum, name, ) => {
    db.ref('/Classreff/'+ classcode + '_' + section +'/studentlist/').child(smatricnum).set({
        smatricnum: smatricnum,
        fname : '',
        
        // year : year,
        // semester : semester ,
    }).then(() => {
        console.log('INSERTED !');
    }).catch((error) => {
        console.log(error);
    });
    
}


// export const addNewstudent =  (classname, classcode, section) => {
//     db.ref('/Class/classcode/studentlist').child(classcode).child(studentlist).update({
//         studentname: studentname,
//         matricno : matricno,
//     }).then(() => {
//         console.log('INSERTED !');
//     }).catch((error) => {
//         console.log(error);
//     });

    
// }




// export const updateStudent =  (name, matricno, major, year, status) => {
//     db.ref('/students').child(matricno).update({
//         name: name,
//         matricno: matricno,
//         major: major,
//         year: year,
//         status: status
//     }, () => Actions.MyClass());
// }

// export const removeStudent =  (matricno) => {
//     db.ref('/students').child(matricno).remove();
//     Actions.MyClass();
// }