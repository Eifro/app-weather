import { useSelector } from 'react-redux'
import Card from './Card'

export default function Cards() {
  const wheaters = useSelector(state => state.wheater.list)
  return (
    <div className='wheater-cards'>
      {
        wheaters.map((wheater) => (
          <Card wheater={wheater} key={wheater.id} />
        ))
      }
    </div>
  )
}
