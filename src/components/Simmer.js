import React from 'react'
const Fakecard=()=>{
    return(
        <div>
            <div className='container  w-64 h-40  m-5 rounded-lg bg-slate-200 '>  </div>
            <h4 className='container  w-64 h-8  m-5 rounded-lg bg-slate-200 ' ></h4>
            <h4 className='container  w-40 h-8  m-5 rounded-lg bg-slate-200 ' ></h4>

        </div>
        
    )
}

const Simmer = () => {
    console.log("simmer ki ma bhosda");
  return (
        <div>
            <div className='container ml-10 mt-10 flex justify-between flex-wrap mr-5' >
             <Fakecard/>
             <Fakecard/>
             <Fakecard/>
             <Fakecard/>
             <Fakecard/>
             <Fakecard/>
             <Fakecard/>
            </div> 
        </div>
  )
}

export default Simmer;