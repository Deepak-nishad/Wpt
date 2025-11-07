 function Header(){

    return (

        <>
        <h3>Date and time is : {new Date().toDateString()}</h3>
        <h4>Date and time is : {new Date().toString()}</h4>
        </>
    )
}
export default Header