import { WeElement } from 'omi';
import { MDCSwitch, MDCSwitchFoundation } from '@material/switch';
import '../theme.ts';
interface Props {
    label?: string;
    disabled?: boolean | string;
    checked?: boolean | string;
    value?: string;
}
export default class Switch extends WeElement<Props> {
    static css: any;
    static propTypes: {
        label: StringConstructor;
        disabled: BooleanConstructor;
        checked: BooleanConstructor;
        value: StringConstructor;
    };
    static defaultProps: {};
    switchControl: MDCSwitch;
    switchFoundation: MDCSwitchFoundation;
    updated(): void;
    installed(): void;
    initSwitch(): void;
    onInput: (evt: any) => void;
    render(props: any): JSX.Element[];
}
export {};
