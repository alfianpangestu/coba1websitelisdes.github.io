/* globals Chart:false */

(() => {
  'use strict'

  // Graphs
  const ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      
      labels: [
        'PT WINATA MANDIRI SEJAHTERA ABADI',
        'PT. DIJA JAYA PERKASA',
        'PT BIRO TEKNIK DELTA',
        'PT CEMARA JAYA RAYA LESTARI',
        'PT DETRA ADIYASA PUTRA MANDIRI',
        'PT KARYA JAYADI MANDIRI',
        'PT WAHYU AGUNG ELEKTRINDO',
        'PT ANUGRAH PELANGI TEHNIK',
        'PT SIGMA TIRTA UTAMA MANDIRI',
        'PT BATU SELA TEHNIK',
        'PT BUMI SENTOSA',
        'PT BINTANG LOMBOK UTAMA',
        'PT RINA MITRA LESTARI',
        'PT SILVIA LOMBOK ELEKTRINDO',
        'PT ELITE CENTAUR INDONESIA',
        'PT ANTAR NUSA TEKNIK',
        'PT HARI MUKTI ABADI',
        'PT KARISMA ARTA ELEKTRINDO',
        'PT MEGA TEKNIK ELEKTRIKA',
        'PT CIMBUANA PUTRA ADITYA',
        'PT SAKA ANGKASA MULIA',
        'PT NUSA PRATAMA ELECTRIC',
        'PT KARYA INSANI JAYA',
        'PT ARDI LESTARI CEMERLANG',
        'PT AGUNG LANGGENG SENTOSA',
        'PT KAMILIA UTAMA SENTOSA',
        'PT DAYA SURYA TEHNIK',
        'PT DUTA INTI PERDANA',
        'PT SARANA SENTRAL SWADAYA UTAMA',
      ],
      datasets: [{
        data: [
          100,
          0,
          4,
          4,
          48,
          62,
          15,
          0,
          71,
          86,
          32,
          3,
          51,
          59,
          0,
          88,
          66,
          39,
          14,
          58,
          31,
          0,
          100,
          91,5,
          70,
          0,
          0,
          10,
          5,
        ],
        lineTension: 0,
        backgroundColor: '007bff',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          boxPadding: 3
        }
      }
    }
  })
})()
