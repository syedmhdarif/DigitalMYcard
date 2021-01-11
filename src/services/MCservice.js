// import React, {useState,useEffect} from 'react';
// import fire from "../../fire";
// import MyClass from "../MyClass11/MyClass";
// import { Panel, Divider,Header, Button } from 'rsuite';
// import bg from "../bg.jpg";

// import auth from '@react-native-firebase/auth';
// import db from '../config/db'
// import { View } from 'react-native-animatable';
// import ClassList from '../pages/ClassList';


// const MCservice=()=>{


//     const [myClassList, setmyClassList] = useState();

    
    

//     var user = auth().currentUser;
//     useEffect(() => {
//         const myClassRef = fire.database().ref( 'Students/'+ user.uid + '/Class');
//         myClassRef.on("value",(snapshot) => {
//             const myClassF = snapshot.val();
//             console.log(snapshot);
//             const myClassList=[];
//             for (let id in myClassF){
//                 myClassList.push(myClassF[id]);
               
//             }
//             setmyClassList(myClassList);

//         });
//     },[]);


 
//     return(
//         <View>
          

//          {myClassList 
//          ? myClassList.map((Class, index) => <ClassList Class={Class} key={index}/>)
//         : ''}
        

//           </View>
        
//     )
// }
// export default MCservice;