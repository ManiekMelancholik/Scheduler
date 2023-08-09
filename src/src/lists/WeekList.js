import {useState} from 'react'
export const WeekList = (props) => {

    const day_start = 8;
    const day_end = 20;
    
    var start;
    var end;
    var weekStart;
    var weekEnd;
    var selectedElemnts=[];

    var selectorBox;

    var lastX;
    var lastY;


    var selecting = false;

    const selCol = (name) =>{
        unSel()
        var temp = document.getElementsByClassName(name);

        var temp2 = []
        for(var j = 0; j < temp.length; j++){
            temp[j].setAttribute("mark","1")
            temp2.push(temp[j])
            selecting = true;
        }
        selectedElemnts = temp2
        
    }

    const unSel = () =>{
        for(let i = 0; i<selectedElemnts.length; i++){
            selectedElemnts[i].setAttribute("mark","0")
        }
        selectedElemnts=[]
        start=null
        end=null
        weekStart=null
        weekEnd=null
    }

    const sel = (event) => {
        
   
        let s = parseInt(weekStart[weekStart.length-1])
        let e = parseInt(weekEnd[weekEnd.length-1])
        start = parseInt(start)
        end = parseInt(end)
        if(e<s){
            let t = s;
            s = e;
            e = t
        }
        if(end<start){
            let t = start
            start = end
            end = t
        }
        
        // console.log(weekStart + " start: "+start + " s: "+s)
      
        // console.log(weekEnd + "  end: " + end + "  e: "+e)
       
        var temp2 = [];
        for(let i = s; i < parseInt(e)+1; i++){
            var temp = document.getElementsByClassName("d4y-"+i);

            
            for(let j = 0; j < temp.length; j++){
                let v = parseInt(temp[j].getAttribute("v"))
                if(v>=start ){
                    if(v <= end){
                    temp2.push(temp[j])
                    temp[j].setAttribute("mark","1")
                    }
                }
            }
            
        }
        selectedElemnts = temp2


        
    }

    const selStart = (event) => {
        if(event.buttons===1){
        unSel()

        
            // if(selectorBox!==null){
                let n = event.target.className;
                if(n.includes("d4y")){
                    start = event.target.getAttribute("v")
                    let l = n.length
                    weekStart = n.substring(l-5,l)
                }
            // }
          
        }
    }
    
    const selEnd = (event) => {
        if(event.buttons === 0){
            let n = event.target.className;
            if(n.includes("d4y")){
                end = event.target.getAttribute("v")
                let l = n.length
                weekEnd = n.substring(l-5,l)
            }
            if(selectorBox!==null){
               sel();
            }
        }
        
    }


    const boxSelectStart = (event) => {
        if(event.buttons===1){
            let n = event.target.className;
                
            if(n.includes("d4y")){
                selectorBox = (document.getElementById("selector-box"))
                selectorBox.setAttribute("drawing", "1")
                let e = window.event
                lastX = e.clientX
                lastY = e.clientY


                selectorBox.style["top"] = lastY+"px"
                selectorBox.style['left'] = lastX + "px"
            }
        }

    }

    const boxSelect = (event)=>{
        if(event.buttons===1){
            

            if(selectorBox!==null){
                let n = event.target.className;
                
                if(n.includes("d4y")){
                    let e = window.event
                
                    end = event.target.getAttribute("v")
                    let l = n.length
                    weekEnd = n.substring(l-5,l)

                        if((e.clientY - lastY)<0){
                            selectorBox.style["top"] = e.clientY+"px"
                        }
                        if((e.clientX-lastX)<0){
                            selectorBox.style["left"] = e.clientX+"px"
                        }
                        selectorBox.style['height'] = (Math.abs(e.clientY - lastY))+"px"
                        selectorBox.style['width'] = (Math.abs(e.clientX - lastX))+"px"
                        
                    
                
                    }
            }
          
        }
    }
    const boxSelectEnd = (event)=>{
        // selectorBox = (document.getElementById("selector-box"))
        if(event.buttons === 0){
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


    const quicMenu = (event) => {
        
    }

    var intervals = [];
    var curr = day_start;
    console.log(day_end-day_start)
    var iter = 0;
    for(let i=0; i <  (day_end-day_start); i++){
        curr = day_start+i;
        for(let h=0; h <4; h++){
            
            intervals.push({a:curr + (h*0.15),b:iter})
            iter++
            console.log("a")
        }
    }
    intervals.push({a:day_end,b:iter})

    return(
        <div className="week" onMouseMove={boxSelect} onMouseDown={boxSelectStart} onMouseUp={boxSelectEnd}>
        <div id="selector-box"/>
            <table className="metric" onContextMenu={quicMenu}>
                
                
                <thead>
                <tr className="static-tableNames">
                    <th></th>
                    <th onClick = {()=>{selCol("d4y-1")}} >Monday     </th>    
                    <th onClick = {()=>{selCol("d4y-2")}} >Tuesday    </th>
                    <th onClick = {()=>{selCol("d4y-3")}} >Wednesday  </th>
                    <th onClick = {()=>{selCol("d4y-4")}} >Thursday   </th>
                    <th onClick = {()=>{selCol("d4y-5")}} >Friday     </th>

                </tr>
                </thead>
                {intervals.map((interval)=>{
                        return(
                            <tr className="tableRow" key={interval.b} num={((interval.a*100)%2).toFixed(0)}>
                                <td className="row_name">{interval.a.toFixed(2)}</td>
                                <td className="cell d4y-1" v={interval.b} onMouseDown={selStart}  onMouseUp={selEnd}   ><div className="selector"><div className="dot"/></div></td>
                                <td className="cell d4y-2" v={interval.b} onMouseDown={selStart}  onMouseUp={selEnd}   ><div className="selector"><div className="dot"/></div></td>
                                <td className="cell d4y-3" v={interval.b} onMouseDown={selStart}  onMouseUp={selEnd}   ><div className="selector"><div className="dot"/></div></td>
                                <td className="cell d4y-4" v={interval.b} onMouseDown={selStart}  onMouseUp={selEnd}   ><div className="selector"><div className="dot"/></div></td>
                                <td className="cell d4y-5" v={interval.b} onMouseDown={selStart}  onMouseUp={selEnd}   ><div className="selector"><div className="dot"/></div></td>
                            </tr>
                        )
                    }
                )}
            

            </table>
            
















        </div>
    )


}