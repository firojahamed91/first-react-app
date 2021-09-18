import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <>
            <footer className="bg-dark text-light w-100 p-5 mt-5 ">
                <p className="p-5">© copyright{year}  </p>
            </footer>
        </>
    )
}

export default Footer
