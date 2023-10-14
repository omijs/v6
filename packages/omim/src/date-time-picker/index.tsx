import Picker from './md-date-time-picker/js/mdDateTimePicker'
import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import * as moment from 'moment'

//@ts-ignore
import '../theme.ts'

interface Props {
  show?: boolean,
  type?: string,
  init?: string,
  past?: string,
  future?: string,
  lan?: string
}

@tag('m-date-time-picker')
export default class DateTimePicker extends WeElement<Props>{
  static css = css

  static defaultProps = {
    type: 'date',
    show: false
  }

  install() {
    moment.locale(this.props.lan);
  }

  static propTypes = {
    type: String,
    show: Boolean,
    init: String,
    past: String,
    future: String,
    lan: String
  }

  receiveProps(props, pre) {
    if (props.show && !pre.show) {
      this.picker.show()

    } else if (pre.show && !props.show) {
      this.picker.hide()
    }

    return false
  }

  picker: Picker

  installed() {


    const now = moment()
    //@ts-ignore
    const picker = new Picker({
      type: this.props.type,
      root: this.shadowRoot.querySelector('.m-m-date-time-picker'),
      init: this.props.init ? moment(this.props.init) : now,
      past: this.props.past ? moment(this.props.past) : moment().subtract(21, 'years'),
      future: this.props.future ? moment(this.props.future) : now,
      onOk: (evt) => {
        this.fire('ok', evt)
      },
      onCancel: () => {
        this.fire('cancel')
      }
    })

    if (this.props.show) {
      picker.show()
    }

    this.picker = picker

  }

  render(props) {
    return (
      <div {...extractClass(props, 'm-m-date-time-picker')}>

      </div>
    )
  }
}
