import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import '../icon-button'

//@ts-ignore
import '../theme.ts'

interface Props {
  width?: string,
  img?: string,
  title: string,
  subTitle?: string,
  content: string,
  buttons?: object,
  icons?: object,
  topTitle?: boolean,
  overImg?: boolean
}

@tag('m-card')
export default class Card extends WeElement<Props>{
  static css = css

  static propTypes = {
    width: String,
    img: String,
    title: String,
    subTitle: String,
    content: String,
    buttons: Object,
    icons: Object,
    topTitle: Boolean,
    overImg: Boolean
  }

  btnClick = (evt, index) => {
    this.fire('buttonaction', { index, target: evt.currentTarget })
  }

  iconClick = (evt, index) => {
    this.fire('iconaction', { index, target: evt.currentTarget, isOn: evt.detail.isOn })
  }

  render(props) {
    return (
      <div {...extractClass(props, 'mdc-card', {
        'over-img': props.overImg,
        'top-title': props.topTitle
      })} style={`width:${props.width || '640px;'}`}>
        {props.topTitle && <div class="mdc-card__primary">
          <h2 class="mdc-typography mdc-typography--headline6">{props.title}</h2>
          {props.subTitle && <h3 class="mdc-typography mdc-typography--subtitle2">{props.subTitle}</h3>}
        </div>}
        <div class="mdc-card__primary-action  mdc-ripple-upgraded" tabindex="0">
          {props.img && <div class="mdc-card__media mdc-card__media--16-9" style={`background-image: url(${props.img});`}>
            {props.overImg && !props.topTitle && <div class="mdc-card__primary">
              <h2 class="mdc-typography mdc-typography--headline6">{props.title}</h2>
              {props.subTitle && <h3 class="mdc-typography mdc-typography--subtitle2">{props.subTitle}</h3>}
            </div>}
          </div>}
          {!props.overImg && !props.topTitle && <div class="mdc-card__primary">
            <h2 class="mdc-typography mdc-typography--headline6">{props.title}</h2>
            {props.subTitle && <h3 class="mdc-typography mdc-typography--subtitle2">{props.subTitle}</h3>}
          </div>}
          <div class="mdc-card__secondary mdc-typography mdc-typography--body2">
            {props.content}
          </div>
        </div>

        {(props.buttons || props.icons) && <div class="mdc-card__actions">
          {props.buttons && <div class="mdc-card__action-buttons">
            {props.buttons.map((btn, index) => <button onClick={_ => this.btnClick(_, index)} class="mdc-button mdc-card__action mdc-card__action--button mdc-ripple-upgraded">{btn}</button>)}

          </div>}
          {props.icons && <div class="mdc-card__action-icons">
            {props.icons.map((icon, index) => {
              if (typeof icon === 'string')
                return <m-icon-button onClick={_ => this.iconClick(_, index)} icon={icon}></m-icon-button>
              return <m-icon-button onChange={_ => this.iconClick(_, index)} icons={icon}></m-icon-button>
            })}
          </div>}
        </div>}
      </div>
    )
  }
}
