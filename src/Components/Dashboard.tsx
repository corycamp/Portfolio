import React from 'react';


const Dashboard = ()=>{
    const isDesktop = true;
    return (
        isDesktop ? (
            <>
            Hello From Dash
            </>
        ):(
            <></>
        )
    )
}

export default Dashboard;