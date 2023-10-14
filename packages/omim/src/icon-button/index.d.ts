import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    ripple?: boolean;
    toggle?: object;
    icons: object;
    icon: string;
    imgs: object;
    svg: object;
    color: string;
    disabled: boolean;
}
export default class IconButton extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        ripple: boolean;
    };
    static propTypes: {
        ripple: BooleanConstructor;
        toggle: ObjectConstructor;
        icons: ObjectConstructor;
        icon: StringConstructor;
        imgs: ObjectConstructor;
        svg: ObjectConstructor;
        color: StringConstructor;
        disabled: BooleanConstructor;
    };
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
