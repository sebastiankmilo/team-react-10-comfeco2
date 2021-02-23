import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export const useRedirectWithFlag = ({ url, flag }) => {
  const history = useHistory()
  useEffect(() => {
    if (!!flag) {
      history.push(url)
    }
  }, [flag, url, history])
}
