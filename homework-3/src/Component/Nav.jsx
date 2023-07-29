import './Nav.css'

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-between" id="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Danh Mục Sản Phẩm</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Giao lắp chuyên nghiệp</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Bảo hành nhanh gọn</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Tổng hợp khuyến mãi</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#">
                  Nguyễn Kim Luxury
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Nav