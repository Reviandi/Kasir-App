import React from 'react'

//Const
// const harga = 3000;
// harga = 4000;

//Var
// var harga = 20000;
// if (true) {
//     var harga = 30000;
// }

//let
let harga = 20000;
if (true) {
    let harga = 30000;
}


const Variabel = () => {
    return (
        <div>
            <p>Harga = Rp.{harga}</p>
        </div>
    )
}

export default Variabel;