 function Header(){

    return (

        <>
        <p className="text-primary">Date and time is : {new Date().toDateString()}</p>
        <h4 className="text-primary">Date and time is : {new Date().toString()}</h4>
        </>
    )
}
export default Header