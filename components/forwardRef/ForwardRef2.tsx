import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface ChildRef {
    addImage: (src: string, imgProps?: any) => void;
}

// const Child = forwardRef((props, ref: React.Ref<HTMLInputElement>) => {
const Child = forwardRef<ChildRef>((props, ref) => {

    const childRef = useRef<HTMLInputElement>(null);

    const publicRef = {
        elementRef: childRef,
        addImage: (src, imgProps = Date.now()) => {
            // 在控制台中输出图像的 src 和 imgProps
            console.log('Added image:', src, imgProps);
        },
        sumNumbers: (a, b) => {
            return a + b;
        }
    }

    // 暴露 addImage 方法给父组件調用
    // 包起來比較方便，因為假如有多個方法，可以一次包起來暴露出去
    useImperativeHandle(ref, () => publicRef);

    return <div>Child</div>;
});

export const ForwardRef2 = () => {
    const sceneRef = useRef(null);
    const handleAddImage = () => {
        if (sceneRef.current) {
            // sceneRef.current.addImage();
            sceneRef.current.addImage('image-src', { alt: 'Image Alt' });
            sceneRef.current.addImage('image-src');
        }
    };

    const [total, setTotal] = useState(0);

    const handleSumNumbers = () => {
        if (sceneRef.current) {
            const sum = sceneRef.current.sumNumbers(1, 2);
            setTotal(sum);
        }
    };

    return (
        <div>
            <h1>ForwardRef2</h1>
            <p>進階</p>
            <Child ref={sceneRef} />
            <button onClick={handleAddImage}>addImage</button>
            <p>total: {total}</p>
            <button onClick={handleSumNumbers}>sumNumbers</button>
        </div>
    )
}

