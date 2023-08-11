export const BoxSelect = (props) => {
    var selectorBox;

    var lastX;
    var lastY;



    const boxSelectStart = (event) => {
        if(event.button===0 && event.buttons===1){
            let n = event.target.className;
            if(n.includes("d4y")){
                selectorBox = (document.getElementById("selector-box"))
                if(selectorBox!==null){
                    selectorBox.setAttribute("drawing", "1")
                    lastX = event.clientX
                    lastY = event.clientY
                    selectorBox.style["top"] = lastY+"px"
                    selectorBox.style['left'] = lastX + "px"
                }
            }
        }
    }

    const boxSelect = (event)=>{
        if(event.button===0 && event.buttons===1){
            if(selectorBox!==null){
                let n = event.target.className;
                if(n.includes("d4y")){
                    if((event.clientY - lastY)<0){
                        selectorBox.style["top"] = event.clientY+"px"
                    }
                    if((event.clientX-lastX)<0){
                        selectorBox.style["left"] = event.clientX+"px"
                    }
                    selectorBox.style["height"] = (Math.abs(event.clientY - lastY))+"px"
                    selectorBox.style["width"] = (Math.abs(event.clientX - lastX))+"px"
                }
            }
        }
    }
    const boxSelectEnd = (event)=>{       
        if(event.button===0 &&event.buttons===0 ){
            if(selectorBox!==null){
                lastX = null;
                lastY = null;
                selectorBox.style['height'] = "0px"
                selectorBox.style['width'] = "0px"
                selectorBox.setAttribute("drawing","0")
                selectorBox=null
            }
        }
    }

    return(
        <>
        <div className="full-fill">
        <div id="selector-box"/>
            <div className="box-select-zone" onMouseMove={boxSelect} onMouseDown={boxSelectStart} onMouseUp={boxSelectEnd}>
                
                {props.children}
            </div>
        </div>
        </>
    )
}