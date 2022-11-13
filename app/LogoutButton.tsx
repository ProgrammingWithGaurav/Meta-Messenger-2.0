"use client";

function LogoutButton() {
    return (
        <button
        onClick={() => console.log("HI")}
          className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign Out
        </button>
    )
}

export default LogoutButton
