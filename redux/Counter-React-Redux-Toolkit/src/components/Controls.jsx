import { useRef } from "react"
import { useDispatch } from "react-redux"
import { counterActions } from "../store/counter"
import { privacyActions } from "../store/privacy"
const Controls = () => {
    const dispatch = useDispatch()
    const val = useRef()
    const handleInc = () => {
        dispatch(counterActions.increment())
    }
    const handleDec = () => {
        dispatch(counterActions.decrement())
    }
    const handleAdd = () => {
        dispatch(counterActions.add(val.current.value))
        val.current.value = ""
    }
    const handleSub = () => {
        dispatch(counterActions.substract(val.current.value))
        val.current.value = ""
    }
    const handlePrivacy = () => {
        dispatch(privacyActions.toggle())
    }
    return <> <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary" onClick={handleInc}>+1</button>
        <button type="button" className="btn btn-success" onClick={handleDec}>-1</button>
        <button type="button" className="btn btn-success" onClick={handlePrivacy}  >Privacy</button>
    </div>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center addSubtract">
            <input type="text" placeholder="enter number" ref={val}></input>

            <button type="button" className="btn btn-success" onClick={handleAdd} >Add</button>
            <button type="button" className="btn btn-success" onClick={handleSub}>Subtract</button>
        </div>
    </>
}

export default Controls
