import { Student } from "../interface/Student"
import { api } from "../enum/api"
import { resp } from "../interface/resp"
import { asyncGet, asyncPut, asyncDelete } from "../utils/fetch"
import { StudentInfo } from "../componets/StudentInfo"
import { useEffect, useState, useRef } from "react"
import { useParams, useNavigate } from "react-router-dom";

export const Update: React.FC = () => {
    const _id = useParams().id
    const navigate = useNavigate();

    const [studentInfo, setStudent] = useState<Student>()

    const cache = useRef<boolean>(false)

    const submit = async (info:Student) => {
        const res:resp<Student> = await asyncPut(api.updateByID,info);
        if (res.code == 200) {
            alert("修改成功")
        } else {
            alert(`修改失敗: ${res.message}`)
        }
    }

    const deleteHandler = async ()=>{
        const res:resp<boolean> = await asyncDelete(`${api.deleteByID}?id=${_id}`)
        if (res.code == 200) {
            alert("刪除成功")
        } else {
            alert(`刪除失敗: ${res.message}`)
        }
    }

    useEffect(() => {
        if (!cache.current && _id) {
            cache.current = true;
            asyncGet(`${api.findByID}?id=${_id}`).then((res: resp<Student>) => {
                if (res.code == 200) {
                    setStudent(res.body);
                }
            })
        }
    })
    
    return studentInfo ? (
        <div className="container">
          <StudentInfo
            title="修改學生資訊"
            submitText="確定修改"
            canEdit={true}
            submit={submit}
            canDelete={true}
            deleteHandler={deleteHandler}
            {...studentInfo}
          />
        </div>
      ) : (
        <div>Loading...</div>
      );
    };