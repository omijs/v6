# omi-canvas

> Perfect fusion of web components, jsx and canvas.

The current version is v0.0.0. v1.0.0 is coming soon.

[→ Online DEMO](https://tencent.github.io/omi/packages/omi-canvas/examples/simple/)

```js
import { render, define, WeElement } from 'omi'
import 'omi-canvas'
import omiUrl from './omi.jpg'

define('my-app', class extends WeElement {
  static observe = true

  data = {
    scale: 0.5
  }

  css() {
    return `
        div{
          text-align: center;
        }`
  }

  onClick = (evt) => {
    this.data.scale = 0.5 + Math.random() * 0.1
  }

  render() {
    return (
      <div>
        <h1>Omi</h1>
        <omi-canvas width={400} height={400} css='border: 1px solid #ccc;'>
          <text
            text='Hello omi-canvas'
            font='30px Segoe UI'
            color='#ff7700'
            baseline='top'
            x={80}
            y={100}
          />
          <bitmap
            onClick={this.onClick}
            src={omiUrl}
            cursor='pointer'
            scale={this.data.scale}
            x={130}
            y={140}
          />
          <group alpha={0.5} y={270}>
            <text
              text='I am in a group.'
              font='30px Segoe UI'
              color='#ff7700'
              baseline='top'
              x={80}
            />
          </group>
        </omi-canvas>
      </div>
    )
  }
})

render(<my-app />, 'body')
```

The effect shown below:

![](./assets/omi-canvas2.jpg)

## Tag Supported

|**Name**|**Describe**|
| ----|---------|
|text| Used to display text|
|bitmap|Used to display image|
|group|Used to group elements. Group can nested group.|

## Property

### Transform

|name      |Describe   |
|---|---|
| x | Horizontal offset |
| y | Vertical offset |
| scaleX | Horizontal scaling |
| scaleY | Vertical scaling |
| scale | Horizontal and Vertical scaling |
| rotation | rotation |
| skewX | skewX |
| skewY | skewY |
| originX |Rotation base point X |
| originY | Rotation base point Y |

### Alpha

|Name      |Describe   |
|---|---|
| alpha | The transparency of the element |

Notice that the father and son have set up alpha to do multiplicative stacking.

### compositeOperation 

|Name      |Describe   |
|---|---|
| compositeOperation | The superposition pattern drawn from the source image to the target image |

Notice that if you don't have a definition of compositeOperation to look up, find the nearest compositeOperation's parent container as its own compositeOperation.

### Cursor

|Name      |Describe   |
|---|---|
| cursor | The shape of the mouse |

### Fixed

|Name      |Describe   |
|---|---|
| fixed | Whether to fixed or not, the default is false, and set to true will not overlay the transform of ancestors. |

### Shadow

|Name      |Describe   |
|---|---|
| shadow | shadow|

Usage:

```js
<text
  text='omi'
  shadow = {
    color: '#42B035',
    offsetX: -5,
    offsetY: 5,
    blur: 10
    } 
/>
```

## Events Supported

|**Supported List**|
|----------|
|onClick|
|onTouchStart|
|onTouchMove|
|onTouchEnd|
|onTouchCancel|
|onMouseMove|
|onMouseDown|
|onMouseUp|
|onMouseOver|
|onMouseOut|
|onDblClick|
|onContextMenu|
|onDrag|

## License

MIT © [dntzhang](https://github.com/dntzhang/)
