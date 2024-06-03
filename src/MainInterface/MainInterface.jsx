import React from 'react'
import './MainInterface.css'
import { Link } from 'react-router-dom'
import './MainInterface.css'

const MainInterface = () => {
    return (
        <div className="mainInterface">
            <div className='teaching'>
                <h1 className="heading">Teaching Content</h1>
                <Link className='buttonLink' to={'/UseState'}><button>Use State</button></Link>
                <Link className='buttonLink' to={"/UseEffect"}><button>Use Effect</button></Link>
                <Link className='buttonLink' to={"/UseLayoutEffect"}><button>Use Layout Effect</button></Link>
                <Link className='buttonLink' to={"/UseId"}><button>Use Id</button></Link>
                <Link className='buttonLink' to={"/UseRef"}><button>Use Ref</button></Link>
                <Link className='buttonLink' to={'/UseContext'}><button>Use Context</button></Link>
                <Link className='buttonLink' to={'/UseCallBack'}><button>Use Call Back</button></Link>
                <Link className='buttonLink' to={'/UseMemo'}><button>Use Memo</button></Link>
                <Link className='buttonLink' to={'/UseActionState'}><button>Use Action State</button></Link>
                <Link className='buttonLink' to={"/UseReducer"}><button>Reducer</button></Link>
            </div>
            <div className="practising">
                <h1 className="heading">Practising Content</h1>
                <Link className='buttonLink' to={"/UseEffectSearch"}><button>Use Effect Search</button></Link>
                <Link className='buttonLink' to={"/FillForm"}><button>Player Card</button></Link>
                <Link className='buttonLink' to={"/CallBack"}><button>Call Back</button></Link>
                <Link className='buttonLink' to={"/Memo"}><button>Memo</button></Link>
                <Link className='buttonLink' to={"/ItemList"}><button>Item List</button></Link>
            </div>
        </div>
    )
}

export default MainInterface