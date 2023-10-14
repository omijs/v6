﻿import { render, define, WeElement } from 'omi'
import '../../index'

define('my-app', class extends WeElement {
  onChange = value => {
    console.log(value)
  }

  render() {
    return (
      <div class="main">
        <omi-touch min={-1750} max={0} change={this.onChange}>
          <div class="touchArea">
            <ul>
              <li>Hello, Omi-Touch!</li>
              <li>AlloyTouch</li>
              <li>Omix</li>
              <li>AlloyFinger</li>
              <li>Omi</li>
              <li>AlloyGameEngine</li>
              <li>css3transform</li>
              <li>AlloyRender</li>
              <li>AlloyStick</li>
              <li>CodeStar</li>
              <li>AlloyDesigner</li>
              <li>JX</li>
              <li>TEditor</li>
              <li>JXAnimate</li>
              <li>Spirit</li>
              <li>AlloyImage</li>
              <li>ModJS</li>
              <li>Pretty row 16</li>
              <li>stepify</li>
              <li>AlloyTimer</li>
              <li>Alloy Desktop</li>
              <li>JX UI</li>
              <li>CodeTank</li>
              <li>iSpriter</li>
              <li>Rythem</li>
              <li>Go!Png </li>
              <li> row 1</li>
              <li> row 2</li>
              <li> row 3</li>
              <li>row 5</li>
              <li> row 5</li>
              <li> row 7</li>
              <li> row 8</li>
              <li> row 9</li>
              <li> row 11</li>
              <li> row 11</li>
              <li> row 12</li>
              <li> row 13</li>
              <li> row 14</li>
              <li> row 15</li>
              <li> row 16</li>
              <li> row 17</li>
              <li> row 18</li>
              <li> row 19</li>
              <li> row 20</li>
              <li> row 21</li>
              <li> row 22</li>
              <li> row 23</li>
              <li> row 24</li>
              <li style="border-bottom: none;"> row 25</li>
            </ul>
          </div>
        </omi-touch>
      </div>
    )
  }

  css() {
    return `
    *{
        box-sizing: border-box;
    }

    .main{
        width: 160px;
        overflow: hidden;
        border: 1px solid rgb(204, 204, 204);
        text-indent: 10px;
        margin: 100px auto;
    }


    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        width: 100%;
        text-align: left;
        font-size: 14px;
        transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

     li {
        list-style: none;
        padding: 0 10px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
        border-top: 1px solid #fff;
        background-color: #fafafa;
        font-size: 14px;
    }

    .touchArea{
        height: 250px;
        overflow: hidden;
    }`
  }
})

render(<my-app />, 'body')
