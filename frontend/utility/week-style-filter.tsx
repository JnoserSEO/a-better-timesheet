// import React from 'react'
import TimesheetView from '../models/view.model'

const weekStyleFilter = (view:TimesheetView,index:number,component:JSX.Element)=>{
    if (view === '7 day' || view === '5 day' && index !== 0 && index !== 6) {
        return component
    }
    return undefined
}

export default weekStyleFilter