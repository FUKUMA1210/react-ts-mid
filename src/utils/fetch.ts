/**
 * 異步呼叫api, 只可用響應體為 json 的 api
 * @param api 要呼叫的api
 * @returns json 結果
 */
export async function asyncGet(api: string):Promise<any>{
    try {
        const res: Response = await fetch(api)
        try {
            return await res.json()
        } catch (error) {
            return error
        }
    } catch (error) {
        return error
    }
}

export async function asyncPost(api: string, body: {} | FormData) {
    const res: Response = await fetch(api, {
        method: 'POST',
        credentials: 'include',
        headers:new Headers({
            'Access-Control-Allow-Origin':"http://localhost:7777/",
            'content-Type':"application/json"
        }),
        body: body instanceof FormData?body:JSON.stringify(body),
        mode:"cors"
    })
    try {
        let data = res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function asyncPatch(api: string, body: {} | FormData) {
    const res: Response = await fetch(api, {
        method: 'PATCH',
        headers:new Headers({
            'Access-Control-Allow-Origin':"http://localhost:7777/",
        }),
        body: body instanceof FormData?body:JSON.stringify(body),
        mode:"cors"
    })
    try {
        let data = res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export const asyncPut = async (url: string, body: any) => {
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
  
      return await response.json();
    } catch (error) {
      console.error("PUT request error:", error);
      return { code: 500, message: "Server error" };
    }
  };
  
  export const asyncDelete = async (url: string) => {
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
  
      return await response.json();
    } catch (error) {
      console.error("DELETE request error:", error);
      return { code: 500, message: "Server error" };
    }
  };
  