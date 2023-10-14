
import * as css from './index.scss'
import { WeElement, tag, h, extractClass, classNames } from 'omi'
import { MDCTextField } from '@material/textfield/index'
import '../icon'
//import { MDCRipple } from '@material/ripple/index'

//@ts-ignore
import '../theme.ts'

interface Props {
	type: 'date' | 'time' | 'color' | 'datetime-local',
  fullWidth: boolean,
  textarea: boolean,
  outlined: boolean,
  noLabel: boolean,
  showHelper: boolean,
  helperText: string,
  iconRight: boolean,
  //counter: number[],
  counter: boolean,

  path: string,
  paths: object,
  //Multi-line Text Field (Textarea) with Character Counter  (textarea+counter)

  label: string,

  required: boolean,
  pattern: string, //RegExp string such as [A-z]{3}
  minLength: number,
  maxLength: number,
  min: number,
  max: number,
  step: number,

  rows: number,
  cols: number,

  value: string,
  disabled: boolean, //also add style class
  useNativeValidation: boolean,
  valid: boolean,
  helperTextContent: string,
  //ripple: MDCRipple,
  leadingIconAriaLabel: string,
  trailingIconAriaLabel: string,
  leadingIconContent: string,
  trailingIconContent: string
}

function extract(from, props):any {
  const to = {}
  props.forEach(prop => {
    if (from[prop] !== undefined) {
      to[prop] = from[prop]
    }
  })
  return to
}

@tag('m-text-field')
export default class TextField extends WeElement<Props>{
  static css = css

  static defaultProps = {
		showHelper: true,
		type: 'text'
  }

  static propTypes = {
    fullWidth: Boolean,
    textarea: Boolean,
    outlined: Boolean,
    noLabel: Boolean,
    showHelper: Boolean,
    helperText: String,
    iconRight: Boolean,
    counter: Boolean,

    path: String,
    paths: Object,

    //Multi-line Text Field (Textarea) with Character Counter  (textarea+counter)

    label: String,

    required: Boolean,
    pattern: String, //RegExp string such as [A-z]{3}
    minLength: Number,
    maxLength: Number,
    min: Number,
    max: Number,
    step: Number,

    rows: Number,
    cols: Number,

    value: String,
    disabled: Boolean, //also add style class
    useNativeValidation: Boolean,
    valid: Boolean,
    helperTextContent: String,
    //ripple: MDCRipple,
    leadingIconAriaLabel: String,
    trailingIconAriaLabel: String,
    leadingIconContent: String,
		trailingIconContent: String,

		leftIcon: String,
    rightIcon: String,
    
    iconEvent: Boolean
  }

  mdc: MDCTextField
  root: HTMLElement

  installed() {
    this.mdc = new MDCTextField(this.root)
  }

  focus = () => {
    this.mdc.focus()
  }

  layout = () => {
    this.mdc.layout()
  }

  uninstall() {
    this.mdc.destroy()
  }

  refIt = (e) => { this.root = e }

  iconClick = () => {
    //this.mdc.focus()
    this.fire('iconclick')
  }

  render(props) {
    const cls = extractClass(props, 'mdc-text-field', {
      'mdc-text-field--outlined': props.outlined,
      'mdc-text-field--fullwidth': props.fullWidth,
      'mdc-text-field--textarea': props.textarea,
      'mdc-text-field--disabled': props.disabled,
      'mdc-text-field--with-leading-icon': props.leftIcon || ((props.path || props.paths) && !props.iconRight),
      'mdc-text-field--with-trailing-icon': props.rightIcon ||((props.path || props.paths) && props.iconRight)
    })

    const inputProps = extract(props, ['disabled', 'required', 'pattern', 'value', 'minLength', 'maxLength', 'min', 'max', 'step'])

    if(props.fullWidth && !props.outlined){
      inputProps.placeholder = props.label
      props.label = null
      //直接修改 props 需要注意同步 this['__omiattr_']，不然下次和this['__omiattr_']的值进行 diff 结果相同导致不更新
      this['__omiattr_'] && (this['__omiattr_'].label = null)
    }
   
    const vd = [
      <div ref={this.refIt} {...cls}>
				{(props.path || props.paths) && !props.iconRight && <m-icon onClick={this.iconClick} class={classNames('icon', {'icon-event': props.iconEvent})} {...extract(props, ['path', 'paths'])}></m-icon>}
				{props.leftIcon && <i onClick={this.iconClick} class={classNames("material-icons mdc-text-field__icon",{
          'icon-event': props.iconEvent
        })}>{props.leftIcon}</i>}
        {props.counter && props.textarea && <div class="mdc-text-field-character-counter"></div>}
        {
          props.textarea ?
            <textarea id="my-text-field" class="mdc-text-field__input" rows={props.rows} cols={props.cols} {...inputProps}></textarea> :
            <input type={props.type} id="my-text-field" class="mdc-text-field__input" {...inputProps} />
        }
        {
          props.outlined ?
            <div class="mdc-notched-outline">
              <div class="mdc-notched-outline__leading"></div>
              <div class="mdc-notched-outline__notch">
                {props.label === undefined || !props.noLabel && <label for="tf-outlined" class="mdc-floating-label">{props.label}</label>}
              </div>
              <div class="mdc-notched-outline__trailing"></div>
            </div> :
            (props.label === undefined || !props.noLabel && <label class="mdc-floating-label" for="my-text-field">{props.label}</label>)
        }
				{(props.path || props.paths) && props.iconRight && <m-icon onClick={this.iconClick} class={classNames('icon', {'icon-event': props.iconEvent})} {...extract(props, ['path', 'paths'])}></m-icon>}
				{props.rightIcon && <i onClick={this.iconClick} class={classNames("material-icons mdc-text-field__icon",{
          'icon-event': props.iconEvent
        })}>{props.rightIcon}</i>}
        {!props.outlined && <div class="mdc-line-ripple"></div>}
      </div>
    ]

    if (props.helperText || (props.counter && !props.textarea)) {
      vd.push(
        <div class="mdc-text-field-helper-line">
          {props.helperText && <div class={`mdc-text-field-helper-text${props.showHelper ? ' mdc-text-field-helper-text--persistent' : ''}`}>{props.helperText}</div>}
          {props.counter && !props.textarea && <div class="mdc-text-field-helper-line">
            <div class="mdc-text-field-character-counter"></div>
          </div>}
        </div>)
    }

    return vd
  }
}
