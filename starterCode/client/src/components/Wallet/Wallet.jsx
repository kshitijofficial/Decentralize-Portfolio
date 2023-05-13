import './Wallet.css';

const Wallet =()=>{
 
      return<>
      <div className="header">
      {false  && <button className="connectBTN">
         <a href="https://metamask.app.link/dapp/sriche.netlify.app/">Click For Mobile</a>
        </button>  } 
       <button className="connectBTN">Connect Metamask</button>
      </div>
      </>
}
export default Wallet;