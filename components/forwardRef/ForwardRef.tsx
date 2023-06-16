import React, { forwardRef, useRef } from 'react';
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
const Child = forwardRef((props, ref: React.Ref<HTMLInputElement>) => {
    return (
        <div>
            <input ref={ref} />
        </div>
    );
});

export const ForwardRef = () => {
    const ref = useRef(null);
    const handleClick = () => {
        ref.current.focus();
    }
    return (
        <div>
            <h1>ForwardRef</h1>
            <p>forwardRef是一個高階元件，可以讓我們將ref傳遞到子元件中。</p>
            <p>也可以說可以讓我們在父元件中操作子元件。</p>
            <p>以下是一個範例：</p>
            <Prism language="javascript" style={vscDarkPlus}>
                {`import React, { forwardRef, useRef } from 'react';
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const Child = forwardRef((props, ref: React.Ref<HTMLInputElement>) => {
    return (
        <div>
            <input ref={ref} />
        </div>
    );
});

export const ForwardRef = () => {
    const ref = useRef(null);
    const handleClick = () => {
        ref.current.focus();
    }
    return (
        <>
            <div>
                <Child ref={ref} />
            </div>
            <button onClick={() => ref.current.focus()}>focus</button>
        </>
    );
};
`}
            </Prism>
            <p>在上面的範例中，我們將ref傳遞到Child元件中，並且在Child元件中使用forwardRef來接收ref。</p>
            <p>在Child元件中，我們將ref傳遞到input元件中，這樣我們就可以在父元件中使用ref來操作input元件。</p>
            <div>
                <Child ref={ref} />
            </div>
            <button onClick={handleClick}>focus</button>

        </div>
    )
}

