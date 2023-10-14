/**
 * m-transition element based on vue-transition
 * Tom Fales (@enlightenmentor)
 * Licensed under the MIT License
 * https://github.com/enlightenmentor/vue-transition/blob/master/LICENSE
 *
 * modified by dntzhang
 *
 */

//todo duration and delay support

import { tag, WeElement, h } from 'omi'

interface Props {
  appear?: boolean,
  show?: boolean,
  name: string,
  removable?: boolean,
  removed?: boolean
}

@tag('m-transition')
export default class Transition extends WeElement<Props>{

  static css = `  
  :host {
    display: inline-block;
  }`

  static propTypes = {
    name: String,
    appear: Boolean,
    show: Boolean,
    removable: Boolean

  }

  static defaultProps = {
    name: 'm',
    appear: false,
    show: false
  }

  installed() {
    if (this.props.show && this.props.appear) {
      this.appearing()
    }
  }

  toggle() {
    this.props.show = !this.props.show
    if (this.props.show)
      this.enter()
    else
      this.leave()
  }

  receiveProps(props) {
    if (props.show)
      this.enter()
    else
      this.leave()
  }

  callback: () => void

  appearing() {
    this.fire('before-appear')
    this.classList.add(this.props.name + '-appear')
    this.classList.add(this.props.name + '-appear-active')

    this.callback = function () {
      this.classList.remove(this.props.name + '-appear-to')
      this.classList.remove(this.props.name + '-appear-active')
      this.fire('after-appear')
    }.bind(this)
    this.once('transitionend', this.callback)
    this.once('animationend', this.callback)

    window.setTimeout(function () {
      this.classList.remove(this.props.name + '-appear')
      this.classList.add(this.props.name + '-appear-to')
      this.fire('appear')
    }.bind(this), 0)
  }

  _tempNode: HTMLElement

  enter() {
    if (this.props.removable && this.children.length == 0) {
      this.appendChild(this._tempNode)
    }
    this.fire('before-enter')
    this.classList.remove(this.props.name + '-leave-active')
    this.classList.remove(this.props.name + '-leave-to')
    this.classList.add(this.props.name + '-enter')
    this.classList.add(this.props.name + '-enter-active')

    this.callback = function () {
      this.classList.remove(this.props.name + '-enter-active')
      this.fire('after-enter')
    }.bind(this)
    this.once('transitionend', this.callback)
    this.once('animationend', this.callback)

    window.setTimeout(function () {
      this.classList.remove(this.props.name + '-enter')
      this.classList.add(this.props.name + '-enter-to')
      this.fire('enter')
    }.bind(this), 0)
  }

  leave() {
    this.fire('before-leave')
    this.classList.remove(this.props.name + '-enter-active')
    this.classList.remove(this.props.name + '-enter-to')
    this.classList.add(this.props.name + '-leave')
    this.classList.add(this.props.name + '-leave-active')

    this.callback = function (e) {

      if (!this.props.show) {
        this.classList.remove(this.props.name + '-leave-active')
        this.fire('after-leave')
        this._tempNode = this.children[0]
        if (this.props.removable) {
          this._tempNode.parentNode.removeChild(this._tempNode)
          this.fire('removed')
        }

      }
    }.bind(this)
    this.once('transitionend', this.callback)
    this.once('animationend', this.callback)

    window.setTimeout(function () {
      this.classList.remove(this.props.name + '-leave')
      this.classList.add(this.props.name + '-leave-to')
      this.fire('leave')
    }.bind(this), 0)
  }

  once(name, callback) {
    const wrapCall = function () {
      this.removeEventListener(name, wrapCall)
      callback()
    }.bind(this)
    this.addEventListener(name, wrapCall)
  }

  render(props) {
    if (props.removed) return
    return <slot></slot>
  }
}
