import { WeElement } from 'omi';
import { MDCSnackbar } from '@material/snackbar';
import '../theme.ts';
interface Props {
    show?: boolean;
    stacked?: boolean;
    msg: string;
    buttonText?: string;
    leading?: boolean;
}
export default class Snackbar extends WeElement<Props> {
    static css: any;
    static defaultProps: {};
    static propTypes: {
        show: BooleanConstructor;
        stacked: BooleanConstructor;
        msg: StringConstructor;
        buttonText: StringConstructor;
        leading: BooleanConstructor;
    };
    snackbar: MDCSnackbar;
    installed(): void;
    updated(): void;
    onButtonClick: (evt: Event) => void;
    onIconButtonClick: (evt: Event) => void;
    render(props: any): JSX.Element;
}
export {};
