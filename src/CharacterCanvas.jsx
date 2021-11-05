import React, { useRef, useEffect } from 'react';
import sigmoji from './basesigmoji.png';

export default function Canvas(props) {
    const ref = useRef(null);

    useEffect(() => {
        const canvas = ref.current;
        const context = canvas.getContext('2d');

        context.fillStyle = '#000000';
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);

        const image = new Image();
        image.src = sigmoji;
    
        image.onload = () => context.drawImage(image, (context.canvas.width / 2) - (image.width / 2), (context.canvas.height / 2) - (image.height / 2));
    }, [])

    return <canvas ref={ref} {...props} />
}