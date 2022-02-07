import {BtnNav} from "./btn-nav";


const Navigation = () => {
    return (
        <>
            {
                arrayBtnNav.map(i => <BtnNav key={i.id} title={i.title}/>)
            }
        </>
    )
}