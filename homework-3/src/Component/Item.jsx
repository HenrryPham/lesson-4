import './Item.css'
import hotTrend from './data';
import Detail from './Modal';

function Item(props) {
  console.log(props)

  return (
    <>
      <div className="product">
        <div className="card">
          <img src={hotTrend[1].img} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">
              Name: {hotTrend[1].name}
            </h5>
            <p className="card-text">
              Price: {hotTrend[1].price}
            </p>
            <p className="card-text">
              Discount: {hotTrend[1].discount}
            </p>
            <p className="card-text">
              Chip: {hotTrend[1].chip}
            </p>
            <p className="card-text">
              sizeScreen: {hotTrend[1].sizeScreen}
            </p>
            <p className="card-text">
              Ram: {hotTrend[1].ram}
            </p>
            <p className="card-text">
              Rom: {hotTrend[1].rom}
            </p>
          </div>
          <div>
            <div>
              {/* Button trigger modal */}
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Detail
              </button>
              {/* Modal */}
              <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Name: {hotTrend[1].name}</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                      <div className="image-">
                        <img src={hotTrend[1].img} alt="" className="" />
                      </div>
                      <div className="product-detail">
                        <h5>Name: {hotTrend[1].name}</h5>
                        <p>Price: {hotTrend[1].price}</p>
                        <p>Discount: {hotTrend[1].discount} %</p>
                        <p>Trả góp 0%</p>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-primary">Thêm vào giỏ hàng</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </>
      );
}
      export default Item