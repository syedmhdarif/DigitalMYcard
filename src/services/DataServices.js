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

        classcode : classcode,
        section : section,
        matricnum:matricnum,
        name : name,      
        status : 'ABSENT',

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

export const JoinGroup =  (classcode, section, name, matricnum) => {
    db.ref('/Classreff/'+ classcode + '_' + section +'/group/participantlist').child(matricnum).set({
        name: name,
        matricnum : matricnum,
        
        
        // year : year,
        // semester : semester ,
    }).then(() => {
        console.log('INSERTED !');
    }).catch((error) => {
        console.log(error);
    });
    
}

export const Attendclass =  (classcode, section, day, month, year, matricnum, name) => {
    db.ref('/Classreff/' + classcode + '_'+ section + '/Attendance/' + 
    day + '_' + month + '_'+ year + '/member/' + matricnum).set({
        classcode,
        section : section,
        matricnum: matricnum,
        name : name,
        status: 'PRESENT',
        
        
        
        // year : year,
        // semester : semester ,
    }).then(() => {
        console.log('INSERTED !');
        console.log(classcode);
        console.log(section);
        console.log(day);
        console.log(month);
        console.log(year);
        console.log(matricnum);
    }).catch((error) => {
        console.log(error);
    });
    
}

export const removeClass =  (classcode, section) => {
    db.ref('/Students/' + user.uid + '/Class/' ).child(classcode+'_'+section).remove();
    Actions.ListScreen();
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