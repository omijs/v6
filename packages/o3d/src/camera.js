import { Vector3 } from './vector3'
import { Matrix4 } from './matrix4'

class Camera {
  constructor(option) {
    //http://blog.csdn.net/lyx2007825/article/details/8792475
    //http://www.cnblogs.com/yiyezhai/archive/2012/09/12/2677902.html
    this._createProp('x', option.x, this._update)
    this._createProp('y', option.y, this._update)
    this._createProp('z', option.z, this._update)
    //target x y z
    this._createProp('tx', option.tx, this._update)
    this._createProp('ty', option.ty, this._update)
    this._createProp('tz', option.tz, this._update)

    //(vertical field of view(FOV))
    this.fov = option.fov || 75
    this.ratio = option.ratio || 1920 / 1080
    this.front = option.front || 1
    this.back = option.back || 10000
    this._update()
  }

  _update() {
    //http://webglfactory.blogspot.com/2011/06/how-to-create-view-matrix.html
    //http://4.bp.blogspot.com/_ltmZpULxXtI/TSn3hwEQuZI/AAAAAAAAAes/H93UF8OT1sE/s1600/gimballock_camera.png
    this.v_matrix = Matrix4.lookAt([], [this.x, this.y, this.z], [this.tx, this.ty, this.tz], [
      0,
      1,
      0
    ])
    this.p_matrix = Matrix4.getProjection(
      this.fov,
      this.ratio,
      this.front,
      this.back
    )
    this.un_p_matrix = new Matrix4().getInverse(this.p_matrix)
    this.un_v_matrix = new Matrix4().getInverse(this.v_matrix)
    if(this.stage){
      this.stage.pv.multiplyMatrices(this.p_matrix, this.v_matrix)
    }
  }
  lookAt(target) {
    this.target = target
    this._update()
  }
  createRay(rotioX, ratioY) {
    let v3 = Vector3

    let pl = [this.x, this.y, this.z]
    let m = new Matrix4().multiplyMatrices(this.un_v_matrix, this.un_p_matrix)

    let p2 = v3.applyProjection([rotioX, ratioY, 0], m)

    let v = v3.sub([], p2, pl)
    return {
      dir: v3.normalize(v, v),
      pt: pl
    }
  }
  _createProp(name, defaultValue, setterCallback) {
    this['_' + name] = defaultValue
    Object.defineProperty(this, name, {
      get() {
        return this['_' + name]
      },
      set(value) {
        this['_' + name] = value
        setterCallback.call(this, value)
      }
    })
  }
}

export { Camera }
