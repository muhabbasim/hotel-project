import React from 'react'
import ConsultForm from './ConsultForm';
interface Props {
    padding: string;
}
const ConsultSection:React.FC<Props> = ({padding}) => {
  return (
    <section className={`tl-5-consult ${padding}`}>
        <div className="tl-5-consult-form-container">
            <div className="tl-5-consult-heading">
                <h6 className="tl-5-consult-sub-title"></h6>
                <h2 className="tl-5-section-title">Get a Consultation</h2>
            </div>

            <ConsultForm style='' column='col-sm-6' btnStyle='tl-5-def-btn'/>
        </div>

        <div  className="tl-5-consult-img">
            <img style={{maxHeight: 650}} src="https://images.unsplash.com/photo-1749517841202-ef5cb6561e5e?q=80&w=697&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Students"/>
        </div>
    </section>
  )
}

export default ConsultSection