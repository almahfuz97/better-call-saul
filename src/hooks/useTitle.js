import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Better Call Saul`
    }, [title])
}

export default useTitle;