export default function Footer() {
    return (
        <footer className="text-center text-lg-start text-white bg-dark">
            <div className="container p-4 pb-0">
                <section >
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 className="mb-4 font-weight-bold">
                           Patitas Pet Store
                        </h6>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore vero eaque explicabo. Eos ullam corrupti eveniet optio.
                        </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 className="mb-4 font-weight-bold">Productos</h6>
                        <p>
                            <a className="text-white">Top de ventas</a>
                        </p>
                        <p>
                            <a className="text-white">Perro</a>
                        </p>
                        <p>
                            <a className="text-white">Gato</a>
                        </p>
                        <p>
                            <a className="text-white">Animales exóticos</a>
                        </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 className="mb-4 font-weight-bold">
                            Otros links
                        </h6>
                        <p>
                            <a className="text-white">Cuenta</a>
                        </p>
                        <p>
                            <a className="text-white">Fundación</a>
                        </p>
                        <p>
                            <a className="text-white">Partners</a>
                        </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">

                        <h6 className="mb-4 font-weight-bold">Contacto</h6>
                        <p><i className="fas fa-home mr-3"></i> Viña del Mar - Chile</p>
                        <p><i className="fas fa-envelope mr-3"></i> patitas@gmail.com</p>
                        <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                        <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                        </div>
                    </div>
                </section>
                <section className="p-3 pt-0">
                    <div className="col-md-7 col-lg-8 text-center text-md-start">
                        <div className="p-3">
                        © 2023 Copyright
        
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                        <a
                        className="btn btn-outline-light btn-floating m-1"
                        role="button"
                        ><i className="fab fa-facebook-f"></i
                        ></a>
                        <a
                        className="btn btn-outline-light btn-floating m-1"
                        role="button"
                        ><i className="fab fa-twitter"></i
                        ></a>
                        <a
                        className="btn btn-outline-light btn-floating m-1"
                        role="button"
                        ><i className="fab fa-google"></i
                        ></a>
                        <a
                        className="btn btn-outline-light btn-floating m-1"
                        role="button"
                        ><i className="fab fa-instagram"></i
                        ></a>
                    </div>
                </section>
            </div>
        </footer>
    )
};