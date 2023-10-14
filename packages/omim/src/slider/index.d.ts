import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    discrete?: boolean;
    value?: number;
    disabled?: boolean;
    min: number;
    max: number;
    step: number;
    displayMarkers?: boolean;
}
export default class Slider extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        value: number;
        step: number;
        min: number;
        max: number;
    };
    static propTypes: {
        discrete: BooleanConstructor;
        value: NumberConstructor;
        disabled: BooleanConstructor;
        min: NumberConstructor;
        max: NumberConstructor;
        step: NumberConstructor;
        displayMarkers: BooleanConstructor;
    };
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
