import React, { Component } from 'react'

export class footer extends Component {
  render() {
    return (
      <div>
        <div className='footer-space'></div>
        <div class="footer-social-copyrights denim" style={{backgroundColor:"#ef5a16"}}> 
            <div class="footer-copyrights " style={{color:"#ffffff"}}>
                <p style={{textAlign:"center"}}>Desss, Inc.2825, Wilcrest Dr, #608 Houston, TX - 77042 Ph: 713-589-6496</p> 
                <p style={{textAlign:"center"}}>Copyrights © 2023. All rights reserved | Powered by DESSS Inc</p> 
            </div> 
        </div>
      </div>
    )
  }
}

export default footer