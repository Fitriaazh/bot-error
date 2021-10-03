import React from "react";

import Baiklah from './Baiklah.png';
import Efektif from './Efektif.png';
import Jawaban from './Jawaban.png';
import Masalah from './Masalah.png';
import Memaparkan from './Memaparkan.png';
import Misal from './Misal.png';
import Paparkan from './Paparkan.png';
import Perubahan from './Perubahan.png';
import Semangat from './Semangat.png';
import Solusi from './Solusi.png';
import Sudah from './Sudah.png';

import "./bot.css";

export default function Bot() {
    return (
<body>
    <h1>Curhat Session</h1>
    <div className="home-psikolog">
        <i className="fas fa-chevron-left"></i></div>
        <center>
            <div className="semangat">
            <img src={Semangat} alt="semangat"/></div>
        <div className="chat">
        <img src={Masalah} alt="masalah"/></div>
    </center>
    <button type="button" className="button-belajar">
        <p className="belajar">Belajar</p>
       </button>
    <button type="button" className="button-keluarga">
        <p className="keluarga">keluarga</p>
       </button>
    <button type="button" className="button-teman">
        <p className="Teman">Teman</p>
       </button>
    <button type="button" className="button-kebiasaan">
        <p className="kebiasaan">kebiasaan</p>
       </button>
       <hr></hr>
    <div className="respon">
    <img src={Misal} alt="misal"/></div>
     <hr style="top:375px"></hr>
     <div className="wandi">
     <img src={Efektif} alt="efektif"/></div>
    <button type="button" className="button-sudah">
      <p className="sudah">sudah</p>
     </button>
    <button type="button" className="button-belum">
      <p className="belum">belum</p>
     </button>
     <div className="batas">
     <hr style="top: 466px;"/></div>
    <div className="user">
    <img src={Jawaban} alt="Jawaban"/></div>
     <div className="batas">
      <hr style="top: 520px;"/></div>
    <div className="bot">
    <img src={Paparkan} alt="paparkan"/></div>
    <div className="batas">
        <hr style="top: 590px;"/></div>
    <div className="memaparkan">
    <img src={Memaparkan} alt="memaparkan"/></div>
        <div className="batas">
          <hr style="top: 643px;"/></div>
    <div className="bott">
    <img src={Solusi} alt="solusi"/></div>
    <button type="button" className="button-cukup">
          <p className="cukup">cukup</p>
         </button>
    <button type="button" className="button-curhat">
          <p className="curhat">curhat lagi</p>
         </button>
         <div className="batas">
          <hr style="top: 810px;"/></div>
    <div className="pilihan">
    <img src={Sudah} alt="sudah"/></div>
        <div className="batas">
          <hr style="top: 870px;"/></div>
      <div className="ending">
      <img src={Baiklah} alt="baiklah"/></div>
    <button type="button" className="button-mulai">
          <p className="mulai kembali sesi curhatmu">mulai kembali sesi curhatmu</p>
         </button>
         <div className="batas">
          <hr style="top: 1050px;"/></div>
         <div className="perubahan">
         <img src={Perubahan} alt="perubahan"/>
         </div>
     <button type="button" className="button-next">
          <p className="next">next</p>
         </button>
          
  






    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
  
  </body>
    );

}