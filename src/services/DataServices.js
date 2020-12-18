import { db } from '../config/db';
import { Actions } from 'react-native-router-flux';

export const addClass =  (classcode,classname ,  section, matricnum) => {
    db.ref('/Students/'+ matricnum + '/Class').child(classcode).set({
        classcode: classcode,
        classname: classname,
        section: section,
        studentlist: '',
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

export const addClassStudent =  (classcode, matricnum, smatricnum, name, ) => {
    db.ref('/Students/' + matricnum + '/Class/' + classcode + '/studentlist').child(smatricnum).set({
        smatricnum: smatricnum,
        name : name,
        
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