import {Child} from './child.js'
import { Child2 } from './child2.js'

export const Parent = () => {
  return(
    <div className="parent">
      <Child/>
      <Child2/>
    </div>
  )
}