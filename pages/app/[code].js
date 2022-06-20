import { DYNAMIC_LINK_URL } from "@utils/contants/general";
import { useRouter } from "next/router";
import { useEffect } from "react"

export default function AppDownloadDynamicRoute() {
    const router = useRouter()
    const { code } = router.query

    useEffect(() => {
        if(code){
            window.location.href = DYNAMIC_LINK_URL + code
            setTimeout(() => {
                window.location.href = '/'
            }, 1500)
        }
    }, [code]);
    return (
        <>
        
        </>
    )
}