import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <>
            <footer className=" mt-5 ">
                <p className="p-5">© copyright{year}  </p>
            </footer>
        </>
    )
}

export default Footer
