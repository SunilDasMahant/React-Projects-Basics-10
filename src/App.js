import React from 'react';
import { useState,useEffect } from 'react';
import List from './List';
import Data from './Data';

function App() {
    const[profile,  setProfile] = useState(Data);

   
    return (
        <section>
           <h3> Happy Birthday {profile.length}</h3>
            <List/>
            {
                profile.map((girls)=>{
                        return(
                            <div>
                                 <div className="flex-style">
                                     <img src={girls.image} className="img-style"/>
                                        <h3>{girls.name}</h3>
                                        <h6>{girls.age}</h6>
                                 </div>
                            </div>
                        )
                })
            }

            <button onClick={()=>setProfile([])}>clearScreen</button>
        </section>
    )
}

export default App
