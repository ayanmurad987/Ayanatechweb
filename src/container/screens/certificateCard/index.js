import './index.css';

function CertificateCard() {
  return (
    <div className='certificateComponent'>
      <div className='CardsDiv'>
        <div className='card1'></div>
        <div className='card2'></div>
        <div className='card3'></div>
        <div className='card4'></div>
      </div>
      <div className='contentSection'>
        <p className='certifecatetext1'>
          CREATE A PROFILE
        </p>
        <p className='certifecatetext'>Get certificates</p>
        <p className='certifecatetext1'>After passing a test, we’ll award you with an online certificate. You can add them to your profile after completing the courses.</p>
      </div>
    </div>
  );
}

export default CertificateCard;
