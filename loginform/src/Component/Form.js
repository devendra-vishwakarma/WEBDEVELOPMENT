
import React, { useRef, useState } from 'react'
import data from '../data';
function Form() {
    const [student, updateStudent] = useState(data);
    let Name = useRef()
    let RollNo = useRef();
    let Branch = useRef();
    let MobileNo = useRef();

    // let deleteStudent = (RollNo) => {
    //     // window.alert("are you sure to delete this")
    //     let index = student.findIndex((students)=> students.rollNo = RollNo)
    //     console.log(index);
    //     student.splice(index,1);
    //     let arr = [...data]
    //     console.log(arr);
    // }

    let addRecord = ()=>{
        let name = Name.current.value;
        let rollNo = rollNo.current.value;
        let Branch = Branch.current.value;
        let MobileNo = MobileNo.current.value;

        let newRecord = {name,rollNo,Branch,MobileNo};
        let arr = [data,...newRecord]
        updateStudent(arr);
    }
    return <>
        <div className='boxcontainer'>
            <div className='border'>
                <div className='formpage'>
                    <form action="/action_page.php">
                        <div class="form-group">
                            <label for="text">Student-Name</label>
                            <input type="text" class="form-control" placeholder="Enter email" id="email" useRef={Name}/>
                        </div>
                        <div class="form-group">
                            <label for="text">Roll.No</label>
                            <input type="text" class="form-control" placeholder="Enter password" id="pwd" useRef={RollNo}/>
                        </div>
                        <div class="form-group">
                            <label for="text">Branch</label>
                            <input type="text" class="form-control" placeholder="Enter email" id="email" useRef={Branch}/>
                        </div>
                        <div class="form-group">
                            <label for="text">Mobile.No</label>
                            <input type="text" class="form-control" placeholder="Enter password" id="pwd" useRef={MobileNo}/>
                        </div>

                        <button type="submit" className='mt-2 pl-5 pr-5  btn-success'>Submit</button>
                    </form>
                </div>
            </div>
            <div className='border' >
                <table width={"100%"} className='text-center mt'>
                    <thead>

                        <th>S.no</th>
                        <th>Student-Name</th>
                        <th>Branch</th>
                        <th>rollNo</th>
                        <th>Mobile.No</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        {student.map((st, index) => <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{st.name}</td>
                            <td>{st.Branch}</td>
                            <td>{st.rollNo}</td>
                            <td>{st.MobileNo}</td>
                            <td><button className='btn btn-danger'>Delete</button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    </>
}


export default Form