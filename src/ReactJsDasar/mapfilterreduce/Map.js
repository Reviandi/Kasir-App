import React from 'react';


    const makanans = [
        {
            nama : 'Soto',
            harga : 12000
        },
        {
            nama : 'Bakso',
            harga : 15000
        },
        {
            nama : 'Mie Ayam',
            harga : 17000 
        },
        {
            nama : 'Nasi Goreng',
            harga : 20000
        },
    ];

    //reduce
    const total_bayar = makanans.reduce((total_harga, makanan) => {
        return total_harga + makanan.harga;
    },0);

const Map = () => {
  return (
    <div>
        <h1>Map Sederhana</h1>
        <ul>
            {makanans.map((makanan, index) => (
                <li>{index + 1}.{makanan.nama} - harga Rp.{makanan.harga}</li>
            ))}
        </ul>

        <h2>Map Filter Harga Yang Lebih Dari 11.000</h2>
        <ul>
        {makanans.filter((makanan) =>makanan.harga > 11000).map((makanan, index) => (
            <li>{index + 1}.{makanan.nama} - harga Rp.{makanan.harga}</li>
        ))}
    </ul>
    
        <h3>Total Harga : Rp.{total_bayar}</h3>
    </div>
  );
}

export default Map;
