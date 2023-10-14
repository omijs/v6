import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import '../icon'

//@ts-ignore
import '../theme.ts'

interface Props {
  type: string,
  active: boolean,
  size: string,
  icon: string,
  svgIcon: object
}

@tag('m-tag')
export default class Tag extends WeElement<Props>{
  static css = css

  static propTypes = {
    type: String,
    active: Boolean,
    size: String,
    icon: String,
    svgIcon: Object
  }

  render(props) {
    return (
      <div {...extractClass(props,
        'mdc-tag',
        props.type ? 'mdc-tag--'+`${props.type}` : '',
        props.size ? 'mdc-tag--' + `${props.size}` : ''
      )}>
        <span><slot></slot></span>
        {props.svgIcon && <m-icon class='m-icon' {...props.svgIcon}></m-icon>}
        {props.icon && <i class="material-icons mdc-button__icon">{props.icon}</i>}
      </div>
    )
  }
}
