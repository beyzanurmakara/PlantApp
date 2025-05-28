declare module '*.svg' {
    import { SvgProps } from 'react-native-svg';
    const content: React.FC<
        SvgProps & {
            fillStroke?: string;
            fillSecondary?: string;
        }
    >;
    export default content;
}