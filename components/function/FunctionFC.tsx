
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const FunctionFC = () => {
    return (
        <div>
            <h1>Function</h1>
            <p>Typescript中的function寫法有兩種，一種是function宣告，一種是function表達式。</p>
            <p>function宣告的寫法如下：</p>
            <Prism language="javascript" style={vscDarkPlus}>
                {`function add(x: number, y: number): number {
    return x + y;
}`}
            </Prism>
            <p>function表達式的寫法如下：</p>
            <Prism language="javascript" style={vscDarkPlus}>
                {`const add = function (x: number, y: number): number {
    return x + y;
}`}
            </Prism>
            <p>function宣告的寫法和function表達式的寫法是等價的，但是function宣告的寫法會被提升，所以function宣告的寫法可以在使用之前宣告。</p>

            <p>另外function可以不用特別宣告void，因為void是預設值。</p>
            <Prism language="javascript" style={vscDarkPlus}>
                {`function add(x: number, y: number): void {
    console.log(x + y);
}`}
            </Prism>

            <p>function宣告的寫法和function表達式的寫法也可以用箭頭函數的寫法來替代。</p>
            <Prism language="javascript" style={vscDarkPlus}>
                {`const add = (x: number, y: number): number => x + y;
`}
            </Prism>
            <p>箭頭函數的寫法是等價於function表達式的寫法。</p>






        </div>
    );
};
