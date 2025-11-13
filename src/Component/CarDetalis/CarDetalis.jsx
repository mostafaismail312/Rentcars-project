import React from "react";
import { FaTags, FaTruck, FaHeadset, FaCheckCircle } from "react-icons/fa";
import Style from "../BestDeals/BestDeals.module.css";

export default function CarDetalis() {
  return (
    <>
      <section className="py-5">
        <div className="container-fluid px-0 ">
          <div className="row align-items-center gx-5">
            <div
              className={`${Style.img} col-lg-6 d-none d-lg-flex align-items-center justify-content-center position-relative `}
            >
              <img src="/public/images/Audi.png" className="w-100" alt="" />
            </div>

            <div className="col-md-6">
              <div className=" section-heading">
                <h5
                  className="section-subtitle text-uppercase text-primary mb-4  rounded "
                  style={{
                    color: "#0d6efd",
                    backgroundColor: "#0d6efd20",
                    width: "fit-content",
                    padding: "12px 20px",
                  }}
                >
                  why choose us
                </h5>
                <h2 className="section-title mb-2 fw-light  mb-4">
                  We offer the best experience <br></br> with our rental deals
                </h2>
              </div>

              <div>
                <img
                  alt="airCondition"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHrSURBVHgBpVPZbcJAELVNOL9cAlQQqCAuASoI/uSGCoAKQBzi004HpAJMBZAKcCqIkUBCXM571i4yEbEUZaWRZ3fmzbw5rCgRZzweG5Qon6coo6qqZYgP1fnV59HjZDKxAdxALUB86K7v+3qtVjMjAwDYhrOjaZoHwAKSFaYlpH29XnXY8/V6fXgLMBgMsolEon08HofJZNI6n89vzWbTpnE6nc4RRAGgKBPgXoRPWWB6Gt6ZTcfDBhnyYUZ495DxK3TXwe45Ho+vcM2nUild63Q6HjKwWQ5Ej8Vi3dFoVP5ZK6ZRBPgVKstw0A+jUqm4qqC6IvhyuZhwykLvgo0LPQBD50TyYNDHl6y6LA1BcnKMZjqddk3T9HiZzWZkM2C9QaNU1c5kMiVpx7GRNChXEw+t3W53qx9MigAb7I8QY7/fl0PlGGAVBJcMPkF3gag2nZGRQUrQ5SItYe/C3kJgV5ZzY4BxELgmgF+UU2g0Go7MiFrtarWag/oOMJk5p9NpHgRgLRyhCOCC2keo1rsDVvRZI/uWGGI1ROdjgWvKlWWXZZ3QX1iSbJiYyJZjR0k5Yu9WGd3PYjm8w+HQgmNPNJBHx72PDRxyeTh/iXn4M4ml4Q/Ef8OH3kcAg71Q/nJAfUhR/nMsy9Kj7N+ahA+E04B9zwAAAABJRU5ErkJggg=="
                />
                <small className="text-muted ms-4 fs-5">Air conditioning</small>
              </div>
              <div>
                <img
                  alt="user"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGXSURBVHgBrZTLbcJAEEDX/A5wSQchHbgEqMB0AD4iPsIV2B2YCCGOmAqiVICpIO4gpANyRXzyhgCyHBatk4y02vXOztuZ2Rkr9c9i3VNOJpOGZVk+S/u8lfDt9Xq9RGdT0Clms5lfKBSWANaHw8E7Ho8u2x+Mt+l06qs8HoZhWK9UKu9AvH6/P07rgHWY5lzSHAwGsZGH5XI5wGCVhYkQboTXMd63btneBHL4kSlWGtnv9ysutI2BhPoJ9EFp5K5Osy+v6JBLnaEDNDIGbrfbMXlSPEyYhsqaR5mLDmB8y1Zbh5RNndCXjIvHG9YtQBuAzW63u84FvMi5TGxg4mlSq9Ui13U36i8i3sowOasr7IdisdghPIfwGmkdnsaUzGI4HEZGQOlfQHOWEuIzxkmpVDr17m63q0tBc4kjuUXnZrvFysAk6S8Cqlarwb1ckduAyc+2oJUKU/p3KeFwIFAGAlRas02ZPXmed7r8WofkTH5VyhQmQl+PZCYlo8veFchmm7y8qvyywBH7B1D6V30XcF75jY25fAFWAbLQxJPO8QAAAABJRU5ErkJggg=="
                />
                <small className="text-muted ms-4 fs-5">2 Passanger</small>
              </div>
              <div>
                <img
                  alt="frame"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFgSURBVHgB5VTLbYNQEASM7SsdhFQQl0AqCO7AOSOIqSAlYPE9Qge2O7ArSEqghJz5ZlZi0YMQfPElykqIZZgd9s3bhyT9u5A5CYLAVBTlpa7rq+M4GeOe5+mr1WpPeVEUB9d1c34XhuFeluUnsUbhIogdke4Wi0Xq+/6Oi9brdYrbG13L5TJlnDgQ87gGDRm9IABj0LYs65w3TfMo4NoUpwutF0TLJxDyjpirqpoxC50fBPEz58QRaj5t2z5J44iiqOXWxYBXGd6lY5y4VCNiinTnUMcA2t/gywMMy35o2/Zr1L0G/J2XPSfo4RpgEGNhc0S/grudFYTxzzD4ImLkIQpby7JepRtxdw97QRruLtV+kODhFP6rIInhFHx0xUfR/DiOPXhIz+bU6EwKYkg34ilAGJzA0+0UPitYVdVF3H502U89cPEEnG8J9vORJIlelqVBwuNdpj8R3SeP15+Lb2pVhXJsVkpdAAAAAElFTkSuQmCC"
                />
                <small className="text-muted ms-4 fs-5">auto</small>
              </div>
              <div>
                <img
                  alt="doors"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE+SURBVHgB1ZTRbYMwEIaNMSDx5A3iTlA2CCtkg/CIhBQxQZsJrAoWyAbtBNANyAbuBn1GAvq7wgiaNIWKh/aXTvbZ5rszPpuQvy5ryWIpJWeMBV3XCcuyBKV0Y+bquj6maarYHIjrugdAQkACDJ1hFXzVNI3Sa2zblgh0Qvd7IECB4ziyh5wAOCZJUl5bm+f5o+mzaxl5nvcAwB7uk+/7uyiK3skNIegGWaoLIGAC2ysAqwC6+wlkEtBtHMdqAhzBFLa2IzOFbwQaZXw6mijQ6NMLsywLyUy1bcthb8b/zLAHiH7sFcbxowtdGjOhU6Cuq9H8FvW1vQVAoAol86L7WHuAlRPgUiEBPirqyy3/QgK2Nw4yHqqBkhWkK2NVILRuhrjHauh/iXImy3VvbskAxCNQ4qT0A8DJcj2Tf6UPNWB+NWKxKDQAAAAASUVORK5CYII="
                />
                <small className="text-muted ms-4 fs-5">4 doors</small>
              </div>
              <div className="d-flex py-2">
                <p className="text-capitalize fs-5">price:</p>
                <p className="fs-5 ms-3">$2238.35 /day</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
