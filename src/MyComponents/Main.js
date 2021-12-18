import React from 'react'

export default function Main() {

    
    return (
        <><br></br><br></br>
            <div className='flex-container'>
                <div className='flex-col'>
                    <div className='flex-container grid-container'>
                        <div className='flex-col radio-container'>
                            <input type="checkbox" className='inputBox parity-null' id="q" />
                        </div>
                        <div className='flex-col radio-container'>
                            <input type="checkbox" className='inputBox parity' id="w" />
                        </div>
                        <div className='flex-col radio-container'>
                            <input type="checkbox" className='inputBox parity' id="e" />
                        </div>
                        <div className='flex-col radio-container'>
                            <input type="checkbox" className='inputBox data' id="r" />
                        </div>
                    </div>
                    <div className='flex-container grid-container'>
                        <div className='flex-col radio-container'>
                            <input type="checkbox" className='inputBox parity' id="a" />
                        </div>
                        <div className='flex-col radio-container'>
                            <input type="checkbox" className='inputBox data' id="s" />
                        </div>
                        <div className='flex-col radio-container'>
                            <input type="checkbox" className='inputBox data' id="d" />
                        </div>
                        <div className='flex-col radio-container'>
                            <input type="checkbox" className='inputBox data' id="f" />
                        </div>
                    </div>
                    <div className='flex-container grid-container'>
                        <div className='flex-col radio-container'>
                            <input type="checkbox" className='inputBox parity' id="z" />
                        </div>
                        <div className='flex-col radio-container'>
                            <input type="checkbox" className='inputBox data' id="x" />
                        </div>
                        <div className='flex-col radio-container'>
                            <input type="checkbox" className='inputBox data' id="c" />
                        </div>
                        <div className='flex-col radio-container'>
                            <input type="checkbox" className='inputBox data' id="v" />
                        </div>
                    </div>
                    <div className='flex-container grid-container'>
                        <div className='flex-col radio-container'>
                            <input type="checkbox" className='inputBox data' id="h" />
                        </div>
                        <div className='flex-col radio-container'>
                            <input type="checkbox" className='inputBox data' id="j" />
                        </div>
                        <div className='flex-col radio-container'>
                            <input type="checkbox" className='inputBox data' id="k" />
                        </div>
                        <div className='flex-col radio-container'>
                            <input type="checkbox" className='inputBox data' id="l" />
                        </div>
                    </div>
                </div>
                {/* <div className='flex-col'>

                </div> */}
            </div>
            <div id='displayVal'></div>

        </>
    )
}
