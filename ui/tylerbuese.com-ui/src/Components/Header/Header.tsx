import { Link } from "react-router-dom"

const Header = () => {
    return ( 
        <>
            <div className="w-full h-16 bg-slate-800 dark:text-white text-black">
                <div className="items-center flex pt-4 pl-4">
                    <span>tb - blog</span>
                    
                </div>
                <div className="float-right -mt-6 pr-4">
                    <a href="https://github.com/tylerbuese" target="_blank"><i className="fa-brands fa-github text-2xl hover:text-slate-200"></i></a>

                </div>

                
            </div>
        </>
    )
}

export default Header