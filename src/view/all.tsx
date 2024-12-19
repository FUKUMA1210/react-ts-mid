import { useEffect, useRef, useState } from 'react'
import '../style/App.css'
import { asyncGet } from '../utils/fetch'
import { api } from '../enum/api'
import { Student } from '../interface/Student'
import { resp } from '../interface/resp'
import { Link } from "react-router-dom";

function App() {

  const [students, setStudents] = useState<Array<Student>>([])

  const cache = useRef<boolean>(false)

  useEffect(() => {
    if (!cache.current) {
      cache.current = true
      asyncGet(api.findAll).then((res: resp<Array<any>>) => {
        if (res.code === 200) {
          const formattedData: Student[] = res.body.map((item: any) => ({
            _id: item._id,
            userName: item['帳號'],
            sid: item['座號'],
            name: item['姓名'],
            department: item['院系'],
            grade: item['年級'],
            class: item['班級'],
            email: item['Email'],
            absences: 0,
          }))
          setStudents(formattedData)
        } else {
          console.error("API 錯誤:", res.message)
        }
      })
    }
  }, [])

  const studentList = students ? students.map((student: Student) => {
    return (
      <div className='student' key={student._id}>
        <p>帳號: {student.userName}</p>
        <p>座號: {student.sid}</p>
        <p>姓名: {student.name}</p>
        <p>院系: {student.department}</p>
        <p>年級: {student.grade}</p>
        <p>班級: {student.class}</p>
        <p>Email: {student.email}</p>
        <p>缺席次數: {student.absences ? student.absences : 0}</p>
        <Link to={`/update/${student._id}`}>修改</Link>
      </div>
    )
  }) : "loading"

  return (
    <>
      <div className="container">
        {studentList}
      </div>
    </>
  )
}

export default App
