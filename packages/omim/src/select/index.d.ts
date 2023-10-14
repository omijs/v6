import { WeElement } from 'omi';
import '../theme.ts';
interface Props {
    label?: string;
    menu?: object;
}
export default class Select extends WeElement<Props> {
    static css: any;
    static propTypes: {
        label: StringConstructor;
        menu: ObjectConstructor;
    };
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
