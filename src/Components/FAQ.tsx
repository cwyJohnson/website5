import styled from "styled-components";
import './FAQ.css'

const Container = styled("div")`
    width: 90%;
    background-color: white;
    margin:auto;
    margin-top:100px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const FAQ =() =>{
    return (
        <Container id="FAQ">
            <div className="text-center">
                <h2>FAQ</h2>
            </div>
            <section className="container my-5" id="maincontent">
                <section id="accordion">
                <a className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary border-top" aria-controls="faq-17" aria-expanded="false" data-toggle="collapse" href="#faq-17" role="button">
                    <div className="position-relative">
                    <h2 className="h4 m-0 pr-3">
                        When can I mint a IT DOG?
                    </h2>
                    <div className="position-absolute top-0 right-0 h-100 d-flex align-items-center">
                        <i className="fa fa-plus"></i>
                    </div>
                    </div>
                </a>
                <div className="collapse" id="faq-17" style={{}}>
                    <div className="card card-body border-0 p-0">
                    <p>Now!</p>
                    </div>
                </div>

                <a className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary border-top" aria-controls="faq-18" aria-expanded="false" data-toggle="collapse" href="#faq-18" role="button">
                    <div className="position-relative">
                    <h2 className="h4 m-0 pr-3">
                        Where can I mint a IT DOG?
                    </h2>
                    <div className="position-absolute top-0 right-0 h-100 d-flex align-items-center">
                        <i className="fa fa-plus"></i>
                    </div>
                    </div>
                </a>
                <div className="collapse" id="faq-18" style={{}}>
                    <div className="card card-body border-0 p-0">
                    <p>Here!</p>
                    <p>
                    </p>
                    </div>
                </div>

                <a className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary border-top" aria-controls="faq-19" aria-expanded="false" data-toggle="collapse" href="#faq-19" role="button">
                    <div className="position-relative">
                    <h2 className="h4 m-0 pr-3">
                        How much will 1 IT DOG cost?
                    </h2>
                    <div className="position-absolute top-0 right-0 h-100 d-flex align-items-center">
                        <i className="fa fa-plus"></i>
                    </div>
                    </div>
                </a>
                <div className="collapse" id="faq-19" style={{}}>
                    <div className="card card-body border-0 p-0">
                    <p>1 sol</p>
                    <p>
                    </p>
                    </div>
                </div>

                <a className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary  border-top" aria-controls="faq-20" aria-expanded="false" data-toggle="collapse" href="#faq-20" role="button">
                    <div className="position-relative">
                    <h2 className="h4 m-0 pr-3">
                        How many IT DOG can I purchase?
                    </h2>
                    <div className="position-absolute top-0 right-0 h-100 d-flex align-items-center">
                        <i className="fa fa-plus"></i>
                    </div>
                    </div>
                </a>
                <div className="collapse" id="faq-20">
                    <div className="card card-body border-0 p-0">
                    <p>as many as you'd like</p>
                    <p>
                    </p>
                    </div>
                </div>

                <a className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary  border-top" aria-controls="faq-21" aria-expanded="false" data-toggle="collapse" href="#faq-21" role="button">
                    <div className="position-relative">
                    <h2 className="h4 m-0 pr-3">
                        What is the total supply?
                    </h2>
                    <div className="position-absolute top-0 right-0 h-100 d-flex align-items-center">
                        <i className="fa fa-plus"></i>
                    </div>
                    </div>
                </a>
                <div className="collapse" id="faq-21">
                    <div className="card card-body border-0 p-0">
                    <p>6666!</p>
                    <p>
                    </p>
                    </div>
                </div>

                <a className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary  border-top" aria-controls="faq-22" aria-expanded="false" data-toggle="collapse" href="#faq-22" role="button">
                    <div className="position-relative">
                    <h2 className="h4 m-0 pr-3">
                        Which wallets will be supported?
                    </h2>
                    <div className="position-absolute top-0 right-0 h-100 d-flex align-items-center">
                        <i className="fa fa-plus"></i>
                    </div>
                    </div>
                </a>
                <div className="collapse" id="faq-22">
                    <div className="card card-body border-0 p-0">
                    <p>All solana chain wallets are supported,but Phantom is recommended.</p>
                    <p>
                    </p>
                    </div>
                </div>
                </section>
            </section>
        </Container>
    )
}

export default FAQ;