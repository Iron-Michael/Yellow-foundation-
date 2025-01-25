import React from 'react'

const YellowBackground = ({ children }) => {
    return (
        <div style={{
            backgroundColor: "#f5d04e",
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        
        }}>
            {children}
        </div>
    )
}

export default YellowBackground