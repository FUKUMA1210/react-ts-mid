import { StudentInfo } from "../componets/StudentInfo"
import { api } from "../enum/api"
import { resp } from "../interface/resp"
import { Student } from "../interface/Student"
import { asyncPost } from "../utils/fetch"  

export const Insert:React.FC = () => {
    const initInfo = {
        userName: "",
        sid: "",
        name: "",
        department: "",
        grade: "",
        class: "",
        email: "",
    }

    const submitHandler = async (info: Student)=>{
        const res:resp<Student> = await asyncPost(api.insertOne,info)
        if (res.code == 200) {
            alert(res.message);
        } else {
            alert(`新增失敗: ${res.message}`)
        }
    }

    return (
        <div className="container">
            <StudentInfo title="新增學生" submitText="確定新增" canEdit={true} submit={submitHandler} {...initInfo}/>
        </div>
    )
}