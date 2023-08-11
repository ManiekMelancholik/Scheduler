import {useState} from 'react'
export const WeekList = (props) => {

    const day_start = 8;
    const day_end = 20;
    
    const [start, setStart] = useState();
    var [end, setEnd] = useState();
    
    var [s, setS] = useState();
    var [e, setE] = useState();


    const [startB, setStartB] = useState();
    var [endB, setEndB] = useState();
    
    var [sB, setSB] = useState();
    var [eB, setEB] = useState();

    const [arrSelected, setArrSelected] = useState([...Array(5)].map(e => Array((day_end-day_start+1)*4).fill(0)));
    const [arrState, setArrState] = useState([...Array(5)].map(e => Array((day_end-day_start+1)*4).fill(0)));

    const [reset, setReset] = useState(false)



    const selCol = (name) =>{
        // unSel()
        // var temp = document.getElementsByClassName(name);

        // var temp2 = []
        // for(var j = 0; j < temp.length; j++){
        //     temp[j].setAttribute("mark","1")
        //     temp2.push(temp[j])
        //     selecting = true;
        // }
        // selectedElemnts = temp2
        
    }

    const unSel = () =>{
        // console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
        // console.log("weekE: " + e + "  end: " + end)
        // console.log("weekS: " + s + "  start: " + start)

        if(end!= null && start!=null && s!=null && e!=null){
            for(let i = s; i <= e; i++){
                for(let j = start; j <= end; j++){
                    arrSelected[i][j]=0
                }
        
            }

            // setReset(!reset)


            setStart(null)
            setE(null)
            setEnd(null)
            setS(null)
            setReset(!reset)
           
        }
    }

    const sel = (event) => {
        

        if(end!= null && start!=null && s!=null && e!=null){
           
            // setE(parseInt(weekEnd[weekEnd.length-1]))

            if(e<s){
                let t = s;
                setS(e);
                setE(t);
            }
            if(end<start){
                let t = start
                setStart(end)
                setEnd(t)
            }
            

            for(let i = s; i <= e; i++){
                for(let j = start; j <= end; j++){
                    arrSelected[i][j]=1
                }
        
            }
        setReset(!reset)
        }

        
    }


    const boxClick = (event)=>{
        // unSel()
        if(event.button===0 && event.buttons===1){
            let n = event.target.className;
            if(n.includes("d4y")){
                setEnd(parseInt(event.target.getAttribute("v")))
                setE(parseInt(n[n.length-1]))
                setStart(parseInt(event.target.getAttribute("v")))
                setS(parseInt(n[n.length-1]))
                
            }
        }
        sel()
    }



    const boxSelectStart = (event) => {
        unSel()
        if(event.button===0 && event.buttons===1){
            let n = event.target.className;
            if(n.includes("d4y")){
                setStart(parseInt(event.target.getAttribute("v")))
                setS(parseInt(n[n.length-1]))
                
            }
        }
        // console.log("-----------------------------------------")
        // console.log("weekS: " + s + "  start: " + start)
    }

  

    const boxSelect = (event)=>{

        if(event.button===0 && event.buttons===1){
            let n = event.target.className;
            if(n.includes("d4y")){
                setEnd(parseInt(event.target.getAttribute("v")))
                setE(parseInt(n[n.length-1]))
            }
        }
        // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        // console.log("weekE: " + weekEnd + "  end: " + end)
    }

    const boxSelectEnd = (event)=>{
        if(event.button===0 ){
            let n = event.target.className;
            if(n.includes("d4y")){
                console.warn("-=-=-=-=-=wtf-=-=-=-=")
                setEnd(parseInt(event.target.getAttribute("v")))
                setE(parseInt(n[n.length-1]))
            }
            console.log("-----------------------------------------")
            console.log("weekE: " + e + "  end: " + end)
            console.warn(event)
            sel()
        }
    }


    const quicMenu = (event) => {
        arrSelected[2][1]=0
        arrState[2][1]=1

        setReset(!reset)

        
    }

    
    var curr = day_start;
    // console.log(day_end-day_start)
    var iter = 0;
    
   
    iter = 0;
    var its = []
    for(let i=0; i <  (day_end-day_start); i++){
        curr = day_start+i;
        for(let h=0; h <4; h++){
            its.push({a:curr + (h*0.15),b:iter})
            iter++
        }
    }
   
    its.push({a:day_end,b:iter})
    const [intervals, setInterwals] = useState(its);


    const linkData = (ints)=>{
        var ret = [];
        for(let i = 0; i < ints.length; i++){
            ret.push(

                <tr className="tableRow" key={ints[i].b} num={((ints[i].a*100)%2).toFixed(0)}>
                <td className="row_name">{ints[i].a.toFixed(2)}</td>
                <td className={"cell  s"+arrState[0][i]+"  d4y-0"} v={ints[i].b} mark={arrSelected[0][i]}><div className="selector">     <div className="dot"/></div></td>
                <td className={"cell  s"+arrState[1][i]+"  d4y-1"} v={ints[i].b} mark={arrSelected[1][i]}><div className="selector">     <div className="dot"/></div></td>
                <td className={"cell  s"+arrState[2][i]+"  d4y-2"} v={ints[i].b} mark={arrSelected[2][i]}><div className="selector">     <div className="dot"/></div></td>
                <td className={"cell  s"+arrState[3][i]+"  d4y-3"} v={ints[i].b} mark={arrSelected[3][i]}><div className="selector">     <div className="dot"/></div></td>
                <td className={"cell  s"+arrState[4][i]+"  d4y-4"} v={ints[i].b} mark={arrSelected[4][i]}><div className="selector">     <div className="dot"/></div></td>
            </tr>
            )
        }
        return(ret)
    }

    return(
        <div className="week" onMouseMove={boxSelect} onMouseDown={boxSelectStart} onMouseUp={boxSelectEnd} onContextMenu={quicMenu} onClick={boxClick}>
        
            <table className="metric" >
                
                
                <thead>
                <tr className="static-tableNames">
                    <th></th>
                    <th onClick = {()=>{selCol("d4y-0")}} >Monday     </th>    
                    <th onClick = {()=>{selCol("d4y-1")}} >Tuesday    </th>
                    <th onClick = {()=>{selCol("d4y-2")}} >Wednesday  </th>
                    <th onClick = {()=>{selCol("d4y-3")}} >Thursday   </th>
                    <th onClick = {()=>{selCol("d4y-4")}} >Friday     </th>

                </tr>
                </thead>
               
                {linkData(intervals)}

            </table>
            
















        </div>
    )


}