import{useRef,useEffect} from 'react'

export const useOnDraw = (onDraw) => {
    const canvasRef = useRef(null)
   const isDrawing=useRef(false)

   const mouseMoveRef=useRef(null)
   const mouseUpRef=useRef(null)
   const prevPointRef=useRef(null)

useEffect(() => {
    const initMouseMoveListener=()=>{

        const mouseMoveListener=(e)=>{
       // console.log({X:e.clientX,Y:e.clientY})
        if(isDrawing.current){
           const point= computPoint(e.clientX,e.clientY)
          const  ctx=canvasRef.current.getContext('2d')
        if(onDraw){
           onDraw(ctx,point,prevPointRef.current)
           prevPointRef.current=point
        }
   }}
           mouseMoveRef.current=mouseMoveListener;
   window.addEventListener('mousemove',mouseMoveListener)
      }
      const initMouseUpListener=()=>{
        const mouseUpListener=()=>{
            isDrawing.current=false
            prevPointRef.current=null
        }
           mouseUpRef.current=mouseUpListener;
        window.addEventListener('mouseup',mouseUpListener)
       }
       const computPoint=(clientX,clientY)=>{
        if(canvasRef.current){
            const boundingRect= canvasRef.current.getBoundingClientRect()
        return{
            x:clientX - boundingRect.left,
            y:clientY - boundingRect.top
        }
        }
        else{
            return null
    
        }
        
     }
     const removeListener=()=>{
        if(mouseMoveRef.current){
            window.removeEventListener('mousemove',mouseMoveRef.current)
        }
        if(mouseUpRef.current){
            window.removeEventListener('mouseup',mouseUpRef.current)
        }
     }
     initMouseMoveListener()
     initMouseUpListener()
     

  return () => {
    removeListener()
    
  }
}, [onDraw])


function setCanvasRef(ref) {
      canvasRef.current=ref;
    }
    const mouseDownListener=()=>{
        isDrawing.current=true
    }

    return{
        setCanvasRef,
        mouseDownListener
    }

 /*
 const canvasRef = useRef(null)
   const isDrawing=useRef(false)

   const mouseDownRef=useRef(null)
   const mouseMoveRef=useRef(null)
   const mouseUpRef=useRef(null)
   const prevPointRef=useRef(null)

   useEffect(() => {

    return () => {
      if(mouseMoveRef.current){
          window.removeEventListener('mousemove',mouseMoveRef.current)
      }
      if(mouseUpRef.current){
          window.removeEventListener('mouseup',mouseUpRef.current)
      }
     

    }
  },[])

  function setCanvasRef(ref) {
     if(!ref){
        return 
     }
     else{
        if(canvasRef.current){
            canvasRef.current.removeEventListener('mousedown',mouseDownRef.current)
        }
        
       canvasRef.current=ref;
      initMouseMoveListener()
      initMouseDownListener()
      initMouseUpListener()

     }
  } 
   const initMouseMoveListener=()=>{

     const mouseMoveListener=(e)=>{
     console.log({X:e.clientX,Y:e.clientY})
     if(isDrawing.current){
        const point= computPoint(e.clientX,e.clientY)
       const  ctx=canvasRef.current.getContext('2d')
     if(onDraw){
        onDraw(ctx,point,prevPointRef.current)
        prevPointRef.current=point
     }
}}
        mouseMoveRef.current=mouseMoveListener;
window.addEventListener('mousemove',mouseMoveListener)
   }
   const initMouseDownListener=()=>{
    if(!canvasRef.current)return 

    const mouseDownListener=()=>{
     isDrawing.current=true
    }
       mouseDownRef.current=mouseDownListener;
      canvasRef.current.addEventListener('mousedown',mouseDownListener)
   }

   const initMouseUpListener=()=>{
    const mouseUpListener=()=>{
        isDrawing.current=false
        prevPointRef.current=null
    }
       mouseUpRef.current=mouseUpListener;
    window.addEventListener('mouseup',mouseUpListener)
   }
   const computPoint=(clientX,clientY)=>{
    if(canvasRef.current){
        const boundingRect= canvasRef.current.getBoundingClientRect()
    return{
        x:clientX - boundingRect.left,
        y:clientY - boundingRect.top
    }
    }
    else{
        return null

    }
    
 }
  return setCanvasRef;
  */
}
