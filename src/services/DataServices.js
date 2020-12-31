import { db } from '../config/db';
import { Actions } from 'react-native-router-flux';
import auth from '@react-native-firebase/auth';
import * as firebase from 'firebase';

var user = auth().currentUser;


export const addClass =  (classcode,classname , section, matricnum) => {
    
    db.ref('/Students/'+ user.uid + '/Class/'+ classcode + '_' + section).set({

        
        classcode: classcode,
        classname: classname,
        section: section,
        matricnum:matricnum,
        
        // year : year,
        // semester : semester ,
    }).then(() => {
        console.log('INSERTED !');
    }).catch((error) => {
        console.log(error);
    });

}


export const addClassreff =  (classcode ,section, matricnum, name) => {
    
    db.ref('/Classreff/'+ classcode + '_' + section +'/studentlist/').child(matricnum).set({


        matricnum:matricnum,
        name : name,
        // year : year,
        // semester : semester ,
    }).then(() => {
        console.log('INSERTED !');
    }).catch((error) => {
        console.log(error);
    });

}



export const addClassStudent =  (classcode, section, name) => {
    db.ref('/Classreff/'+ classcode + '_' + section +'/Creatordetail/').set({
        cname: name,
        creator : user.uid
        
        
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