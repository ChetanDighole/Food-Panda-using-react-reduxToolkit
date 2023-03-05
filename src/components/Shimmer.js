import React from 'react'

function Shimmer() {
    return (

        <div className='flex flex-wrap gap-5 justify-center '>
            {
                Array(10).fill("").map((e, index) => 


                    <div key={index} className="w-[230px] m-3 p-3 bg-white drop-shadow-md rounded-lg ">
                        <div className="animate-pulse w-full h-48 bg-slate-200"></div>
                        <div className="p-3 space-y-4">
                            <div className="animate-pulse w-2/3 h-6 bg-slate-200"></div>

                            <div className="space-y-2">
                                <div className="animate-pulse w-3/4 h-3 bg-slate-200"></div>
                                <div className="animate-pulse w-full h-3 bg-slate-200"></div>
                                <div className="animate-pulse w-2/3 h-3 bg-slate-200"></div>
                            </div>
                        </div>
                    </div>

                )
            }


        </div>

    )
}

export default Shimmer