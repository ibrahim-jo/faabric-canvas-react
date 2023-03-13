import React,{useState,useRef,useEffect} from 'react'
import { fabric } from 'fabric';

const CanvaFabric = () => {
  
  const canvaRef = useRef(null)
  const [canvFabric, setcanvFabric] = useState()
  const [widthPen, setWidthPen] = useState(3)
  const [colorPen, setcolorPen] = useState('black')
  const [toggle, settoggle] = useState(false)
  const [pen, setpen] = useState(false)
 
  useEffect(() => {
    const initCanvas= new fabric.Canvas(canvaRef.current,{
      width:800,
      height:400,
      backgroundColor:'red',
      isDrawingMode:pen,
      
    }) 
     setcanvFabric(initCanvas)

     return()=>{
      initCanvas.dispose()
     }

  }, [canvaRef])
  
 
  const  addCircle=()=>{
   const circle=new fabric.Circle({
      radius:20,
      fill:'black',
      top:50,
      left:50
    })
    if(canvFabric){
      canvFabric.add(circle)
      canvFabric.renderAll.bind(canvFabric)
    }
   
  } 
  const changeWidthPen=(width)=>{
    if(canvFabric){
      canvFabric.freeDrawingBrush.width=width
      setWidthPen(width)
      canvFabric.renderAll.bind(canvFabric)
    }
     
  }
   const changeColorPen=(color)=>{
       if(canvFabric){
        canvFabric.freeDrawingBrush.color=color

        setcolorPen(color)
        canvFabric.renderAll.bind(canvFabric)
       }
   }
   
   const toggleEreaser=()=>{
    if(canvFabric){
      if(toggle){
        console.log('black')
        changeColorPen('black')
        settoggle(false)
      }
      else{
        changeColorPen('red')
        settoggle(true)
        canvFabric.renderAll.bind(canvFabric)
      }
      
    }
   }
   const cleanAll=()=>{
    canvFabric.clear()
    canvFabric.backgroundColor='red'
    canvFabric.renderAll.bind(canvFabric)
   }
   const togglepen=()=>{
    console.log(CanvaFabric.backgroundColor)
    canvFabric.isDrawingMode=!pen
   setpen(!pen)
   canvFabric.renderAll.bind(canvFabric)

   }
   const addRec=()=>{
    const rec=new fabric.Rect({
      fill: '#06538e',
  width: 125,
  height: 125
    })
    if(canvFabric){
       canvFabric.add(rec)
       canvFabric.renderAll.bind(canvFabric)
    }
   }
  return (

    <div>
      <h1>CanvaFabric </h1>
      <canvas  ref={canvaRef} />
      <button onClick={()=>addCircle()}>Circle</button>
      <button onClick={()=>addRec()}>Rectangle</button>   
      <button onClick={()=>cleanAll()}>Clean</button>

      {widthPen}
        <input type='range' onChange={(e)=>changeWidthPen(e.target.value)}  value={widthPen} min={1} max={30} />
        <input type='color' onChange={(e)=>changeColorPen(e.target.value)}  value={colorPen}  />
         <button onClick={toggleEreaser} >Eraser</button>
         <button onClick={togglepen} >Pen</button>
    </div>
  )
}


// const CanvaFabric = () => {
//     const [canvas, setcanvas] = useState('')
//     const [ImgURL, setImgURL] = useState('')
// useEffect(() => {
//   setcanvas(initCanvas)

//   return () => {
//     initCanvas()
//   }
// }, [])


// const initCanvas = () => (
//     new fabric.Canvas('canvas', {
//       height: 400,
//       width: 800,
//       backgroundColor: 'pink'
//     })
//   )
//   const addRec=(canvi)=>{
//      const rec=new fabric.Rect({
//       height: 180,
//       width: 100,
//       fill: 'yellow'
//      })
//      canvi.add(rec)
//      canvi.renderAll()
//   }
//   const addImg=(e,url,canvi)=>{
//     e.preventDefault();
//     new fabric.Image.fromURL(url,img=>{
//        img.scale(0.75)
//        canvi.add(img)
//        canvi.renderAll()
//         setImgURL('')
//     })
//   }
//   return (
//     <div>
//         <canvas id="canvas"  />
//         <form onSubmit={(e)=>addImg(e,ImgURL,canvas)}>
//           <input type='text' 
//           value={ImgURL}
//           onChange={(e)=>setImgURL(e.target.value)} />
//           <button type='submit'>AddImg</button>
//         </form>
//         <button onClick={()=>addRec(canvas)}>AddRec</button>
//     </div>
//   )
// }

export default CanvaFabric