import { useState ,useContext} from "react";
import UserContext from "../utills/UserContext";


const Signin = () => {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const {user,setUser}=useContext(UserContext);
  return (
    <div className="flex justify-center "> 
        <div className="flex-col w-64 h-96 item-center border border-slate-100 rounded-lg bg-slate-100 ">
          <div className="flex justify-center text-2xl font-bold m-2 p-2 mt-5"> SignIn   </div>
  
          <div className="ml-5" > 
              <h1 className="m-2 p-2 mb-0 pb-0 " >Username </h1>        
              <input
                type="text"
                className="flex border-b-2 text-xl w-40 border-gray-200 bg-slate-50 p-2  mx-5 hover:bg-slate-100"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
          </div>

          <div className="ml-5">
              <h1 className=" m-2 mb-0 p-2" > Useremail</h1>
              <input
                type="text"
                className="flex border-b-2 text-xl w-40 border-gray-200 bg-slate-50 p-2  mx-5 hover:bg-slate-10"
                value={useremail}
                onChange={(e) => {
                  setUseremail(e.target.value);
                }}
              />
          </div>
          
          <div className="flex justify-center my-8" >
          <button
            className="flex justify-center border w-16 rounded-xl border-black bg-slate-400 hover:bg-cyan-800"
            onClick={() => {
              setUser({
                name:username,
                email:useremail,
                signin:true,
              })
            }}
          >
            <h4 className="">SignIn </h4>
          </button>
          </div>
         
        </div>
    </div>
  );
};
export default Signin;
