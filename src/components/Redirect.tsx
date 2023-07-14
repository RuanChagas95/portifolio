import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
export default function Redirect() {
    const url = document.URL
    const path = decodeURIComponent(url.replace(/.*\?/, ''))
    const navigate = useNavigate()
    useEffect(() => {
        if (path !== url) {
          navigate(path);
        }
      });
  return null
}
