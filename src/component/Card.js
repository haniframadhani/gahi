import React, { useState, Component } from 'react'
import '../css/style.css';
import Footer from './Footer';
import ConstructorApi from '../function/ConstructorApi';
import axios from 'axios';
import { DateTime } from 'luxon';

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      api: ConstructorApi(''),
      hariIni: DateTime.now().setZone('America/New_York').toFormat('yyyy-MM-dd'),
      tanggalInput: '',
      kredit: '',
      tanggal: '',
      penjelasan: '',
      tipe: '',
      judul: '',
      gambar: '',
      thumb: '',
      video: '',
      url: '',
      tanggalText: ''
    }
  }

  componentDidMount() {
    axios.get(this.state.api)
      .then((response) => {
        this.setState({
          kredit: response.data.copyright,
          tanggal: response.data.date,
          penjelasan: response.data.explanation,
          judul: response.data.title,
          gambar: response.data.url,
          thumb: response.data.thumbnail_url,
          video: response.data.url,
          tipe: response.data.media_type,
        })
        response.data.media_type != 'video' ? this.props.setBg(response.data.url) : this.props.setBg(response.data.thumbnail_url);
        this.props.setTanggal(response.data.date);
        this.props.setTitle(response.data.title);
        this.props.setDesc(response.data.explanation);
      })
  }

  handleButton = () => {
    axios.get(this.state.api)
      .then((response) => {
        this.setState({
          kredit: response.data.copyright,
          tanggal: response.data.date,
          penjelasan: response.data.explanation,
          judul: response.data.title,
          gambar: response.data.url,
          thumb: response.data.thumbnail_url,
          video: response.data.url,
          tipe: response.data.media_type,
        })
        response.data.media_type != 'video' ? this.props.setBg(response.data.url) : this.props.setBg(response.data.thumbnail_url);
        this.props.setTanggal(response.data.date);
        this.props.setTitle(response.data.title);
        this.props.setDesc(response.data.explanation);
      })
  }

  handleChange = e => {
    this.setState({
      tanggalInput: e.target.value,
      api: ConstructorApi(e.target.value)
    });
  }

  render() {
    return (
      <div className='card'>
        {this.state.tipe != 'video' ?
          <img className='gambar' src={this.state.gambar} alt="" />
          :
          <iframe className='video' src={this.state.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
        <div className="detail text-center">
          <h1>Gambar Astronomi Hari Ini</h1>
          <form className='mt-2'>
            <input type="date" name="tanggal" id="tanggal" min="1995-06-16" max={this.state.hariIni} onChange={this.handleChange} value={this.state.tanggalInput} />
            <a className='btn btn-cari' onClick={this.handleButton}>cari</a>
          </form>
          <p className='mt-2'>{this.props.waktu}</p>
          <h3 className='mt-2'>{this.props.status !== 200 ? this.state.judul : this.props.judul}</h3>
          <p className='text-justify mt-1'>{this.props.status !== 200 ? this.state.penjelasan : this.props.penjelasan}</p>
          <p className='mt-2'>Kredit Gambar &amp; Hak Cipta : {this.state.kredit}</p>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Card;