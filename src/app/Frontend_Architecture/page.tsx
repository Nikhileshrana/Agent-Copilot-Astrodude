"use client"
import React, { useState } from 'react'

export default function page () {

    function firstNonRepeatingChar(str : String) {
        for (let i = 0; i < str.length; i++) {
            if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
                console.log(str[i]);
            }
        }
    }
    firstNonRepeatingChar("checcking");

  return (
    <>


<div >
    <div></div>
    <div></div>
    <div></div>
</div>

<div className='p-8 flex h-screen'>
    
    <div className='w-[80%] flex'>
        
        <div className='flex flex-col h-[100%] justify-evenly'>
            <div>Micro Frontend A</div>
            <div>Micro-Frontend B</div>
            <div>Micro Frontend C</div>
        </div>

        <div className='flex flex-col h-[100%] justify-evenly'>
            <div><svg fill="#EF4444" height="50px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 330 330"  stroke="#EF4444"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"></path> </g></svg></div>
            <div><svg fill="#A855F7" height="50px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 330 330"  stroke="#EF4444"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"></path> </g></svg></div>
            <div><svg fill="#3B82F6" height="50px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 330 330"  stroke="#EF4444"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"></path> </g></svg></div>
        </div>

        <div className='h-[100%] w-[100%] flex flex-col justify-evenly'>
            <div className='flex justify-evenly gap-5 border-4 border-red-500 p-4'>
                <div className='border-4 border-red-500 p-3 h-[8vh] w-[8vw]'>Component</div>
                <div className='border-4 border-red-500 p-3 h-[8vh] w-[8vw]'>Service</div>
                <div className='border-4 border-red-500 p-3 h-[8vh] w-[8vw]'>CSS</div>
            </div>
            <div className='flex justify-evenly gap-5 border-4 border-purple-500 p-4 '>
                <div className='border-4 border-purple-500 p-3 h-[8vh] w-[8vw]' >Component</div>
                <div className='border-4 border-purple-500 p-3 h-[8vh] w-[8vw]'>Service</div>
                <div className='border-4 border-purple-500 p-3 h-[8vh] w-[8vw]'>CSS</div>
            </div>
            <div className='flex justify-evenly gap-5 border-4 border-blue-500 p-4'>
                <div className='border-4 border-blue-500 p-3 h-[8vh] w-[8vw]'>Component</div>
                <div className='border-4 border-blue-500 p-3 h-[8vh] w-[8vw]'>Service</div>
                <div className='border-4 border-blue-500 p-3 h-[8vh] w-[8vw]'>CSS</div>
            </div>
        </div>

        <div className='flex flex-col h-[100%] justify-evenly'>
            <div><svg fill="#EF4444" height="50px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 330 330"  stroke="#EF4444"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"></path> </g></svg></div>
            <div><svg fill="#A855F7" height="50px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 330 330"  stroke="#EF4444"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"></path> </g></svg></div>
            <div><svg fill="#3B82F6" height="50px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 330 330"  stroke="#EF4444"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"></path> </g></svg></div>
        </div>

        <div className='flex flex-col h-[100%] justify-evenly w-fit'>
            <div className='p-5 border-4 border-red-500'>CI/CD</div>
            <div className='p-5 border-4 border-purple-500'>CI/CD</div>
            <div className='p-5 border-4 border-blue-500'>CI/CD</div>
        </div>
        
        <div className='flex flex-col h-[100%] justify-evenly'>
            <div><svg fill="#EF4444" height="50px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 330 330"  stroke="#EF4444"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"></path> </g></svg></div>
            <div><svg fill="#A855F7" height="50px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 330 330"  stroke="#EF4444"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"></path> </g></svg></div>
            <div><svg fill="#3B82F6" height="50px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 330 330"  stroke="#EF4444"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"></path> </g></svg></div>
        </div>

    </div>
    
    
    
    
    <div className='border-4 border-white w-[20%] m-10 flex flex-col p-5 gap-5'>
        <div className='border-4 border-red-500 h-[100%]'></div>
        <div className='border-4 border-purple-500 h-[100%]'></div>
        <div className='border-4 border-blue-500 h-[100%]'></div>
    </div>

</div>


    </>
  )
}
