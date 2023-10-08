import React from 'react';
import { GitHub, Instagram, Globe } from 'react-feather';

function Footer() {
  return (
    <footer className='my-3'>
      <ul className="sosial-media">
        <li><a href="https://github.com/haniframadhani/gahi" target='_blank' rel='noopener noreferer' className='icon mx-1'><GitHub /></a>
        </li>
        <li><a href="https://www.instagram.com/haniframadhani_design/" target='_blank' rel='noopener noreferer' className='icon mx-1'><Instagram /></a></li>
        <li><a href="https://haniframadhani.github.io/" target='_blank' rel='noopener noreferer' className='icon mx-1'><Globe /></a></li>
      </ul>
      <p className="text-center mb-0 footer">copyright&copy; 2022 Hanif Ramadhani. All Right Reversed.</p>
    </footer>
  )
}
export default React.memo(Footer);