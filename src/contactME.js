import React from "react";

function contactME({ message, onClick }) {
    return <button onClick={onClick}>{message}</button>
}
export default contactME;