webpackJsonp([95],{83:function(e,a){e.exports="## Radio\n\nRadio buttons allow the user to select one option from a set while seeing all available options.\n\n## Usage\n\n```html\n<m-radio id='r1' value=\"1\" label='Label' checked name=\"abc\"> </m-radio>\n<m-radio id='r2' value=\"2\" label='Label' name=\"abc\"> </m-radio>\n<m-radio checked label='checked'> </m-radio>\n<m-radio disabled label='disabled'> </m-radio>\n```\n\n## Usage in Omi\n\nJSX:\n\n```jsx\n<m-radio onSelected={this.onSelected} value={1} label='Label' checked={!this.checked} name=\"abc\"></m-radio>\n<m-radio  onSelected={this.onSelected} value={2} label='Label' checked={this.checked} name=\"abc\"></m-radio>\n<m-radio checked label='checked' onclick={()=>{this.update()}}> </m-radio>\n<m-radio disabled label='disabled'></m-radio>\n```\n\n## API\n\n### Props\n\n|  **Name**  | **Type**        | **Defaults**  | **Details**  |\n| ------------- |:-------------:|:-----:|:-------------:|\n| label | string | -- | Right hand side text content |\n| disabled | boolean | -- | Disable radio buttons |\n| checked | boolean | -- | Initial state is checked |\n| value | string | -- | The value of the radio button |\n| name | string | -- | Radio button sectionalization |\n| onSelected | function | -- | Select the trigger |\n"}});
//# sourceMappingURL=95.9c8ab8dc.chunk.js.map