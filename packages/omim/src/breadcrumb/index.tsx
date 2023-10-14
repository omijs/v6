import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'

//@ts-ignore
import '../theme.ts'

interface Props {
}


@tag('m-breadcrumb')
export default class Breadcrumb extends WeElement<Props>{
  static css = css

  static defaultProps = {
    split: '/'
  }

  static propTypes = {
    items: Object,
    split: String
  }

  render(props) {

    const items = []
    props.items.forEach((item, index) => {

      if (index !== props.items.length - 1) {
        items.push(<li class="breadcrumb-li">
          {item.icon && <i class="material-icons mdc-icon-button__icon">{item.icon}</i>}<a class="" href={item.href}>{item.text}</a>
        </li>, <li class='split'>{props.split}</li>)
      } else {
        items.push(<li class="current">{item.icon && <i class="material-icons mdc-icon-button__icon">{item.icon}</i>}{item.text}
        </li>)
      }
    })
    return (
      <nav {...extractClass(props, 'm-breadcrumb')}>
        <ol class="breadcrumb-ol">
          {items}
        </ol>
      </nav>
    )
  }
}
