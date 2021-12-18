import React from 'react'
import propTypes from 'prop-types'

export default function Header(props) {
    function arrayUpdate() {
        let q = document.getElementById('q');
        let w = document.getElementById('w');
        let e = document.getElementById('e');
        let r = document.getElementById('r');

        let a = document.getElementById('a');
        let s = document.getElementById('s');
        let d = document.getElementById('d');
        let f = document.getElementById('f');

        let z = document.getElementById('z');
        let x = document.getElementById('x');
        let c = document.getElementById('c');
        let v = document.getElementById('v');

        let h = document.getElementById('h');
        let j = document.getElementById('j');
        let k = document.getElementById('k');
        let l = document.getElementById('l');

        return [q.checked, w.checked, e.checked, r.checked, a.checked, s.checked, d.checked, f.checked, z.checked, x.checked, c.checked, v.checked, h.checked, j.checked, k.checked, l.checked];
    }

    function clear() {
        document.getElementById('r').checked = 0
        document.getElementById('s').checked = 0
        document.getElementById('d').checked = 0
        document.getElementById('f').checked = 0
        document.getElementById('x').checked = 0
        document.getElementById('c').checked = 0
        document.getElementById('v').checked = 0
        document.getElementById('h').checked = 0
        document.getElementById('j').checked = 0
        document.getElementById('k').checked = 0
        document.getElementById('l').checked = 0
        setParity()
        displayVal()
    }

    function setParity() {
        let arrayInp = arrayUpdate()
        let xor = arrayInp[1];
        for (let i = 3; i < arrayInp.length; i++) {
            if (i & 1 === 1) {
                xor = xor ^ arrayInp[i]
            }
        }
        if (xor === 1) {
            let w = document.getElementById('w');
            w.checked = !w.checked
        }

        xor = arrayInp[2];
        for (let i = 3; i < arrayInp.length; i++) {
            if (i == 3 || i == 6 || i == 7 || i == 10 || i == 11 || i == 14 || i == 15) {
                xor = xor ^ arrayInp[i]
            }
        }
        if (xor === 1) {
            let e = document.getElementById('e');
            e.checked = !e.checked
        }

        xor = arrayInp[4];
        for (let i = 5; i < arrayInp.length; i++) {
            if (i == 5 || i == 6 || i == 7 || i == 12 || i == 13 || i == 14 || i == 15) {
                xor = xor ^ arrayInp[i]
            }
        }
        if (xor === 1) {
            let a = document.getElementById('a');
            a.checked = !a.checked
        }

        xor = arrayInp[8];
        for (let i = 9; i < arrayInp.length; i++) {
            if (i == 9 || i == 10 || i == 11 || i == 12 || i == 13 || i == 14 || i == 15) {
                xor = xor ^ arrayInp[i]
            }
        }
        if (xor === 1) {
            let z = document.getElementById('z');
            z.checked = !z.checked
        }

        arrayInp = arrayUpdate();
        xor = arrayInp[0];
        for (let i = 1; i < arrayInp.length; i++) {
            xor = xor ^ arrayInp[i]
        }
        if (xor === 1) {
            let q = document.getElementById('q');
            q.checked = !q.checked
        }
        displayVal()
    }

    function displayVal() {
        let arrayInp = arrayUpdate()
        arrayInp = [arrayInp[3], arrayInp[5], arrayInp[6], arrayInp[7], arrayInp[9], arrayInp[10], arrayInp[11], arrayInp[12], arrayInp[13], arrayInp[14], arrayInp[15]]
        let val = 0
        for (let i = 0; i < arrayInp.length; i++) {
            val += arrayInp[i] * Math.pow(2, 10 - i)
        }
        document.getElementById('displayBox').innerHTML = val
    }

    function displayErr() {
        let arrayInp = arrayUpdate()
        let onesPlaces = []
        for (let i = 0; i < arrayInp.length; i++) {
            if (arrayInp[i] == 1) {
                onesPlaces.push(i)
            }
        }
        let xor = onesPlaces[0]
        for (let i = 1; i < onesPlaces.length; i++) {
            xor = xor ^ onesPlaces[i]
        }
        if(xor==0){
            document.getElementById('displayErr').innerHTML = '-'
        }
        else{
            document.getElementById('displayErr').innerHTML = xor
            return xor
        }
    }

    function correctErr(){
        let error = displayErr()
        console.log(error)
        if(error==0){
            document.getElementById('q').checked = !document.getElementById('q').checked
        }
        if(error==1){
            document.getElementById('w').checked = !document.getElementById('w').checked
        }
        if(error==2){
            document.getElementById('e').checked = !document.getElementById('e').checked
        }
        if(error==3){
            document.getElementById('r').checked = !document.getElementById('r').checked
        }
        if(error==4){
            document.getElementById('a').checked = !document.getElementById('a').checked
        }
        if(error==5){
            document.getElementById('s').checked = !document.getElementById('s').checked
        }
        if(error==6){
            document.getElementById('d').checked = !document.getElementById('d').checked
        }
        if(error==7){
            document.getElementById('f').checked = !document.getElementById('f').checked
        }
        if(error==8){
            document.getElementById('z').checked = !document.getElementById('z').checked
        }
        if(error==9){
            document.getElementById('x').checked = !document.getElementById('x').checked
        }
        if(error==10){
            document.getElementById('c').checked = !document.getElementById('c').checked
        }
        if(error==11){
            document.getElementById('v').checked = !document.getElementById('v').checked
        }
        if(error==12){
            document.getElementById('h').checked = !document.getElementById('h').checked
        }
        if(error==13){
            document.getElementById('j').checked = !document.getElementById('j').checked
        }
        if(error==14){
            document.getElementById('k').checked = !document.getElementById('k').checked
        }
        if(error==15){
            document.getElementById('l').checked = !document.getElementById('l').checked
        }

    }

    function setBits() {
        let value = document.getElementById('value').value
        let valBin = Number(value).toString(2)
        var len = valBin.length
        var elevenBit = []
        for (let i = 0; i < 11 - len; i++) {
            elevenBit.push('0')
        }
        for (let i = 0; i < len; i++) {
            elevenBit.push(valBin[i])
        }

        document.getElementById('r').checked = (elevenBit[0] == 1)
        document.getElementById('s').checked = (elevenBit[1] == 1)
        document.getElementById('d').checked = (elevenBit[2] == 1)
        document.getElementById('f').checked = (elevenBit[3] == 1)
        document.getElementById('x').checked = (elevenBit[4] == 1)
        document.getElementById('c').checked = (elevenBit[5] == 1)
        document.getElementById('v').checked = (elevenBit[6] == 1)
        document.getElementById('h').checked = (elevenBit[7] == 1)
        document.getElementById('j').checked = (elevenBit[8] == 1)
        document.getElementById('k').checked = (elevenBit[9] == 1)
        document.getElementById('l').checked = (elevenBit[10] == 1)

        setParity()
        displayVal()
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.pageTitle}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-btn" onClick={() => clear()}>Clear Bits</a>
                        </li>
                        <li>
                            <a className="nav-link nav-btn" onClick={() => setParity()}>Set Parity</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-btn" onClick={() => displayVal()}>Display Value</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-btn" href=""></a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-warning" id="displayBox">0</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-btn" href=""></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-btn" onClick={() => displayErr()}>Display Error Bit</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-btn" href=""></a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-warning" id="displayErr">-</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-btn" href=""></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-btn" onClick={() => correctErr()}>Correct Error</a>
                        </li>
                    </ul>
                    {props.showSearch ? <form className="d-flex">
                        <input className="form-control me-2" type="text" placeholder="Set Bits" aria-label="Search" id="value" />
                        <a className="btn btn-primary" onClick={() => setBits()}>Set</a>
                    </form> : ""}
                </div>
            </div>
        </nav>
    )
}

Header.defaultProps = {
    pageTitle: "Enter title here",
    showSearch: true,
}

Header.propTypes = {
    pageTitle: propTypes.string,
    showSearch: propTypes.bool,
    // showSearch: propTypes.bool.isRequired,
}

