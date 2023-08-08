import {useState} from 'react'
export const WeekList = (props) => {

    const day_start = 8;
    const day_end = 20;
    
    var start;
    var end;
    var weekStart;
    var weekEnd;
    var selectedElemnts=[];
    const selCol = (name) =>{
        unSel()
        var temp = document.getElementsByClassName(name);
            // console.log(temp)

        var temp2 = []
        for(var j = 0; j < temp.length; j++){
            temp[j].setAttribute("mark","1")
            temp2.push(temp[j])
        }
        selectedElemnts = temp2
        
    }

    const unSel = () =>{
        console.log(selectedElemnts)
        for(let i = 0; i<selectedElemnts.length; i++){
            selectedElemnts[i].setAttribute("mark","0")
        }
    }

    const sel = (event) => {
        unSel()
   
        let s = parseInt(weekStart[weekStart.length-1])
        let e = parseInt(weekEnd[weekEnd.length-1])

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
        start = parseInt(start)
        end = parseInt(end)
        
        var temp2 = [];
        for(let i = s; i < parseInt(e)+1; i++){
            var temp = document.getElementsByClassName("d4y-"+i);
            // console.log(temp)
            
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
            
            let n = event.target.className;
            if(n.includes("d4y")){
                start = event.target.getAttribute("v")
                let l = n.length
                weekStart = n.substring(l-5,l)
            }
          
        }
    }

    const selEnd = (event) => {

        
        let n = event.target.className;
        if(n.includes("d4y")){
            end = event.target.getAttribute("v")
            let l = n.length
            weekEnd = n.substring(l-5,l)
        }

        sel();
        
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
        <div className="week">
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