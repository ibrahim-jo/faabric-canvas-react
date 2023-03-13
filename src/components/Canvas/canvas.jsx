import React from 'react'
import './canvas.css'
import {useOnDraw}from '../hooks/Drowing'
const Canvas = ({width,height}) => {
    
    const onDraw=(ctx,point,prevPoint)=>{
      // ctx.fillStyle= '#000000'
      //     ctx.beginPath();
      //     ctx.arc(point.x,point.y,1,0,2 * Math.PI)
      //    console.log('ctx',point.x,point.y)
      //     ctx.fill()
          drawLine(ctx,prevPoint,point,'#000000',5)
    }
    const drawLine=(ctx,start,end,color,width)=>{
      start = start?start: end;
      ctx.beginPath()
      ctx.lineWidth=width;
      ctx.strokeStyle=color;
      ctx.moveTo(start.x,start.y);
      ctx.lineTo(end.x,end.y);
      ctx.stroke()
      ctx.fillStyle= color
      ctx.beginPath();
      ctx.arc(start.x,start.y,2,0,2 * Math.PI)
      ctx.fill()

    }
    const {setCanvasRef,mouseDownListener}=useOnDraw(onDraw)

  return (
    <div >
        <canvas className='canvas' 
         width={width}
         height={height}
         onMouseDown={mouseDownListener} 
          ref={setCanvasRef} />
        </div>
  )
}

export default Canvas