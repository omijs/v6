import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    label?: string;
    disabled?: boolean;
    indeterminate?: boolean;
    checked?: boolean;
    value: string;
}
export default class Checkbox extends WeElement<Props> {
    static css: any;
    static propTypes: {
        label: StringConstructor;
        disabled: BooleanConstructor;
        indeterminate: BooleanConstructor;
        checked: BooleanConstructor;
        value: StringConstructor;
    };
    changeHandler: (e: any) => void;
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
