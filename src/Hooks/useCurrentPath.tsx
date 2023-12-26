import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const useCurrentPath = () => {
  const location = useLocation()
  const [currentPath, setCurrentPath] = useState<string[]>([])

  useEffect(() => {
    const pathSegments = location.pathname.split("/")
    // console.log("Path Segments:", pathSegments)
    const firstSegment = pathSegments[1]
    const lastSegment = pathSegments[pathSegments.length - 1]

    setCurrentPath([firstSegment, lastSegment])
  }, [location])

  return currentPath
}

export default useCurrentPath
