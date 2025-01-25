import React from 'react'

const CardFoundation = () => {
    return (
        <div className='card-foundation'>
            <div style={{
                width: "100%", display: "flex", flexDirection: "column"
                , alignItems: "center"
            }}>
                <img src='/illustration-article.svg'
                    style={{ width: "230px", borderRadius: "10px", marginTop: "20px" }} />
            </div>
            <div style={{ width: "230px" }}>
                <div style={{ width: "80px", backgroundColor: "#f5d04e", padding: "3px", borderRadius: "5px", marginTop: "10px", fontFamily: "Figtree-ExtraBold", fontSize: "15px" }}>Learning</div>
            </div>
            <div style={{ width: "230px", display: "flex" }}>
                <text style={{ width: "120px", textAlign: "left", padding: "3px", borderRadius: "5px", marginTop: "10px", fontFamily: "Figtree-Medium", fontSize: "8px", fontWeight: "lighter" }}>Published 25 Jan 2025</text>
            </div>
            <div style={{ width: "230px", display: "flex", textAlign: "start" }}>
                <label style={{ width: "100%", paddingTop: "3px", paddingBottom: "3px", borderRadius: "5px", marginTop: "10px", fontFamily: "Figtree-ExtraBold", fontSize: "15px", fontWeight: "lighter", color: "grey" }}>
                    HTML & CSS foundations
                </label>
            </div>
            <div style={{ width: "230px", display: "flex", height: "50px", textAlign: "start" }}>
                <p style={{ width: "100%", height: "60px", borderRadius: "5px", marginTop: "10px", fontFamily: "Figtree-Medium", fontSize: "10px", fontWeight: "lighter", color: "grey", lineHeight: "1.5" }}>
                    These languages are the backbone of every website,defining structure ,content,and presentation.
                </p>
            </div>
            <div style={{ width: "230px", display: "flex", height: "50px", textAlign: "start", marginTop: "10px", alignItems: "center" }}>
                <img src='/image-avatar.webp' style={{ width: "25px", height: "25px" }} ></img>
                <div style={{ width: "80px", borderRadius: "5px", fontFamily: "Figtree-ExtraBold", fontSize: "10px", marginLeft: "15px" }}>Greg hooper</div>
            </div>

        </div>
    )
}

export default CardFoundation