import Link from 'next/link'

export default function Card({movie}) {
    return (

        <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src={movie.image} alt="" /></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">{movie.name}</a>
            </h4>
            <h5>$24.99</h5>
            <p className="card-text">{movie.description}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>

    )
}
