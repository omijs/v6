import h from 'omio'
import {VNode} from './vdom/vnode'

let Omi = {
    x: h,
    instances: {},
    _instanceId: 0,
    _styleId: 0,
    STYLEPREFIX: '__st_',
    PREFIX: '__s_',
    getInstanceId: function() {
        return Omi._instanceId++
    },
    plugins: {},
    scopedStyle: true,
    mapping: {},
    style: {}
}


function isServer() {
    return !(typeof window !== 'undefined' && window.document)
}

Omi.render = function(component, renderTo, option) {
    if (isServer()) return

    if(component instanceof VNode){
        component = new component.tagName(component.props)
    }

    component.renderTo = typeof renderTo === 'string' ? document.querySelector(renderTo) : renderTo
    if (typeof option === 'boolean') {
        component._omi_increment = option
    } else if (option) {
        component._omi_increment = option.increment
        component.$store = option.store
        if (option.ssr) {
            component.data = Object.assign({}, window.__omiSsrData, component.data)
        }
    }
    component.install()
    component.beforeRender()
    component._render(true)
    component._childrenInstalled(component)
    component.installed()
    component._execInstalledHandlers()
    return component
}


function spread(vd) {
    let str = ''

    if (vd instanceof VNode) {
        str += `<${vd.tagName} ${props2str(vd.props)}>${vd.children.map(child => {
            return spread(child)
        }).join('')}</${vd.tagName}>`
    } else {
        return vd
    }

    return str
}

function props2str(props) {
    let result = ''
    for (let key in props) {
        let val = props[key]
        let type = typeof val
        if (type !== 'function' && type !== 'object') {
            result += key + '="' + val + '" '
        }
    }
    return result
}

function spreadStyle() {
    let css = ''
    for (var key in Omi.style) {
        css += `\n${Omi.style[key]}\n`
    }
    return css
}

function stringifyData(component) {
    return '<script>window.__omiSsrData=' + JSON.stringify(component.data) + '</script>'
}

Omi.renderToString = function(component, store) {
    if(component instanceof VNode){
        component = new component.tagName(component.props)
    }
    Omi.ssr = true
    component.$store = store
    component.install()
    component.beforeRender()
    component._render(true)
    Omi.ssr = false
    let result = `<style>${spreadStyle()}</style>\n${spread(component._virtualDom)}${stringifyData(component)}`
    Omi.style = {}
    Omi._instanceId = 0
    return result
}

export default Omi
